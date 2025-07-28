import React from 'react';

const GalleryItem = React.memo(({ imageName, onClick }) => {
  return (
    <div 
      className="galleryItem"
      onClick={() => onClick(imageName)}
    >
      <img 
        src={`/mediaImages/${imageName}`} 
        alt={imageName}
        className="galleryImage"
        loading="lazy"
      />
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

export default GalleryItem;
