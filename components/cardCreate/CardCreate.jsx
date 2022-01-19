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
  const [name, setName] = useState("");
  const [rarities, setRarities] = useState([]);
  const [types, setTypes] = useState([]);
  const [rarity, setRarity] = useState("Common");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);

  const getRarities = () => {
    axios.get(`/api/cardRarity`).then((res) => {
      setRarities(res.data.data);
    });
  };

  const getTypes = () => {
    axios.get(`/api/cardType`).then((res) => {
      setTypes(res.data.data);
    });
  };

  useEffect(() => {
    getRarities();
    getTypes();
  }, []);

  useEffect(() => {
    console.log("Rarity: " + rarity);
    console.log("Name: " + name);
    console.log("Image: " + image);
  }, [rarity, name, image]);

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

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    rarities.length > 0 && (
      <form>
        <FormControl style={{ minWidth: 105, margin: 0 }}>
          <InputLabel>Card Rarity:</InputLabel>
          <Select value={rarity} label="Service" onChange={handleChangeRarity}>
            {rarities.map((x) => (
              <MenuItem key={x.rarityName} value={x.rarityName}>
                {x.rarityName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: 105, margin: 0 }}>
          <TextField
            id="cardName"
            name="cardName"
            label="Card Name:"
            defaultValue={name}
            onChange={handleChangeName}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </FormControl>
        <FormControl style={{ minWidth: 205, margin: 0, display: "block" }}>
          <TextField
            style={{ minWidth: 300 }}
            id="cardImage"
            name="cardImage"
            label="Image Link:"
            defaultValue={image}
            onChange={handleChangeImage}
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Card Description"
            onChange={handleChangeDesc}
            style={{ width: 300 }}
          />
        </FormControl>
      </form>
    )
  );
}
