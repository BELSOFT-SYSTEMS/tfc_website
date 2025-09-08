import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./home.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerStyle = {
    fontSize: "14px",
    marginRight: "40px",
  };

  const logoStyle = {
    maxWidth: "58px",
    maxHeight: "58px",
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 992) setActiveDropdown(index); // Only activate hover on larger screens
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) setActiveDropdown(null);
  };

  const handleDropdownClick = (index) => {
    if (window.innerWidth <= 992) {
      setActiveDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle dropdown on click for smaller screens
    }
  };

  const renderDropdown = (index, items) => (
    <NavDropdown
      key={`dropdown-${index}`} // Add a unique key for the dropdown
      id={`nav-dropdown-${index}`}
      title={items.label}
      show={activeDropdown === index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleDropdownClick(index)}
      className="mx-2"
    >
      {items.items.map((item, subIndex) => (
        <NavDropdown.Item
          key={`dropdown-item-${index}-${subIndex}`} // Add unique key for dropdown items
          href={item.link}
          style={headerStyle}
        >
          {item.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );

  const menuItems = [
    { label: "Home", link: "/home" },
    {
      label: "About",
      items: [
        { label: "About Us", link: "/about" },
        { label: "Contact Us", link: "/contact" },
      ],
    },
    {
      label: "Our Ministries",
      items: [
        { label: "Lightbearers", link: "/lightbearers" },
        { label: "The Ambassadors", link: "/ambassadors" },
        { label: "Freedom Fellowship", link: "/freedom-fellowship" },
        { label: "The Governors", link: "/the-governors" },
        { label: "The Queens", link: "/the-queens" },
        { label: "Kingdom Ladies", link: "" },
        { label: "Sermon", link: "/sermon" },
      ],
    },
    {
      label: "Locations",
      items: [{ label: "Eden", link: "/eden" }],
    },
    {
      label: "Joyforce",
      items: [{ label: "JoyForce Academy", link: "/joyforce-academy" }],
    },
    {
      label: "Events",
      items: [{ label: "Event Calendar", link: "/event-calendar" }],
    },
  ];

  return (
    <Navbar variant="light" bg="light" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src="/tfcLogo.png" alt="Logo" style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={headerStyle}>
            {menuItems.map((menuItem, index) =>
              menuItem.items ? (
                renderDropdown(index, menuItem)
              ) : (
                <Nav.Link
                  key={`menu-item-${index}`} // Add unique key for direct Nav.Link items
                  href={menuItem.link}
                  className="mx-1"
                >
                  {menuItem.label}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
