import './Media.css';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import exifr from 'exifr';
import GalleryItem from './GalleryItem';

function Media() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('main'); // 'main', 'photos', 'gallery', 'about'
  const [imageMetadata, setImageMetadata] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // For full-screen modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For navigation
  const [showAboutMessage, setShowAboutMessage] = useState(false); // For temporary about message

  const IMAGES_PER_ROW = 7;
  const ROWS_PER_PAGE = 3;
  const [galleryPage, setGalleryPage] = useState(0);

  // List of all images in the mediaImages folder
  const imageList = [
    'photo-67.jpg', 'photo-66.jpg', 'photo-65.jpg', 'photo-64.jpg', 'photo-63.jpg',
    'photo-62.jpg', 'photo-61.jpg', 'photo-60.jpg', 'photo-59.jpg', 'photo-58.jpg',
    'photo-57.jpg', 'photo-56.jpg', 'photo-55.jpg', 'photo-54.jpg', 'photo-53.jpg',
    'photo-52.jpg', 'photo-51.jpg', 'photo-50.jpg', 'photo-49.jpg', 'photo-48.jpg',
    'photo-47.jpg', 'photo-46.jpg', 'photo-45.jpg', 'photo-44.jpg', 'photo-43.jpg',
    'photo-42.jpg', 'photo-41.jpg', 'photo-40.jpg', 'photo-39.jpg', 'photo-38.jpg',
    'photo-37.jpg', 'photo-36.jpg', 'photo-35.jpg', 'photo-34.jpg', 'photo-33.jpg',
    'photo-32.jpg', 'photo-31.jpg', 'photo-30.jpg', 'photo-29.jpg', 'photo-28.jpg',
    'photo-27.jpg', 'photo-26.jpg', 'photo-25.jpg', 'photo-24.jpg', 'photo-23.jpg',
    'photo-22.jpg', 'photo-21.jpg', 'photo-20.jpg', 'photo-19.jpg', 'photo-18.jpg',
    'photo-17.jpg', 'photo-16.jpg', 'photo-15.jpg', 'photo-14.jpg', 'photo-13.jpg',
    'photo-12.jpg', 'photo-11.jpg', 'photo-10.jpg', 'photo-9.jpg', 'photo-8.jpg',
    'photo-7.jpg', 'photo-6.jpg', 'photo-5.jpg', 'photo-4.jpg', 'photo-3.jpg',
    'photo-2.jpg', 'photo.jpg'
  ];

  const goHome = () => {
    navigate("/");
  }

  const handlePhotosClick = useCallback(() => {
    setCurrentView('photos');
  }, []);

  const handleGalleryClick = useCallback(() => {
    setCurrentView('gallery');
  }, []);

  const handleGalleryImageClick = useCallback((imageName) => {
    const imageIndex = imageList.indexOf(imageName);
    setCurrentImageIndex(imageIndex);
    setCurrentView('photos');
    
    // Wait for the view to switch, then scroll to the image
    setTimeout(() => {
      const photoElement = document.querySelector(`[data-image-index="${imageIndex}"]`);
      if (photoElement) {
        photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }, [imageList]);

  const handleAboutClick = useCallback(() => {
    setShowAboutMessage(true);
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowAboutMessage(false);
    }, 3000);
  }, []);

  const handleBackClick = useCallback(() => {
    setCurrentView('main');
  }, []);

  const openImageModal = useCallback((imageName) => {
    setSelectedImage(imageName);
    setCurrentImageIndex(imageList.indexOf(imageName));
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }, [imageList]);

  const closeImageModal = () => {
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = 'unset';
  }

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % imageList.length
      : (currentImageIndex - 1 + imageList.length) % imageList.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(imageList[newIndex]);
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeImageModal();
        } else if (e.key === 'ArrowRight') {
          navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, imageList]);

  // Function to extract EXIF data from an image
  const getImageMetadata = async (imagePath) => {
    try {
      const exif = await exifr.parse(imagePath);
      if (exif) {
        // Format date properly - convert Date object to string
        let formattedDate = 'Unknown';
        if (exif.DateTimeOriginal || exif.DateTime) {
          const dateObj = exif.DateTimeOriginal || exif.DateTime;
          if (dateObj instanceof Date) {
            // Check if date is before 2023
            if (dateObj.getFullYear() < 2023) {
              formattedDate = 'Unknown';
            } else {
              formattedDate = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              });
            }
          } else if (typeof dateObj === 'string') {
            // For string dates, try to parse and check year
            const parsedDate = new Date(dateObj);
            if (!isNaN(parsedDate.getTime()) && parsedDate.getFullYear() < 2023) {
              formattedDate = 'Unknown';
            } else {
              formattedDate = dateObj;
            }
          }
        }

        return {
          camera: exif.Make && exif.Model ? `${exif.Make} ${exif.Model}` : 'Unknown',
          aperture: exif.FNumber ? `f/${exif.FNumber}` : 'Unknown',
          focalLength: exif.FocalLength ? `${exif.FocalLength}mm` : 'Unknown',
          shutterSpeed: exif.ExposureTime ? `1/${Math.round(1/exif.ExposureTime)}s` : 'Unknown',
          iso: exif.ISO ? `ISO ${exif.ISO}` : 'Unknown',
          dateTime: formattedDate
        };
      }
    } catch (error) {
      console.log(`Could not read EXIF data for ${imagePath}:`, error);
    }
    return {
      camera: 'Unknown',
      aperture: 'Unknown',
      focalLength: 'Unknown',
      shutterSpeed: 'Unknown',
      iso: 'Unknown',
      dateTime: 'Unknown'
    };
  };

  // Load metadata for all images when photos view is opened
  useEffect(() => {
    if (currentView === 'photos') {
      const loadMetadata = async () => {
        const metadata = {};
        for (const image of imageList) {
          const imagePath = `/mediaImages/${image}`;
          metadata[image] = await getImageMetadata(imagePath);
        }
        setImageMetadata(metadata);
      };
      loadMetadata();
    }
  }, [currentView]);

  // Memoized paginated images for the current gallery page
  const paginatedGalleryImages = useMemo(() => {
    const start = galleryPage * ROWS_PER_PAGE * IMAGES_PER_ROW;
    const end = start + ROWS_PER_PAGE * IMAGES_PER_ROW;
    return imageList.slice(start, end);
  }, [galleryPage, imageList]);

  const totalRows = Math.ceil(imageList.length / IMAGES_PER_ROW);
  const totalPages = Math.ceil(totalRows / ROWS_PER_PAGE);

  const handleNextGalleryPage = useCallback(() => {
    setGalleryPage((prev) => Math.min(prev + 1, totalPages - 1));
  }, [totalPages]);

  const handlePrevGalleryPage = useCallback(() => {
    setGalleryPage((prev) => Math.max(prev - 1, 0));
  }, []);


  // Render the main menu view
  const renderMainView = () => (
    <div className="mediaContent">
      <div className="mediaImage">
        <img src="/photoMe.jpg" width="10%" alt="mePhotoMedia" className="mediaPhotoOfMe" />
      </div>
      
      <div className="mediaButtons">
        <button className="mediaButton" onClick={handlePhotosClick}>
          photos
        </button>
        <button className="mediaButton" onClick={handleGalleryClick}>
          gallery
        </button>
        <button 
          className="mediaButton" 
          onClick={handleAboutClick}
        >
          about
        </button>
      </div>
      <div className="mediaSocialIconWrapper">
        <a href="https://instagram.com/cvu.take.two" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="mediaInstagramIcon" />
        </a>
      </div>
    </div>
  );

  // Render individual photo with metadata
  const renderPhoto = (imageName) => {
    const metadata = imageMetadata[imageName];
    
    if (!metadata) return (
      <div key={imageName} className="photoContainer">
        <div className="photoWrapper">
          <img 
            src={`/mediaImages/${imageName}`} 
            alt={imageName}
            className="photoImage"
            onClick={() => openImageModal(imageName)}
            loading="lazy"
          />
        </div>
      </div>
    );

    // Collect known and unknown fields
    const knownFields = [];
    const unknownFields = [];
    
    if (metadata.camera !== 'Unknown') knownFields.push({ label: 'Camera', value: metadata.camera });
    else unknownFields.push('camera');
    
    if (metadata.aperture !== 'Unknown') knownFields.push({ label: 'Aperture', value: metadata.aperture });
    else unknownFields.push('aperture');
    
    if (metadata.focalLength !== 'Unknown') knownFields.push({ label: 'Focal Length', value: metadata.focalLength });
    else unknownFields.push('focal length');
    
    if (metadata.shutterSpeed !== 'Unknown') knownFields.push({ label: 'Shutter Speed', value: metadata.shutterSpeed });
    else unknownFields.push('shutter speed');
    
    if (metadata.iso !== 'Unknown') knownFields.push({ label: 'ISO', value: metadata.iso });
    else unknownFields.push('ISO');
    
    if (metadata.dateTime !== 'Unknown') knownFields.push({ label: 'Date', value: metadata.dateTime });
    else unknownFields.push('date');

    return (
      <div key={imageName} className="photoContainer">
        <div className="photoWrapper">
          <img 
            src={`/mediaImages/${imageName}`} 
            alt={imageName}
            className="photoImage"
            onClick={() => openImageModal(imageName)}
            loading="lazy"
          />
          <div className="photoMetadata">
            {knownFields.length > 0 && (
              <>
                {knownFields.map((field, index) => (
                  <div key={index}>{field.value}</div>
                ))}
              </>
            )}
            {unknownFields.length > 0 && (
              <div className="unknownFields">
                Unknown {unknownFields.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render the photos view
  const renderPhotosView = () => (
    <div className="photosView">
      <div className="photosNavigation">
        <button className="navButton" onClick={handleBackClick}>back</button>
        <button className="navButton" onClick={handleGalleryClick}>gallery</button>
        <button className="navButton" onClick={handleAboutClick}>about</button>
      </div>

      <div className="photosContainer">
        {imageList.map((imageName, index) => (
          <div key={imageName} data-image-index={index}>
            {renderPhoto(imageName)}
          </div>
        ))}
      </div>
    </div>
  );

  // Render full-screen image modal
  const renderImageModal = () => {
    if (!selectedImage) return null;
    
    return (
      <div className="imageModal" onClick={closeImageModal}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <button className="closeButton" onClick={closeImageModal}>×</button>
          
          <button className="navArrow navArrowLeft" onClick={() => navigateImage('prev')}>
            &#8249;
          </button>
          
          <img 
            src={`/mediaImages/${selectedImage}`} 
            alt={selectedImage}
            className="modalImage"
            loading="lazy"
          />
          
          <button className="navArrow navArrowRight" onClick={() => navigateImage('next')}>
            &#8250;
          </button>
        </div>
      </div>
    );
  };

  // Render the gallery view
  const renderGalleryView = useMemo(() => (
    <div className="galleryView">
      <div className="photosNavigation">
        <button className="navButton" onClick={handleBackClick}>back</button>
        <button className="navButton" onClick={handlePhotosClick}>photos</button>
        <button className="navButton" onClick={handleAboutClick}>about</button>
      </div>

      <div className="galleryContainer">
        <div className="galleryGrid">
          {paginatedGalleryImages.map((imageName) => (
            <GalleryItem
              key={imageName}
              imageName={imageName}
              onClick={handleGalleryImageClick}
            />
          ))}
        </div>
        <div className="galleryPagination">
          <button onClick={handlePrevGalleryPage} disabled={galleryPage === 0}>Previous</button>
          <span>Page {galleryPage + 1} of {totalPages}</span>
          <button onClick={handleNextGalleryPage} disabled={galleryPage === totalPages - 1}>Next</button>
        </div>
      </div>
    </div>
  ), [imageList, handleGalleryImageClick, handleBackClick, handlePhotosClick, handleAboutClick, galleryPage, totalPages, paginatedGalleryImages, handlePrevGalleryPage, handleNextGalleryPage]);

  return (
    <div className="mediaPage">
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      
      {currentView === 'main' && renderMainView()}
      {currentView === 'photos' && renderPhotosView()}
      {currentView === 'gallery' && renderGalleryView}
      
      {/* Temporary about message */}
      {showAboutMessage && (
        <div className="aboutMessage">
          about view coming soon
        </div>
      )}
      
      {/* Full-screen image modal */}
      {renderImageModal()}
    </div>
  );
}

export default Media;