import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { registerUser, AuthState, UserRegistrationData } from './reducers/authSlice.ts';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const defaultState: UserRegistrationData = {name: '', email: '', password: '', type: false}

const RegistrationForm = () => {
  const [form, setForm] = useState(defaultState)
  const [confirmPass, setConfirmPass] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state: { auth: AuthState }) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e: any) => { // TODO implement types
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCheck = (e: any) => { // TODO implement types
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: any) => { // TODO implement types
    e.preventDefault();
    if (confirmPass === form.password) {
      setConfirmError('');
      // @ts-ignore
      // TODO implement types
      dispatch(registerUser(form));
      navigate('/');
    } else {
      setConfirmError('Password must match');
    }

  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={form.name}
            />
          </Grid>

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

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} name="type" onChange={handleCheck} label="I'm Local" />
            </FormGroup>
          </Grid>
          {confirmError && (
            <Grid item xs={12}>
              <Typography color="error" variant="body2" align="center">
                {confirmError}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button loading={loading} type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegistrationForm;
