import React from "react";
import { Box, Stack, Button, styled, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";


const DropdownButton = styled(Button)({
  color: '#151515', 
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '22px',
  '&.MuiButton-root': {textTransform: 'initial'},
})

const SubNav = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

      <Stack direction={"row"} sx={{background: '#F9F9F9', color: '#151515', height: '55px', alignItems: 'center', padding: '0 32px', maxWidth: '1280px' }}>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Women
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Men
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Kids
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Home
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Entertainment
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <DropdownButton
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Pet Care
          </DropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Stack>
  );
};

export default SubNav;
