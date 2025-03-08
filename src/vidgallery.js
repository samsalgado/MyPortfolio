import React, { useState } from 'react';
import './App.css';
import Iframe from 'react-iframe';

const VidGallery = () => {
  const [videos] = useState([
    'https://www.youtube.com/embed/z0bxK2xKXFw',
    'https://www.youtube.com/embed/sJWd_78LzVw?si=Y0lGtJ7y516CDSqh',
    'https://www.youtube.com/embed/2lPOiH2Nn5M?si=i40DXuBk-JICrsVn',
    'https://www.youtube.com/embed/IvzMn4cNaUg?si=u-wby67AFV_AByZa',
    'https://www.youtube.com/embed/oRBnPNRYjtY?si=1dVxddC3YjorkfUE',
    'https://www.youtube.com/embed/hxlXJtavDkQ?si=dSSI34Nq7c_XNrYT',
    'https://www.youtube.com/embed/IvzMn4cNaUg?si=u-wby67AFV_AByZa',
    'https://www.youtube.com/embed/biX1mDB9hlc?si=fgwETokAgMTM-SOy',
    'https://www.youtube.com/embed/3MUs-Aaakdg?si=BTZ5bkQXMfGpDx0i',
    // ... other video URLs
  ]);

  // Remove duplicate URLs from the videos array
  const uniqueVideos = [...new Set(videos)];

  const [initialVideosToShow, setInitialVideosToShow] = useState(3); // Adjust number for mobile

  const handleLoadMore = () => {
    setInitialVideosToShow(initialVideosToShow + 6);
  };

  return (
    <div className="video-gallery">
      {uniqueVideos.slice(0, initialVideosToShow).map((videoUrl, index) => (
        <Iframe
          key={index}
          width="100%" // Responsive width
          height="200px"
          src={videoUrl}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        />
      ))}
      {uniqueVideos.length > initialVideosToShow && (
        <button onClick={handleLoadMore}>Load More Videos</button>
      )}
    </div>
  );
};

export default VidGallery;
