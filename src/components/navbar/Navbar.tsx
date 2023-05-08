
// import react from 'react'
import SelectData from './SelectData'
import InputSearch from './InputSearch'
import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

export default function Navbar () {
    return (
        <Box
        component="div"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
       

        >
            <SelectData />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputSearch />
        </Box>
    )
}

