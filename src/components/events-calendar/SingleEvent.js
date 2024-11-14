import React from "react";
import { useLocation } from "react-router-dom";
import "./events.css";
import Header from "../Header";
import Footer from "../Footer";

export default function SingleEvent() {
  const location = useLocation();
  const { title, date, imageUrl, longText } = location.state || {};

  if (!location.state) {
    return <h1 className="not-found-text">Post not found</h1>;
  }

  return (
    <>
      <Header />
      <div className="single-blog">
        <div className="container">
          <section className="single-blog-post">
            <div className="post-header">
              <h2 className="post-title">{title}</h2>
              <img src={imageUrl} alt={title} />
            </div>
            <div className="content-grid">
              <div className="left-section">
                <h4>Date:</h4>
                <p>{date}</p>
              </div>
              <div className="block-content">
                <p>{longText}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
