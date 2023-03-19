import { Box, Container, TextField } from '@mui/material'
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <div>
            <Container maxWidth="xs">
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="search"
                        // label="search"
                        type="search"
                        id="search"
                        placeholder='Search products, categories...'
                    />
                </Box>
            </Container>
        </div>
    )
}

export default Navbar