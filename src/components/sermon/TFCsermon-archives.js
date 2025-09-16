import React, { useState, useEffect } from "react";
import styles from "./sermon.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { getSermons, getYouTubeVideoId, urlFor } from "../../lib/sanity";
import { Modal } from "react-bootstrap";
import YouTubeEmbed from "./YouTubeEmbed";

const TAB_LABELS = ["Recent", "Topic", "Speaker", "Scripture"];

export default function TFCsermonarchives() {
  const [active, setActive] = useState("Recent");
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [expandedSpeaker, setExpandedSpeaker] = useState(null);
  const [expandedBook, setExpandedBook] = useState(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const data = await getSermons();
        setSermons(data);
      } catch (error) {
        console.error("Error loading sermons:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSermons();
  }, []);

  const handleSermonClick = (sermon) => {
    setSelectedSermon(sermon);
    setShowModal(true);
  };

  const filterSermons = (sermons, term) => {
    if (!term) return sermons;
    return sermons.filter(sermon =>
      sermon.title?.toLowerCase().includes(term.toLowerCase()) ||
      sermon.speaker?.name?.toLowerCase().includes(term.toLowerCase()) ||
      sermon.series?.toLowerCase().includes(term.toLowerCase()) ||
      sermon.scripture?.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div className={styles.Archives}>
      {/* Title */}
      <h1 className={styles.ArchivesTitle}>Sermon Archives</h1>

      {/* Tabs + Search row (keeps your existing classes) */}
      <div className={styles.TabsRow}>
        <nav className={styles.Tabs} aria-label="Sermon filters">
          {TAB_LABELS.map((label) => (
            <button
              key={label}
              type="button"
              className={`${styles.TabLink} ${active === label ? styles.TabActive : ""}`}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
          <span className={styles.TabsBaseline} />
        </nav>

        <div className={styles.SearchWrap}>
          <input
            type="search"
            className={styles.SearchInput}
            placeholder="Search media…"
            aria-label="Search media"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Content */}
      <div className={styles.ArchivesContent}>
        {active === "Recent" && (
          <RecentSermons
            sermons={filterSermons(sermons, searchTerm)}
            loading={loading}
            onSermonClick={handleSermonClick}
          />
        )}
        {active === "Topic" && (
          <TopicView
            sermons={filterSermons(sermons, searchTerm)}
            loading={loading}
            onSermonClick={handleSermonClick}
            expandedTopic={expandedTopic}
            setExpandedTopic={setExpandedTopic}
          />
        )}
        {active === "Speaker" && (
          <SpeakerView
            sermons={filterSermons(sermons, searchTerm)}
            loading={loading}
            onSermonClick={handleSermonClick}
            expandedSpeaker={expandedSpeaker}
            setExpandedSpeaker={setExpandedSpeaker}
          />
        )}
        {active === "Scripture" && (
          <ScriptureView
            sermons={filterSermons(sermons, searchTerm)}
            loading={loading}
            onSermonClick={handleSermonClick}
            expandedBook={expandedBook}
            setExpandedBook={setExpandedBook}
          />
        )}
      </div>

      {/* Video Modal */}
      {selectedSermon && (
        <SermonModal
          sermon={selectedSermon}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

/* ========= SANITY COMPONENTS ========= */

function RecentSermons({ sermons, loading, onSermonClick }) {
  if (loading) {
    return (
      <div className={styles.Grid12}>
        {[...Array(6)].map((_, i) => (
          <article key={i} className={styles.Card}>
            <div className={styles.CardImg} style={{ backgroundColor: '#f0f0f0' }} />
            <div className={styles.CardBody}>
              <div className={styles.CardTitle}>Loading...</div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (sermons.length === 0) {
    return (
      <div className={styles.Grid12}>
        <p>No sermons available. Please add sermons in your Sanity Studio.</p>
      </div>
    );
  }

  return (
    <div className={styles.Grid12}>
      {sermons.slice(0, 12).map((sermon) => (
        <SermonCard
          key={sermon._id}
          sermon={sermon}
          onClick={() => onSermonClick(sermon)}
        />
      ))}
    </div>
  );
}

function SermonCard({ sermon, onClick }) {
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
      : null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className={styles.Card} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div
        className={styles.CardImg}
        style={{
          backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {videoId && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="#000" />
            </svg>
          </div>
        )}
      </div>
      <div className={styles.CardBody}>
        <div className={styles.CardTitle}>{sermon.title}</div>
        {sermon.speaker && (
          <div className={styles.CardSub}>{sermon.speaker.name}</div>
        )}
        {sermon.date && (
          <div className={styles.CardSub}>{formatDate(sermon.date)}</div>
        )}
        {sermon.series && (
          <div className={styles.CardSub} style={{ color: '#666' }}>
            Series: {sermon.series}
          </div>
        )}
      </div>
    </article>
  );
}

function TopicView({ sermons, loading, onSermonClick, expandedTopic, setExpandedTopic }) {
  if (loading) {
    return <div>Loading topics...</div>;
  }

  // Group sermons by series/topic
  const topicGroups = sermons.reduce((acc, sermon) => {
    const topic = sermon.series || 'General';
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(sermon);
    return acc;
  }, {});

  const topics = Object.entries(topicGroups)
    .map(([name, sermons]) => ({ name, count: sermons.length, sermons }))
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <ul className={styles.List}>
        {topics.map((topic) => (
          <li key={topic.name} className={styles.ListItem}>
            <div
              className={styles.ItemLeft}
              onClick={() => setExpandedTopic(expandedTopic === topic.name ? null : topic.name)}
              style={{ cursor: 'pointer' }}
            >
              <span className={styles.ItemTitle}>{topic.name}</span>
            </div>
            <div className={styles.ItemRight}>
              <span className={styles.Badge}>{topic.count}</span>
              <span className={styles.Chevron} aria-hidden />
            </div>
          </li>
        ))}
      </ul>

      {expandedTopic && (
        <div className={styles.Grid12} style={{ marginTop: '20px' }}>
          {topicGroups[expandedTopic].map((sermon) => (
            <SermonCard
              key={sermon._id}
              sermon={sermon}
              onClick={() => onSermonClick(sermon)}
            />
          ))}
        </div>
      )}
    </div>
  );
}


function SpeakerView({ sermons, loading, onSermonClick, expandedSpeaker, setExpandedSpeaker }) {
  if (loading) {
    return <div>Loading speakers...</div>;
  }

  // Group sermons by speaker
  const speakerGroups = sermons.reduce((acc, sermon) => {
    if (!sermon.speaker) return acc;
    const speakerName = sermon.speaker.name;
    if (!acc[speakerName]) {
      acc[speakerName] = { speaker: sermon.speaker, sermons: [] };
    }
    acc[speakerName].sermons.push(sermon);
    return acc;
  }, {});

  const speakers = Object.values(speakerGroups)
    .map(group => ({ ...group.speaker, count: group.sermons.length, sermons: group.sermons }))
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <ul className={styles.List}>
        {speakers.map((speaker) => (
          <li key={speaker.name} className={styles.ListItem}>
            <div
              className={styles.ItemLeft}
              onClick={() => setExpandedSpeaker(expandedSpeaker === speaker.name ? null : speaker.name)}
              style={{ cursor: 'pointer' }}
            >
              <span className={styles.Avatar}>{initials(speaker.name)}</span>
              <span className={styles.ItemTitle}>{speaker.name}</span>
            </div>
            <div className={styles.ItemRight}>
              <span className={styles.Badge}>{speaker.count}</span>
              <span className={styles.Chevron} aria-hidden />
            </div>
          </li>
        ))}
      </ul>

      {expandedSpeaker && (
        <div className={styles.Grid12} style={{ marginTop: '20px' }}>
          {speakerGroups[expandedSpeaker].sermons.map((sermon) => (
            <SermonCard
              key={sermon._id}
              sermon={sermon}
              onClick={() => onSermonClick(sermon)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ScriptureView({ sermons, loading, onSermonClick, expandedBook, setExpandedBook }) {
  if (loading) {
    return <div>Loading scriptures...</div>;
  }

  // Group sermons by scripture book
  const scriptureGroups = sermons.reduce((acc, sermon) => {
    if (!sermon.scripture) return acc;

    // Extract book name from scripture reference (e.g., "John 3:16" -> "John")
    const bookMatch = sermon.scripture.match(/^([0-9]*\s*[A-Za-z]+)/);
    const book = bookMatch ? bookMatch[1].trim() : 'Other';

    if (!acc[book]) {
      acc[book] = [];
    }
    acc[book].push(sermon);
    return acc;
  }, {});

  const books = Object.entries(scriptureGroups)
    .map(([book, sermons]) => ({ book, count: sermons.length, sermons }))
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <ul className={styles.List}>
        {books.map((bookData) => (
          <li key={bookData.book} className={styles.ListItem}>
            <div
              className={styles.ItemLeft}
              onClick={() => setExpandedBook(expandedBook === bookData.book ? null : bookData.book)}
              style={{ cursor: 'pointer' }}
            >
              <span className={`${styles.Avatar} ${styles.AvatarBook}`}>
                {bookInitial(bookData.book)}
              </span>
              <span className={styles.ItemTitle}>{bookData.book}</span>
            </div>
            <div className={styles.ItemRight}>
              <span className={styles.Badge}>{bookData.count}</span>
              <span className={styles.Chevron} aria-hidden />
            </div>
          </li>
        ))}
      </ul>

      {expandedBook && (
        <div className={styles.Grid12} style={{ marginTop: '20px' }}>
          {scriptureGroups[expandedBook].map((sermon) => (
            <SermonCard
              key={sermon._id}
              sermon={sermon}
              onClick={() => onSermonClick(sermon)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* helpers */
function initials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
function bookInitial(book = "") {
  const parts = book.split(" ");
  return parts.length > 1 ? `${parts[0][0]}${parts[1][0]}`.toUpperCase() : book[0].toUpperCase();
}

function SermonModal({ sermon, show, onHide }) {
  const getVideoId = () => {
    if (sermon.youtubeId) return sermon.youtubeId;
    if (sermon.youtubeUrl) return getYouTubeVideoId(sermon.youtubeUrl);
    return null;
  };

  const videoId = getVideoId();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{sermon.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {videoId && (
          <div style={{ marginBottom: '20px' }}>
            <YouTubeEmbed videoId={videoId} title={sermon.title} />
          </div>
        )}

        <div className="row">
          <div className="col-md-6">
            {sermon.speaker && (
              <p><strong>Speaker:</strong> {sermon.speaker.name}
                {sermon.speaker.title && ` (${sermon.speaker.title})`}
              </p>
            )}

            {sermon.date && (
              <p><strong>Date:</strong> {formatDate(sermon.date)}</p>
            )}

            {sermon.series && (
              <p><strong>Series:</strong> {sermon.series}</p>
            )}

            {sermon.scripture && (
              <p><strong>Scripture:</strong> {sermon.scripture}</p>
            )}
          </div>

          {sermon.speaker?.photo && (
            <div className="col-md-6">
              <img
                src={urlFor(sermon.speaker.photo)}
                alt={sermon.speaker.name}
                className="img-fluid rounded"
                style={{ maxWidth: '150px' }}
              />
            </div>
          )}
        </div>

        {sermon.description && (
          <div style={{ marginTop: '20px' }}>
            <h6>Description</h6>
            <p>{sermon.description}</p>
          </div>
        )}

        {sermon.contact && (sermon.contact.email || sermon.contact.phone) && (
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <h6>Contact Information</h6>
            {sermon.contact.email && (
              <p className="mb-1">
                <strong>Email:</strong> <a href={`mailto:${sermon.contact.email}`}>{sermon.contact.email}</a>
              </p>
            )}
            {sermon.contact.phone && (
              <p className="mb-0">
                <strong>Phone:</strong> <a href={`tel:${sermon.contact.phone}`}>{sermon.contact.phone}</a>
              </p>
            )}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {sermon.audioUrl && (
          <a
            href={sermon.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Listen Audio
          </a>
        )}
        <button type="button" className="btn btn-secondary" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
