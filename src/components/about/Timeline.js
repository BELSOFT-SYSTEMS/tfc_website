// File: src/components/Timeline.js

import React, { useState, useEffect } from 'react';

const Timeline = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    setScrollPosition(scrollY + viewportHeight * 0.65);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLineGradient = () => {
    let gradientParts = [];
    for (let i = 0; i < items.length; i++) {
      const start = (i / items.length) * 100;
      const end = ((i + 1) / items.length) * 100;
      const isActive = scrollPosition >= (document.documentElement.scrollHeight - window.innerHeight) * (i / items.length);
      gradientParts.push(`${isActive ? '#d49c04' : '#051f04'} ${start}%, ${isActive ? '#d49c04' : '#051f04'} ${end}%`);
    }
    return `linear-gradient(to bottom, ${gradientParts.join(', ')})`;
  };

  const styles = {
    timeline: {
      position: 'relative',
      width: '4px',
      margin: '0 auto',
      padding: '20px 0',
      height: '750vh',
      background: getLineGradient(),
      transition: 'background 0.3s',
    },
    timelineItem: {
      position: 'relative',
      width: '50%',
      padding: '10px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    timelineItemLeft: {
      left: '-200px',
      justifyContent: 'flex-end',
    },
    timelineItemRight: {
      left: '200px',
      justifyContent: 'flex-start',
    },
    content: {
      backgroundColor: '#f1c34633',
      padding: '20px',
      borderRadius: '10px',
      position: 'relative',
      maxWidth: '300px',
      textAlign: 'left',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    imgLeft: {
      width: '300px',
      height: '250px',
      borderRadius: '10px',
      margin: '10px 0 25px 10px',
    },
    imgRight: {
      width: '300px',
      height: '250px',
      borderRadius: '10px',
      margin: '10px 10px 25px -50px',
    },
    circle: {
      width: '20px',
      height: '20px',
      backgroundColor: '#ddd',
      border: '2px solid #d49c04',
      borderRadius: '50%',
      position: 'absolute',
      left: '-8px',
      top: '10%',
      transform: 'translateY(-50%)',
      zIndex: '1',
      transition: 'background-color 0.3s',
    },
    circleActive: {
      backgroundColor: '#d49c04',
    },
    arrow: {
      width: '0',
      height: '0',
      borderStyle: 'solid',
    },
    arrowLeft: {
      borderWidth: '10px 10px 10px 0',
      borderColor: 'transparent #113b103b transparent transparent',
      position: 'absolute',
      right: '-80px',
      top: '20px',
    },
    arrowRight: {
      borderWidth: '10px 0 10px 10px',
      borderColor: 'transparent transparent transparent #113b103b',
      position: 'absolute',
      left: '-80px',
      top: '20px',
    },
  };

  return (
    <div style={styles.timeline} className="timeline">
      {items.map((item, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <div
            style={{
              ...styles.circle,
              ...(scrollPosition >= (document.documentElement.scrollHeight - window.innerHeight) * (index / items.length) ? styles.circleActive : {}),
            }}
          ></div>
          <div
            style={{
              ...styles.timelineItem,
              ...(index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight),
            }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div style={styles.content} className="content">
              <img src={item.image} alt={item.title} style={{
                  ...styles.img,
                  ...(index % 2 === 0 ? styles.imgLeft : styles.imgRight),
                }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div
                style={{
                  ...styles.arrow,
                  ...(index % 2 === 0 ? styles.arrowLeft : styles.arrowRight),
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
