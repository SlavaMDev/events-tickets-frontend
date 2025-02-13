import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import Tickets from '../../features/ticket';
import { useSelector } from 'react-redux';
import { AuthState } from '../../features/reducers/authSlice.ts';

const HomePage = () => {
  const auth = useSelector((state: { auth: AuthState;  }) => state.auth);
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        {
          auth.user ? (
            <Tickets />
          ) : (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography>Enter for checking our events</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"><Link to="/login">Login</Link></Button>
                  <Button size="small"><Link to="/registration">Registration</Link></Button>
                </CardActions>
              </Card>
            </Box>
          )
        }
      </Container>
    </>
  )
}

export default HomePage;