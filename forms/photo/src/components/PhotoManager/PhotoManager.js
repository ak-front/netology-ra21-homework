import React, { useState } from 'react';

import PhotoModel from './../../models/PhotoModel';

import PhotoManagerList from './PhotoManagerList';

import './PhotoManager.css';

const fileToDataUrl = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', event => {
      resolve(event.currentTarget.result);
    });

    fileReader.addEventListener('error', event => {
      reject(new Error(event.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
};

function PhotoManager() {
  const [photos, setPhotos] = useState([]);
  const handleSelect = async event => {
    const files = [...event.target.files];
    const urls = await Promise.all(files.map(file => fileToDataUrl(file)));

    setPhotos(prevPhotos => ([
      ...prevPhotos,
      ...urls.map(url => new PhotoModel({src: url}))
    ]));
  };

  const handlePhotoRemove = id => {
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
  };

  return (
    <div className="PhotoManager">
      <div className="PhotoManager-selectFile">
        <input
          accept="image/*"
          multiple
          type="file"
          onChange={handleSelect}
        />
        <div className="PhotoManager-selectFileText">
          Click to select
        </div>
      </div>
      <PhotoManagerList
        items={photos}
        onItemRemove={handlePhotoRemove}
      />
    </div>
  );
}

export default PhotoManager;
