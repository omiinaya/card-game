import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";

export default function BasicSelect() {
  //selectors
  const [rarities, setRarities] = useState([]);
  const [types, setTypes] = useState([]);
  //card info
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [atk, setATK] = useState(0);
  const [def, setDEF] = useState(0);
  const [data, setData] = useState([]);

  const getRarities = () => {
    axios.get(`/api/cardRarity`).then((res) => {
      setRarities(res.data.data);
      setRarity(res.data.data[0].rarityName)
    });
  };

  const getTypes = () => {
    axios.get(`/api/cardType`).then((res) => {
      setTypes(res.data.data);
      setType(res.data.data[0].typeName)
    });
  };

  useEffect(() => {
    getRarities();
    getTypes();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);

  useEffect(() => {
    console.log(rarities);
    console.log(types);
  }, [rarities, types]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeRarity = (event) => {
    setRarity(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  const handleChangeATK = (event) => {
    setATK(event.target.value);
  };

  const handleChangeDEF = (event) => {
    setDEF(event.target.value);
  };

  /*
  const handleChangeSubtype = (event) => {
    setSubType(event.target.value);
  };
  */

  async function handleSubmit() {
    let x = {
      cardName: name, //
      cardType: type, //
      cardRarity: rarity, //
      //cardSubType: subType,
      cardImage: image, //
      cardDesc: desc, //
      cardATK: atk,
      cardDEF: def,
    }
    setData(x)

    const loginApi = await fetch(`api/card`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(x),
    }).catch(error => {
      console.error('Error:', error);
    });
    let result = await loginApi.json();
    if (result.success) {
      console.log(result)
      //Router.push('/');
    }
  }

  return (
    rarities.length > 0 && (
      <div>
        <FormControl style={{ margin: 0, display: "block" }}>
          <InputLabel shrink={true}>Card Rarity:</InputLabel>
          <Select
            style={{ width: 300 }}
            value={rarity}
            label="Rarity"
            onChange={handleChangeRarity}
          >
            {rarities.map((x) => (
              <MenuItem key={x.rarityName} value={x.rarityName}>
                {x.rarityName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ margin: 0, display: "block" }}>
          <InputLabel shrink={true}>Card Type:</InputLabel>
          <Select
            style={{ width: 300 }}
            value={type}
            label="Type"
            onChange={handleChangeType}
          >
            {types.map((x) => (
              <MenuItem key={x.typeName} value={x.typeName}>
                {x.typeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ margin: 0, display: "block" }}>
          <TextField
            style={{ width: 300 }}
            id="cardName"
            name="cardName"
            label="Card Name:"
            defaultValue={name}
            onChange={handleChangeName}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </FormControl>
        <FormControl style={{ margin: 0, display: "block" }}>
          <TextField
            style={{ width: 300 }}
            id="cardImage"
            name="cardImage"
            label="Image Link:"
            defaultValue={image}
            onChange={handleChangeImage}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </FormControl>
        <FormControl style={{ margin: 0, display: "block" }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Card Description"
            onChange={handleChangeDesc}
            style={{ width: 300 }}
          />
        </FormControl>
        <FormControl style={{ margin: 0, display: "block" }}>
          <TextField
            style={{ width: 150 }}
            id="cardATK"
            name="cardATK"
            label="Attack Points:"
            defaultValue={image}
            onChange={handleChangeATK}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
          <TextField
            style={{ width: 150 }}
            id="cardDEF"
            name="cardDEF"
            label="Defense Points:"
            defaultValue={image}
            onChange={handleChangeDEF}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </FormControl>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  );
}
