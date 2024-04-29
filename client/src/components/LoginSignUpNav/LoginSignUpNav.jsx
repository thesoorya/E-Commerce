import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function LoginSignUpNav() {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'} className='text-light'>Back</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default LoginSignUpNav;