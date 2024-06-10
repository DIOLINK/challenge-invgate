import { ROUTES } from '@/routers/routes';

import { Container, Navbar } from 'react-bootstrap';
import { LayoutProps } from '..';
import { Menu } from './Menu';
import { Search } from './Search';
interface NavbarProps extends LayoutProps {}
function NavBar({
  setShowModal,
  setTodoList,
  setTodoFilters,
  todoFilter,
}: NavbarProps) {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow mb-3">
      <Container fluid="md" className="d-flex justify-content-between">
        <Navbar.Brand href={ROUTES.home} className="pointer">
          TODO-App
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="border-0 order-md-1"
        />
        <Search
          todoFilter={todoFilter}
          setShowModal={setShowModal}
          setTodoList={setTodoList}
          setTodoFilters={setTodoFilters}
        />
        <Menu />
      </Container>
    </Navbar>
  );
}

export default NavBar;
