import React, { useState, useEffect } from "react";
import "./imageslider.css";
import { AiFillCloseCircle } from "react-icons/ai";
const ImageSlider = ({ images, initialIndex, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedImageIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`image-slider ${isOpen ? "open" : ""}`}>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img
          src={images[selectedImageIndex]}
          alt={`Image ${selectedImageIndex + 1}`}
        />
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
