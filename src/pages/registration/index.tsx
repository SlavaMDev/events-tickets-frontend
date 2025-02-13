import Header from '../../components/header';
import Container from '@mui/material/Container';
import RegistrationForm from '../../features/registration.tsx';

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <RegistrationForm />
      </Container>
    </>
  )
}

export default RegistrationPage;