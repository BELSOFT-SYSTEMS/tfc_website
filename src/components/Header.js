import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
        { label: 'Sermons', link: '/sermons' },
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


 {/*
    <header style={headerStyle}>
    <div style={logoStyle}>
      <img src="tfcLogo.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
    <div style={menuStyle}>
      <a href="/">Home</a>
      <div onClick={toggleDropdown}>
        <span>About</span>
        <div style={dropdownStyle}>
          <a href="/about">About Us</a>
          <a href="/sundays">Sundays @ TFC</a>
          <a href="/staff">Our Staff</a>
          <a href="/governance">Our Board & Governance</a>
          <a href="/jobs">Jobs @ TFC</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Our Ministries</span>
        <div style={dropdownStyle}>
          <a href="/how-we-do">How We Do Ministry</a>
          <a href="/lightbearers">Lightbearers</a>
          <a href="/ambassadors">The Ambassadors</a>
          <a href="/freedom-fellowship">Freedom Fellowship</a>
          <a href="/the-governors">The Governors</a>
          <a href="/the-queens">The Queens</a>
          <a href="/evangelism">Evangelism</a>
          <a href="/prayer-ministry">Prayer Ministry</a>
          <a href="/care-ministry">Care Ministry</a>
          {/* Add more ministry items as needed */}{/*
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Locations</span>
        <div style={dropdownStyle}>
          <a href="/eden">Eden</a>
          <a href="/mpape">Mpape</a>
          <a href="/enugu">Enugu</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Joyforce</span>
        <div style={dropdownStyle}>
          <a href="/voice-of-one">Voice of One</a>
          <a href="/ushering">Ushering</a>
          <a href="/welcome-unit">Welcome Unit</a>
          <a href="/media">Media</a>
          <a href="/sanctuary">Sanctuary</a>
          <a href="/joyforce-academy">JoyForce Academy</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Media</span>
        <div style={dropdownStyle}>
          <a href="/sermons">Sermons</a>
          <a href="/worship">Worship</a>
          <a href="/publications">Publications</a>
          <a href="/governance">Testimonies</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>What ’s Next?</span>
        <div style={dropdownStyle}>
          <a href="/next-steps">Next Steps</a>
          <a href="/get-connected">Get Connected</a>
          <a href="/baptism">Baptism</a>
          <a href="/believers-foundation">Believer's Foundation</a>
          <a href="/marriage-course">Marriage Course</a>
          <a href="/prayer-request">Prayer Request</a>
          <a href="/counseling">Counseling</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Events</span>
        <div style={dropdownStyle}>
          <a href="/event-calendar">Event Calendar</a>
          <a href="/summer-camps">TFC Summer Camps</a>
        </div>
      </div>
      <div onClick={toggleDropdown}>
        <span>Give</span>
        <div style={dropdownStyle}>
          <a href="/ways-to-give">Ways To Give</a>
          <a href="/vision-fund">Vision Fund</a>
        </div>
      </div>
      {/* Add more top-level menu items as needed */}{/*
    </div>
  </header>
*/}
