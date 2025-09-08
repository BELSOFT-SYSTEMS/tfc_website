import React, { useState } from "react";
import styles from "./sermon.module.css";
import "bootstrap/dist/css/bootstrap.css";

const TAB_LABELS = ["Recent", "Topic", "Speaker", "Scripture"];

export default function TFCsermonarchives() {
  const [active, setActive] = useState("Recent");

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
          />
        </div>
      </div>

      {/* Placeholder content */}
      <div className={styles.ArchivesContent}>
        {active === "Recent" && <RecentPlaceholder />}
        {active === "Topic" && <TopicPlaceholder />}
        {active === "Speaker" && <SpeakerPlaceholder />}
        {active === "Scripture" && <ScripturePlaceholder />}
      </div>
    </div>
  );
}

/* ========= PLACEHOLDERS ========= */

function RecentPlaceholder() {
  const items = [
    { title: "Promises" },
    { title: "Ruth" },
    { title: "Spiritual Gifts 2025" },
    { title: "Christmas Is For Everyone" },
    { title: "Joshua" },
    { title: "It's Like This…" },
  ];
  return (
    <div className={styles.Grid12}>
      {items.map((it, i) => (
        <article key={i} className={styles.Card}>
          <div className={styles.CardImg} />
          <div className={styles.CardBody}>
            <div className={styles.CardTitle}>{it.title}</div>
            {it.sub && <div className={styles.CardSub}>{it.sub}</div>}
          </div>
        </article>
      ))}
    </div>
  );
}

function TopicPlaceholder() {
  const topics = [
    { name: "Prayer", count: 18 },
    { name: "Holy Spirit", count: 12 },
    { name: "Identity", count: 9 },
    { name: "Family", count: 7 },
    { name: "Community", count: 11 },
    { name: "Discipleship", count: 8 },
    { name: "Worship", count: 10 },
    { name: "Work & Calling", count: 5 },
    { name: "Generosity", count: 6 },
    { name: "Forgiveness", count: 4 },
  ];

  return (
    <ul className={styles.List}>
      {topics.map((t) => (
        <li key={t.name} className={styles.ListItem}>
          <div className={styles.ItemLeft}>
            <span className={styles.ItemTitle}>{t.name}</span>
          </div>
          <div className={styles.ItemRight}>
            <span className={styles.Badge}>{t.count}</span>
            <span className={styles.Chevron} aria-hidden />
          </div>
        </li>
      ))}
    </ul>
  );
}


function SpeakerPlaceholder() {
  const speakers = [
    { name: "Samuel Mills", count: 24 },
    { name: "Lucas Prado", count: 10 },
    { name: "Joanna la Fleur", count: 5 },
    { name: "Ben Hilson", count: 4 },
    { name: "Wayne Saynor", count: 3 },
    { name: "Robin Djokoto", count: 2 },
    { name: "Anne Miranda", count: 2 },
    { name: "Nathan Veley", count: 2 },
    { name: "Dr. Merry Lin", count: 1 },
  ];
  return (
    <ul className={styles.List}>
      {speakers.map((s) => (
        <li key={s.name} className={styles.ListItem}>
          <div className={styles.ItemLeft}>
            <span className={styles.Avatar}>{initials(s.name)}</span>
            <span className={styles.ItemTitle}>{s.name}</span>
          </div>
          <div className={styles.ItemRight}>
            <span className={styles.Badge}>{s.count}</span>
            <span className={styles.Chevron} aria-hidden />
          </div>
        </li>
      ))}
    </ul>
  );
}

function ScripturePlaceholder() {
  const books = [
    { book: "Genesis", count: 6 },
    { book: "Numbers", count: 1 },
    { book: "Joshua", count: 9 },
    { book: "Ruth", count: 7 },
    { book: "2 Chronicles", count: 1 },
    { book: "Ezra", count: 2 },
    { book: "Nehemiah", count: 1 },
    { book: "Psalms", count: 2 },
    { book: "Proverbs", count: 1 },
    { book: "Matthew", count: 7 },
  ];
  return (
    <ul className={styles.List}>
      {books.map((b) => (
        <li key={b.book} className={styles.ListItem}>
          <div className={styles.ItemLeft}>
            <span className={`${styles.Avatar} ${styles.AvatarBook}`}>{bookInitial(b.book)}</span>
            <span className={styles.ItemTitle}>{b.book}</span>
          </div>
          <div className={styles.ItemRight}>
            <span className={styles.Badge}>{b.count}</span>
            <span className={styles.Chevron} aria-hidden />
          </div>
        </li>
      ))}
    </ul>
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
