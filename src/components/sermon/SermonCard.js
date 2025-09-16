import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { getYouTubeVideoId, urlFor } from '../../lib/sanity';
import YouTubeEmbed from './YouTubeEmbed';

const SermonCard = ({ sermon }) => {
  const [showModal, setShowModal] = useState(false);

  const getVideoId = () => {
    if (sermon.youtubeId) return sermon.youtubeId;
    if (sermon.youtubeUrl) return getYouTubeVideoId(sermon.youtubeUrl);
    return null;
  };

  const videoId = getVideoId();
  const thumbnailUrl = sermon.thumbnail
    ? urlFor(sermon.thumbnail)
    : videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : '/default-sermon-thumbnail.jpg';

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="sermon-card h-100 shadow-sm" style={{ border: 'none' }}>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={thumbnailUrl}
            alt={sermon.title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {videoId && (
            <div
              className="position-absolute d-flex align-items-center justify-content-center"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                cursor: 'pointer'
              }}
              onClick={handleShow}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: '50%'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginLeft: '2px' }}
                >
                  <path
                    d="M8 5v14l11-7z"
                    fill="#000"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="h5 mb-2">{sermon.title}</Card.Title>

          {sermon.speaker && (
            <p className="text-muted mb-1">
              <strong>{sermon.speaker.name}</strong>
              {sermon.speaker.title && ` • ${sermon.speaker.title}`}
            </p>
          )}

          {sermon.date && (
            <p className="text-muted mb-2">{formatDate(sermon.date)}</p>
          )}

          {sermon.series && (
            <p className="text-primary mb-2">
              <small><strong>Series:</strong> {sermon.series}</small>
            </p>
          )}

          {sermon.scripture && (
            <p className="text-secondary mb-2">
              <small><strong>Scripture:</strong> {sermon.scripture}</small>
            </p>
          )}

          {sermon.description && (
            <Card.Text className="flex-grow-1">
              {sermon.description.length > 150
                ? `${sermon.description.substring(0, 150)}...`
                : sermon.description}
            </Card.Text>
          )}

          <div className="mt-auto">
            {videoId && (
              <Button
                variant="primary"
                onClick={handleShow}
                className="me-2 mb-2"
              >
                Watch Sermon
              </Button>
            )}

            {sermon.audioUrl && (
              <Button
                variant="outline-primary"
                href={sermon.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
              >
                Listen Audio
              </Button>
            )}
          </div>

          {sermon.contact && (sermon.contact.email || sermon.contact.phone) && (
            <div className="mt-2 pt-2 border-top">
              <small className="text-muted">
                <strong>Contact:</strong>
                {sermon.contact.email && (
                  <span> <a href={`mailto:${sermon.contact.email}`}>{sermon.contact.email}</a></span>
                )}
                {sermon.contact.email && sermon.contact.phone && ' • '}
                {sermon.contact.phone && (
                  <span> <a href={`tel:${sermon.contact.phone}`}>{sermon.contact.phone}</a></span>
                )}
              </small>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Video Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{sermon.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTubeEmbed videoId={videoId} title={sermon.title} />

          {sermon.speaker && (
            <div className="mt-3">
              <p className="mb-1">
                <strong>Speaker:</strong> {sermon.speaker.name}
                {sermon.speaker.title && ` (${sermon.speaker.title})`}
              </p>
            </div>
          )}

          {sermon.date && (
            <p className="mb-1"><strong>Date:</strong> {formatDate(sermon.date)}</p>
          )}

          {sermon.scripture && (
            <p className="mb-1"><strong>Scripture:</strong> {sermon.scripture}</p>
          )}

          {sermon.description && (
            <div className="mt-3">
              <h6>Description:</h6>
              <p>{sermon.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {sermon.audioUrl && (
            <Button
              variant="outline-primary"
              href={sermon.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen Audio
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

export default SermonCard;