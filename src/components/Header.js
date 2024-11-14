import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./home.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerStyle = {
    fontSize: "16px",
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
      id={`nav-dropdown-${index}`}
      title={items.label}
      show={activeDropdown === index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleDropdownClick(index)}
      className="mx-2" // Adds horizontal spacing between menu items on large screens
    >
      {items.items.map((item, subIndex) => (
        <NavDropdown.Item key={subIndex} href={item.link} style={headerStyle}>
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
        { label: "Evangelism", link: "" },
      ],
    },
    {
      label: "Locations",
      items: [
        { label: "Eden", link: "/eden" },
        // { label: "Mpape", link: "" },
        // { label: "Enugu", link: "" },
      ],
    },
    {
      label: "Joyforce",
      items: [{ label: "JoyForce Academy", link: "/joyforce-academy" }],
    },
    // {
    //   label: "Media",
    //   items: [{ label: "Sermons", link: "/sermons/recent" }],
    // },
    {
      label: "What’s Next?",
      items: [
        { label: "Baptism", link: "/baptism" },
        { label: "Believer's Foundation", link: "/believers-foundation" },
        // { label: "Marriage Course", link: "#" },
        // { label: "Counseling", link: "#" },
      ],
    },
    {
      label: "Events",
      items: [
        { label: "Event Calendar", link: "/event-calendar" },
        // { label: "TFC Summer Camps", link: "/summer-camps" },
      ],
    },
    // {
    //   label: "Give",
    //   items: [{ label: "Ways To Give", link: "/ways-to-give" }],
    // },
  ];

  return (
    <Navbar
      variant="light"
      bg="light"
      expand="lg"
      // style={headerStyle}
      collapseOnSelect
    >
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
                <Nav.Link key={index} href={menuItem.link} className="mx-1">
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
