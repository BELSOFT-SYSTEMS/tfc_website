import React from 'react'
import { Button, Col, Container, ListGroup, Row, Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LocationTab = ({ eventKey }) => {
    return (
        <Container fluid style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', gap: '50px' }}>
                <div className="text-center" style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="pastor-3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: '250px', height: '250px', objectFit: 'cover' }}
                    />
                    <h2 style={{ fontSize: '25px', textTransform: 'uppercase', letterSpacing: '-0.9px', marginTop: '20px', marginBottom: '5px' }}>Ikenna Okeke</h2>
                    <p style={{ fontSize: '18px', textAlign: 'center', textTransform: 'uppercase', fontWeight: '500' }}>Senior Pastor</p>
                </div>
                <div xs={0} md={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div >
                        <div>
                            <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04', width: '15px' }} className="mr-2" />
                            <span style={{ color: '#d49c04', width: '15px', marginLeft: '10px', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}>Sunday services @ 9:00am & 11:00am</span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04', width: '15px' }} className="mr-2" />
                            <span style={{ color: '#d49c04', width: '15px', marginLeft: '10px', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}>Sunday services @ 9:00am & 11:00am</span>
                        </div>
                        {/* <ListGroup variant="flush">
                                <ListGroup.Item style={{ fontSize: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ fontSize: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                </ListGroup.Item>
                            </ListGroup> */}
                    </div>
                    <div >
                        <p style={{ fontWeight: '300', fontSize: '18px' }}>Filled with warm and inviting people, Ajax acts as our largest in-person site with live teaching, worship and many events that help foster and build up our community.</p>
                    </div>
                    <div>
                        <div className="text-center" style={{ width: '100%', displa: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'start' }}>
                            <button
                                variant=""
                                style={{ backgroundColor: '#d49c04', color: '#fff', maxWidth: '200px', marginLeft: '0', border: 'none', padding: '8px 16px', borderRadius: '5px', textTransform: 'uppercase', fontWeight: '500' }}
                                href="#"
                            >
                                More Information
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LocationTab