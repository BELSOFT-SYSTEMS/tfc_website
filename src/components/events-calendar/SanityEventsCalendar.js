import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getEvents } from '../../lib/sanity';
import SanityEventComponent from './SanityEventComponent';

const SanityEventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        console.log('🔄 Fetching events from Sanity...');
        const data = await getEvents();
        console.log('📦 Events data received:', data);
        console.log('📊 Number of events:', data.length);

        if (data.length === 0) {
          console.warn('⚠️ No events found in Sanity. Make sure you have created and published events.');
        }

        setEvents(data);
        setError(null);
      } catch (err) {
        console.error('❌ Error loading events:', err);
        console.error('📋 Full error details:', {
          message: err.message,
          stack: err.stack,
          name: err.name
        });
        setError(`Failed to load events: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Fallback events if Sanity is not available
  const fallbackEvents = [
    {
      _id: 'fallback-1',
      title: 'Kingdom Keys',
      date: 'Every Wednesdays',
      description: 'Kingdom Keys is a midweek gathering at The Father\'s Church every Wednesday, where we share lessons learned and dive deeper into God\'s Word. It\'s a time of reflection, revelation, and practical insights to strengthen our faith and walk with God.',
      longDescription: 'Kingdom Keys is a midweek gathering at The Father\'s Church every Wednesday, where we share lessons learned and dive deeper into God\'s Word. It\'s a time of reflection, revelation, and practical insights to strengthen our faith and walk with God.',
      image: { asset: { _ref: 'kingdom-keys.png' } },
      venue: { name: 'The Father\'s Church', city: 'Jahi, Abuja' },
      isRecurring: true,
      recurrencePattern: 'Every Wednesdays'
    },
    {
      _id: 'fallback-2',
      title: 'Thanksgiving Service',
      date: '2025-02-25T10:00:00Z',
      description: 'Let\'s pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! Every blessing is a testament to God\'s unfailing love and faithfulness. Join us This Sunday;',
      longDescription: 'Let\'s pause...reflect, and give thanks to God for the countless blessings that enrich our lives each day! Every blessing is a testament to God\'s unfailing love and faithfulness. Join us This Sunday;',
      image: { asset: { _ref: 'thanksgiving.png' } },
      venue: { name: 'The Father\'s Church', city: 'Jahi, Abuja' }
    },
    {
      _id: 'fallback-3',
      title: 'Get Connected',
      date: 'Tuesdays, Wednesdays and Fridays',
      description: 'Get Connected is a refreshing lunch-hour fellowship at The Father\'s Church, held every Tuesday, Wednesday, and Friday from 1:00 PM to 1:30 PM. It\'s a time to pause, recharge, and connect with God through prayer, worship, and the Word in a short yet powerful session.',
      longDescription: 'Get Connected is a refreshing lunch-hour fellowship at The Father\'s Church, held every Tuesday, Wednesday, and Friday from 1:00 PM to 1:30 PM. It\'s a time to pause, recharge, and connect with God through prayer, worship, and the Word in a short yet powerful session.',
      image: { asset: { _ref: 'Get-Connected.png' } },
      venue: { name: 'The Father\'s Church', city: 'Jahi, Abuja' },
      isRecurring: true,
      recurrencePattern: 'Tuesdays, Wednesdays and Fridays'
    }
  ];

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

  // Use fallback events if there's an error or no events
  const eventsToShow = error ? fallbackEvents : events;

  console.log('🎯 Display logic:', {
    hasError: !!error,
    eventsCount: events.length,
    showingFallback: error ? true : false,
    eventsToShowCount: eventsToShow.length
  });

  return (
    <Container className="py-5">
      {error && (
        <Alert variant="info" className="mb-4">
          <Alert.Heading>Using fallback events</Alert.Heading>
          <p>Unable to connect to content management system. Showing default events.</p>
          <hr />
          <p className="mb-0">
            <small>Error: {error}</small>
          </p>
        </Alert>
      )}

      <Row>
        <Col>
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">Upcoming Events</h2>
            <p className="lead text-muted">
              Join us for these exciting events at The Father's Church
            </p>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {eventsToShow.map((event) => (
          <Col key={event._id} md={6} lg={4}>
            <SanityEventComponent event={event} />
          </Col>
        ))}
      </Row>

      {eventsToShow.length > 0 && (
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              Showing {eventsToShow.length} event{eventsToShow.length !== 1 ? 's' : ''}
              {error && ' (fallback data)'}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SanityEventsCalendar;