"use client"

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = { IMAGE: 'image' };

function DraggableImage({ image, index, moveImage, removeImage }) {
  const [, ref] = useDrag({ //! ref sẽ là connector function cho nguồn kéo. Nó gắn với phần có thể kéo của DOM
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
    <div className="relative m-3 text-center" ref={(node) => ref(drop(node))}>
      <img src={image.url} alt={`Selected ${index} - ${image.path}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
      <span className="block text-xs">#{index + 1}</span>
      <button
        className="hover:opacity-90"
        onClick={() => removeImage(index, image.url)}
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          background: 'var(--color-purple)',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          width: '20px',
          height: '20px',
          fontSize: '12px'
        }}
      >
        <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 24 24" className="icon text-text-white ml-[1px]"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>

      </button>
    </div>
  );
}

export default function ChoseImageDetail({selectedImages, setSelectedImages, chapterNumber}) {

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    console.log(files);
    
    const imagesArray = files.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      url: URL.createObjectURL(file), //! xem trước ảnh tải lên từ url cục bộ mà không phải tải lên server
      name: file.name,
      path: `/manga_images/Chapter_${chapterNumber}/${file.name}`, //! tạm thời sử dụng đường dẫn cố định ở trong public
    }));
    // ! Join các ảnh cũ và mới
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));
  };

  console.log(selectedImages,123);
  
  const openFilePicker = () => {
    document.getElementById('imageUploadInput').click();
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = Array.from(selectedImages);
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setSelectedImages(updatedImages);
  };
  const removeImage = (indexToRemove,url) => {
     // Giải phóng bộ nhớ bằng cách thu hồi URL
    URL.revokeObjectURL(url);
    setSelectedImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <button className="mb-1 text-white bg-[--color-pink-purple] px-3 py-2 rounded-lg" onClick={openFilePicker}>Upload Images</button>
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
            <DraggableImage key={image.id} image={image} index={index} moveImage={moveImage} removeImage={removeImage} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

