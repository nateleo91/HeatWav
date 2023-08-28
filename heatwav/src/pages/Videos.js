import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'; // Import the CSSTransitionGroup
import '../Css/Videos.css';
import b2b from '../images/b2b-newer.png';
import tof from '../images/ToF.jpg';
import prodhp from '../images/prodhp.jpg';

const videosData = [
  {
    id: 1,
    title: 'Video 1',
    videoUrl: 'https://example.com/video1.mp4', // Replace this URL with the actual video URL
  },
  {
    id: 2,
    title: 'Video 2',
    videoUrl: 'https://example.com/video2.mp4', // Replace this URL with the actual video URL
  },
  {
    id: 3,
    title: 'Video 3',
    videoUrl: 'https://example.com/video3.mp4', // Replace this URL with the actual video URL
  },
  // Add more video data objects if needed
];

function Videos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const renderVideoItem = (video) => (
    <div key={video.id} className="video-item">
      <h2>{video.title}</h2>
      {/* Replace the video element with your preferred video player */}
      <video controls width="100%" height="auto">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  return (
    <div className="video-container">
      {selectedImage !== null && (
        <button onClick={() => setSelectedImage(null)}>Go back</button>
      )}
      {selectedImage === null ? (
        <div>
          <h1>Check out some of our different streams</h1>
          <div className="image-container">
            <img
              src={b2b}
              alt="Image 1"
              onClick={() => handleImageClick(1)}
            />
            <img
              src={tof}
              alt="Image 2"
              onClick={() => handleImageClick(2)}
            />
            <img
              src={prodhp}
              alt="Image 3"
              onClick={() => handleImageClick(3)}
            />
          </div>
        </div>
      ) : (
        <div>
          <CSSTransition
            in={selectedImage !== null}
            timeout={300}
            classNames="selected-image-transition"
            unmountOnExit
          >
            <div className="selected-image-container">
              <img
                src={
                  selectedImage === 1
                    ? b2b
                    : selectedImage === 2
                    ? tof
                    : selectedImage === 3
                    ? prodhp
                    : null
                }
                alt={`Image ${selectedImage}`}
                className="selected-image"
              />
            </div>
          </CSSTransition>
          <div className="video-list">
            {videosData.map((video) => renderVideoItem(video))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
