import React from 'react';

const YouTubeEmbed = ({ videoId, title = "YouTube Video" }) => {
  if (!videoId) {
    return (
      <div className="embed-responsive embed-responsive-16by9 bg-light d-flex align-items-center justify-content-center">
        <p className="text-muted">No video available</p>
      </div>
    );
  }

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;