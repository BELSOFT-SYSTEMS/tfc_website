import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './ImageScroll.css'; // Import CSS file for styling

function ImageScroll() {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    'joy/joy1.jpeg',
    'joy/joy2.jpeg',
    'joy/joy3.jpg',
    'joy/joy4.jpg',
    'joy/joy5.jpg',
    'joy/joy6.jpg',
    // Add more image URLs here
  ];

  const toggleOpen = () => {
    setOpen(!open);
    // Toggle body overflow
    document.body.classList.toggle('lightbox-open');
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    toggleOpen();
  };

  useEffect(() => {
    // Cleanup function to remove the added class when component unmounts
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, []);

  return (
    <div className="image-scroll-container">
      <div className="image-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="scroll-image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <Lightbox
        open={open}
        onClose={toggleOpen}
        slides={images.map(image => ({
          src: image,
          alt: 'Image',
        }))}
        currentIndex={selectedImageIndex}
      />
    </div>
  );
}

export default ImageScroll;
