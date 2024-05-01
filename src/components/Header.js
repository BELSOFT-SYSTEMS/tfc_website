import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './home.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
  };

  const logoStyle = {
    flex: '0 0 auto',
    marginRight: '10px',
    maxWidth: '98px',
    maxHeight: '98px',
  };

  const menuStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    marginLeft:'60px',
    fontSize:'16px',
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };


  const renderDropdown = (index, items) => {
    return (
      <NavDropdown
        id={`nav-dropdown-${index}`}
        title={items.label}
        show={activeDropdown === index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {items.items.map((item, subIndex) => (
          <NavDropdown.Item key={subIndex} href={item.link}>
            {item.label}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  };


  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align items
    minWidth: '160px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: '1',
  };


const menuItems = [
    { label: 'Home', link: '/home' },
    {
      label: 'About',
      items: [
        { label: 'About Us', link: '/about' },
        /*{ label: 'Sundays @ TFC', link: '/sundays' },*/
        /*{ label: 'Staff', link: '/staff' },
        { label: 'Our Board & Governance', link: '/governance' },
        { label: 'Jobs @ TFC', link: '/jobs' },*/
        { label: 'Contact Us', link: '/contact' },
        /* ... other dropdown items */
      ],
    },
    {
      label: 'Our Ministries',
      items: [
        /*{ label: 'How We Do Ministry', link: '/how-we-do' },*/
        { label: 'Lightbearers', link: '/lightbearers' },
        { label: 'The Ambassadors', link: '/ambassadors' },
        { label: 'Freedom Fellowship', link: '/freedom-fellowship' },
        { label: 'The Governors', link: '/the-governors' },
        { label: 'The Queens', link: '/the-queens' },
        { label: 'Evangelism', link: '/evangelism' },
        { label: 'Prayer Ministry', link: '/prayer-ministry' },
        /*{ label: 'Care Ministry', link: '/care-ministry' },*/
        /* Add more ministry items as needed */
      ],
    },
    {
      label: 'Locations',
      items: [
        { label: 'Eden', link: '/eden' },
        { label: 'Mpape', link: '/mpape' },
        { label: 'Enugu', link: '/enugu' },
      ],
    },
    {
      label: 'Joyforce',
      items: [
        /*{ label: 'Voice of One', link: '/voice-of-one' },
        { label: 'Ushering', link: '/ushering' },
        { label: 'Welcome Unit', link: '/welcome-unit' },
        { label: 'Media', link: '/media' },
        { label: 'Sanctuary', link: '/sanctuary' },*/
        { label: 'JoyForce Academy', link: '/joyforce-academy' },
      ],
    },
    {
      label: 'Media',
      items: [
        { label: 'Sermons', link: '/sermons/recent' },
        /*{ label: 'Worship', link: '/worship' },
        { label: 'Publications', link: '/publications' },
        { label: 'Testimonies', link: '/testimonies' },*/
      ],
    },
    {
      label: 'What’s Next?',
      items: [
        /*{ label: 'Next Steps', link: '/next-steps' },*/
        /*{ label: 'Get Connected', link: '/get-connected' },*/
        { label: 'Baptism', link: '/baptism' },
        { label: "Believer's Foundation", link: '/believers-foundation' },
        { label: 'Marriage Course', link: '#' },
       /* { label: 'Prayer Request', link: '/prayer-request' },*/
        { label: 'Counseling', link: '#' },
      ],
    },
    {
      label: 'Events',
      items: [
        { label: 'Event Calendar', link: '/event-calendar' },
        { label: 'TFC Summer Camps', link: '/summer-camps' },
      ],
    },
    {
      label: 'Give',
      items: [
        { label: 'Ways To Give', link: '/ways-to-give' },
        /*{ label: 'Vision Fund', link: '/vision-fund' },*/
        /* Add more top-level menu items as needed */
      ],
    },
  ];
  return (
<Navbar variant="light" bg="light" expand="lg" style={headerStyle}>
      <Container style={headerStyle} fluid>
        <Navbar.Brand style={logoStyle} href="/home">
          <img src="tfcLogo.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-light-example" />
        <Navbar.Collapse id="navbar-light-example"  style={{ marginLeft: '60px' }}>
          <Nav className="me-auto justify-content-end" style={menuStyle}>
            {menuItems.map((menuItem, index) =>
              menuItem.items ? (
                renderDropdown(index, menuItem)
              ) : (
                <Nav.Link key={index} href={menuItem.link}>
                  {menuItem.label}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

export default Header;

 
