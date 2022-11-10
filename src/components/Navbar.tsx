import Link from 'next/link'
import { Navbar as BootsrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootsrapNavbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <BootsrapNavbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a>Home</a>
        </Link>
      </BootsrapNavbar.Brand>
      <BootsrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <BootsrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() =>
              <Link href="/">
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            }
          />
        </Nav>
      </BootsrapNavbar.Collapse> */}
    </BootsrapNavbar>
  );
};

export default Navbar;
