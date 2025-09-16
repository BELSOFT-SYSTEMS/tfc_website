import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getSermons } from '../../lib/sanity';
import SermonCard from './SermonCard';

const SanitySermonArchives = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setLoading(true);
        const data = await getSermons();
        setSermons(data);
        setError(null);
      } catch (err) {
        console.error('Error loading sermons:', err);
        setError('Failed to load sermons. Please check your Sanity configuration.');
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading sermons...</span>
        </Spinner>
        <p className="mt-3">Loading sermons...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          <Alert.Heading>Unable to load sermons</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            Please check your Sanity project configuration and ensure the content is published.
          </p>
        </Alert>
      </Container>
    );
  }

  if (sermons.length === 0) {
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <div className="text-center">
              <h3>No Sermons Available</h3>
              <p className="text-muted">
                Sermons will appear here once they are added to the content management system.
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
            <h2 className="display-4 mb-3">Sermon Archives</h2>
            <p className="lead text-muted">
              Watch and listen to past sermons from The Father's Church
            </p>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {sermons.map((sermon) => (
          <Col key={sermon._id} md={6} lg={4}>
            <SermonCard sermon={sermon} />
          </Col>
        ))}
      </Row>

      {sermons.length > 0 && (
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              Showing {sermons.length} sermon{sermons.length !== 1 ? 's' : ''}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SanitySermonArchives;