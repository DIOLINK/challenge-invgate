import { ROUTES } from '@/routers/routes';
import { Container, Navbar } from 'react-bootstrap';
import { Menu } from './Menu';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow mb-3">
      <Container fluid="md">
        <Navbar.Brand href={ROUTES.home} className="pointer">
          TODO-App
        </Navbar.Brand>
        <Menu />
      </Container>
    </Navbar>
  );
}

export default NavBar;
