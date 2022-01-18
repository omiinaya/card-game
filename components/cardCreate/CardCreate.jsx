import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

export default function BasicSelect() {
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("Common");
  const [image, setImage] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("")
  const [atk, setAtk] = useState(0)
  const [def, setDef] = useState(0)

  useEffect(() => {
    console.log(rarity);
    console.log(name);
  }, [rarity, name]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeRarity = (event) => {
    setRarity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Card Rarity:</InputLabel>
        <Select
          size="small"
          value={rarity}
          label="Service"
          onChange={handleChangeRarity}
        >
          <MenuItem value={"Common"}>Common</MenuItem>
          <MenuItem value={"Rare"}>Rare</MenuItem>
          <MenuItem value={"Unique"}>Exotic</MenuItem>
          <MenuItem value={"Legendry"}>Legendary</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="cardName"
          name="cardName"
          label="Card Name:"
          size="small"
          defaultValue={name}
          onChange={handleChangeName}
          InputLabelProps={{ shrink: true }}
          variant="standard"
        />
      </FormControl>
    </Box>
  );
}
