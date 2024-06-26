import { useTheme } from '@/contexts/ThemeContext';
import { IconBrightnessHalf } from '@tabler/icons-react';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
export const Menu = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-lg`}
        className="border-0"
      />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-lg`}
        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Button variant="link" onClick={() => toggleTheme()}>
              <IconBrightnessHalf
                stroke={2}
                color={'var(--bs-body-color)'}
                size={32}
              />
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};
