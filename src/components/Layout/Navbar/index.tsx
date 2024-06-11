import { ROUTES } from '@/routers/routes';

import { analyticLocation } from '@/helpers';
import { IconArrowBack } from '@tabler/icons-react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from './Menu';
import { Search } from './Search';

function NavBar() {
  let location = useLocation();
  const { isHome } = analyticLocation(location);
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow mb-3">
      <Container fluid="md" className="d-flex justify-content-between">
        <Navbar.Brand className="pointer">
          <Row>
            {!isHome && (
              <Col>
                <Link to={ROUTES.home} className="link" title="home">
                  <IconArrowBack stroke={2} />
                </Link>
              </Col>
            )}
            <Col>
              <Link to={ROUTES.home} className="link" title="home">
                TODO-App
              </Link>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="border-0 order-md-1"
        />
        <Search />
        <Menu />
      </Container>
    </Navbar>
  );
}

export default NavBar;
