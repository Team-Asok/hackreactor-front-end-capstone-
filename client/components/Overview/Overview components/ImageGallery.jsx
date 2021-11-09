import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';

const styling = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    maxWidth: 1000,
    height: "auto",
    maxHeight: 800,
  },
  tn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',

  },
};

const Gallery = ({ style, photo, updatePhoto }) => (
  <div id="Gallery" style={styling.container}>
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {style.photos.slice(0, 7).map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} />)}
        </div>
      : null
    }
    {photo.url ? <img src={photo.url} style={styling.main}/> : <img src={NoImage} style={styling.main}/>}
  </div>
);

export default Gallery;
