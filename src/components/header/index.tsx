import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
                  <Typography variant="h3" component="h3">Events</Typography>
                </Link>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;