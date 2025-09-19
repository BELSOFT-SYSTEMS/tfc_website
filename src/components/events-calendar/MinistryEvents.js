import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getEventsByAudience } from '../../lib/sanity';
import SanityEventComponent from './SanityEventComponent';

const MinistryEvents = ({ targetAudience, title, emptyMessage }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        console.log(`🔄 Fetching events for ministry: ${targetAudience}`);
        const data = await getEventsByAudience(targetAudience);
        console.log(`📦 Events received for ${targetAudience}:`, data);
        setEvents(data);
        setError(null);
      } catch (err) {
        console.error(`❌ Error loading events for ${targetAudience}:`, err);
        setError(`Failed to load events: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [targetAudience]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading events...</span>
        </Spinner>
        <p className="mt-3">Loading events...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          <Alert.Heading>Unable to load events</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  if (events.length === 0) {
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <div className="text-center">
              <h3>{title || 'Upcoming Events'}</h3>
              <p className="text-muted">
                {emptyMessage || 'No events scheduled at this time. Check back later!'}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">{title || 'Upcoming Events'}</h2>
            <p className="lead text-muted">
              Join us for these exciting events
            </p>
          </div>
        </Col>
      </Row>

      <Row className="g-2">
        {events.map((event) => (
          <Col key={event._id} sm={6} md={4} lg={3}>
            <SanityEventComponent event={event} />
          </Col>
        ))}
      </Row>

      {events.length > 0 && (
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              Showing {events.length} event{events.length !== 1 ? 's' : ''}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MinistryEvents;