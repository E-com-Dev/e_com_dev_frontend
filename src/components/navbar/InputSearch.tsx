import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function InputSearch () {
    return (
        <InputBase sx={{textAlign: 'center'}}
            error
            // id="outlined-error"
            placeholder="Search Products, categories ..."
            inputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>,
              }}
      />
           
    )
}