import React from 'react'
import { Button, Col, Container, ListGroup, Row, Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LocationTab = ({ eventKey }) => {
    return (
        <Container fluid style={{ border: '2px solid red', marginTop: '30px' }}>
            <Row style={{ display: 'flex', gap: '30px' }}>
                <Col xs={12} md={6} className="text-center" style={{ width: 'fit-content', display: 'flex', flexDirection: 'column' }}>
                    <img
                        src="pastor-3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: '250px', height: '250px', objectFit: 'cover' }}
                    />
                    <h2 style={{ fontSize: '25px', textTransform: 'uppercase', letterSpacing: '-0.9px', marginTop: '20px', marginBottom: '5px' }}>Angela Mason</h2>
                    <p style={{ fontSize: '18px', textAlign: 'center', textTransform: 'uppercase', fontWeight: '500' }}>Site Pastor</p>
                </Col>
                <Col xs={0} md={6}>
                    <Row>
                        <Col>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ fontSize: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#d49c04', width: '15px' }} className="mr-2" />
                                    <span>Sunday services @ 9:00am & 11:00am</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ fontSize: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d49c04', width: '15px' }} className="mr-2" />
                                    <span>599 Bayly Street East, Ajax, Ontario</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ fontSize: '15px' }}>
                            <p style={{ fontWeight: '300', fontSize: '18px' }}>Filled with warm and inviting people, Ajax acts as our largest in-person site with live teaching, worship and many events that help foster and build up our community.</p>
                        </Col>
                    </Row>
                    <div>
                        <div className="text-center" style={{ width: '100%', displa: 'flex', justifyContent: 'flex-start', border: '2px solid red', alignItems: 'flex-start' }}>
                            <button
                                variant=""
                                style={{ backgroundColor: '#d49c04', color: '#fff', maxWidth: '200px', marginLeft: '0' }}
                                href="#"
                            >
                                More Information
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LocationTab