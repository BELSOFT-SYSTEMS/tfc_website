import React, { useState } from 'react';
import { Card, Modal, Badge } from 'react-bootstrap';
import { Button } from '../Button/Button';
import { urlFor } from '../../lib/sanity';

const SanityEventComponent = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateRange = () => {
    if (event.isRecurring && event.recurrencePattern) {
      return event.recurrencePattern;
    }

    if (event.endDate) {
      const startDate = new Date(event.date);
      const endDate = new Date(event.endDate);

      if (startDate.toDateString() === endDate.toDateString()) {
        // Same day, different times
        return `${startDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })} • ${startDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })} - ${endDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })}`;
      } else {
        // Multi-day event
        return `${startDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })} - ${endDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}`;
      }
    }

    return formatDate(event.date);
  };

  const imageUrl = event.image ? urlFor(event.image) : '/default-event-image.jpg';

  const isUpcoming = () => {
    const eventDate = new Date(event.date);
    const now = new Date();
    return eventDate > now;
  };

  const isPast = () => {
    const eventDate = new Date(event.endDate || event.date);
    const now = new Date();
    return eventDate < now;
  };

  return (
    <>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          border: "none",
          boxShadow: "-2px 6px 17px 0px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            backgroundColor: "#d49c04",
            padding: "10px",
            color: "white",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          {formatDateRange()}
        </div>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={event.title}
          style={{ height: "160px", objectFit: "cover" }}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1
              style={{
                fontSize: "17px",
              }}
            >
              {event.title}
            </h1>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              {event.description && event.description.length > 150
                ? `${event.description.substring(0, 150)}...`
                : event.description || 'No description available'}
            </p>
          </div>
          <Button
            onClick={handleShow}
            variant="warning"
            style={{
              alignSelf: "start",
              backgroundColor: "#d49c04",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Find Out More
          </Button>
        </Card.Body>
      </Card>

      {/* Event Details Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img
                src={imageUrl}
                alt={event.title}
                className="img-fluid rounded mb-3"
              />
            </div>
            <div className="col-md-6">
              <h6>Event Details</h6>
              <p><strong>Date:</strong> {formatDateRange()}</p>

              {event.venue && (
                <p>
                  <strong>Location:</strong> {event.venue.name}
                  {event.venue.address && (
                    <>
                      <br />
                      <small className="text-muted">{event.venue.address}</small>
                    </>
                  )}
                  {event.venue.city && (
                    <>
                      <br />
                      <small className="text-muted">{event.venue.city}</small>
                    </>
                  )}
                </p>
              )}

              {event.registrationRequired && (
                <div className="alert alert-info">
                  <strong>Registration Required</strong>
                  {event.maxAttendees && (
                    <p className="mb-0">
                      <small>Limited to {event.maxAttendees} attendees</small>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-3">
            <h6>Description</h6>
            <p>{event.longDescription || event.description}</p>
          </div>

          {event.contact && (event.contact.email || event.contact.phone) && (
            <div className="mt-3 p-3 bg-light rounded">
              <h6>Contact Information</h6>
              {event.contact.email && (
                <p className="mb-1">
                  <strong>Email:</strong> <a href={`mailto:${event.contact.email}`}>{event.contact.email}</a>
                </p>
              )}
              {event.contact.phone && (
                <p className="mb-0">
                  <strong>Phone:</strong> <a href={`tel:${event.contact.phone}`}>{event.contact.phone}</a>
                </p>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {event.registrationRequired && event.registrationUrl && (
            <Button
              variant="primary"
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SanityEventComponent;