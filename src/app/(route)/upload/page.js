"use client"
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = { IMAGE: 'image' };

function DraggableImage({ image, index, moveImage }) {
  const [, ref] = useDrag({
    type: ItemType.IMAGE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.IMAGE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ margin: '10px', textAlign: 'center' }}>
      <img src={image.url} alt={`Selected ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
      <span style={{ display: 'block', fontSize: '12px' }}>#{index + 1} - {image.path}</span>
    </div>
  );
}

function ImageUpload() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagesArray = files.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      url: URL.createObjectURL(file),
      name: file.name,
      path: `Chap1/${file.name}`,
    }));
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));

    // Cleanup object URLs
    files.forEach((file) => URL.revokeObjectURL(file));
  };

  const openFilePicker = () => {
    document.getElementById('imageUploadInput').click();
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = Array.from(selectedImages);
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setSelectedImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <button onClick={openFilePicker}>Upload Images</button>
        <input
          id="imageUploadInput"
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        <div className="image-preview-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          {selectedImages.map((image, index) => (
            <DraggableImage key={image.id} image={image} index={index} moveImage={moveImage} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default ImageUpload;
