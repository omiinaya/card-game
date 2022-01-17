import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function BasicSelect() {
  const [age, setAge] = useState('Common');

  useEffect(() => {
    console.log(age)
  }, [age]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Card Rarity: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Card Rarity"
          onChange={handleChange}
        >
          <MenuItem value={'Common'}>Common</MenuItem>
          <MenuItem value={'Rare'}>Rare</MenuItem>
          <MenuItem value={'Special'}>Special</MenuItem>
          <MenuItem value={'Unique'}>Unique</MenuItem>
          <MenuItem value={'Legendry'}>Legendary</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
