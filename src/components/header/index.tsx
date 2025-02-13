import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { User } from '../../features/reducers/authSlice.ts';

export interface IHeaderProps {
  user: User | null;
}

const Header = ({ user }: IHeaderProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
                      <Typography variant="h3" component="h3">Events</Typography>
                    </Link>
                    {
                      user && (
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <Typography variant="body2">
                            Welcome { user.type }
                          </Typography>
                          <Button type="button">
                            <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>Logout</Link>
                          </Button>
                        </div>
                      )
                    }
                  </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;