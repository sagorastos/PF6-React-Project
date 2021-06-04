import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Code.Hub Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar />
          <NavLink tag={Link} to="/courses" className="text-muted">Courses</NavLink>
          <NavLink tag={Link} to="/add-course" className="text-muted">Add New Course</NavLink>
      </Collapse>
    </Navbar>
  );
};

export default Header;
