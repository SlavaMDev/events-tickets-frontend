import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { loginUser, AuthState, UserLoginData } from './reducers/authSlice.ts';
import { useDispatch, useSelector } from "react-redux";

const defaultState: UserLoginData = { email: '' };

const LoginForm = () => {
  const [form, setForm] = useState(defaultState);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: { auth: AuthState }) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e: any) => { // TODO implement types
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => { // TODO implement types
    e.preventDefault();
    // @ts-ignore
    // TODO implement types
    dispatch(loginUser(form));
    navigate('/');
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error" variant="body2" align="center">
                Login Error
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button loading={loading} type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
