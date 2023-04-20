import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectData () {
  const [AllCategories, setAllCategories] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAllCategories(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small-label">All Categories</InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        value={AllCategories}
        label="All Categories"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>
        <MenuItem value={10}>Women</MenuItem>
        <MenuItem value={20}>Men</MenuItem>
        <MenuItem value={30}>Kids</MenuItem>
        <MenuItem value={30}>Home</MenuItem>
        <MenuItem value={30}>Entertainment</MenuItem>
      </Select>
    </FormControl>
  );
}