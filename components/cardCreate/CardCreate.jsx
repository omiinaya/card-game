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
        <InputLabel id="card-rarity">Card Rarity: </InputLabel>
        <Select
          labelId="card-rarity"
          id="cardRarity"
          name="cardRarity"
          value={rarity}
          label="Card Rarity"
          variant="standard"
          onChange={handleChangeRarity}
        >
          <MenuItem value={"Common"}>Common</MenuItem>
          <MenuItem value={"Rare"}>Rare</MenuItem>
          <MenuItem value={"Special"}>Special</MenuItem>
          <MenuItem value={"Unique"}>Unique</MenuItem>
          <MenuItem value={"Legendry"}>Legendary</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="cardName"
          name="cardName"
          label="Card Name: "
          labelId="card-name"
          defaultValue={name}
          onChange={handleChangeName}
        />
      </FormControl>
    </Box>
  );
}
