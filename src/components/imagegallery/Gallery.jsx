import "./gallery.css";
import ImageSlider from "../imageslider/ImageSlider";

import { useState } from "react";
const Gallery = ({ Posts }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };
  return (
    <div className="App">
      <h2>My Gallery</h2>
      <div className="image-grid">
        {Posts.map((post, index) => (
          <div key={post.id} className="grid-item">
            <img
              key={post.id}
              src={post.photo}
              onClick={() => openSlider(index)}
            />
          </div>
        ))}
      </div>
      {isSliderOpen && (
        <ImageSlider
          images={Posts.map((post) => post.photo)}
          initialIndex={selectedImageIndex}
          isOpen={isSliderOpen}
          onClose={closeSlider}
        />
      )}
    </div>
  );
};

export default Gallery;
