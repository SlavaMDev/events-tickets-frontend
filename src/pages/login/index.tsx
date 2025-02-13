import Header from '../../components/header';
import LoginForm from '../../features/login.tsx';
import Container from '@mui/material/Container';

const LoginPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <LoginForm />
      </Container>
    </>
  )
}

export default LoginPage;