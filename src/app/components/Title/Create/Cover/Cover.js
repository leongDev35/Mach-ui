import React from 'react'

export default function Cover({ setImage, image }) {

    const handleImageChange = (event) => {
        
        const files = Array.from(event.target.files);
        const imagesArray = files.map((file) => ({
            url: URL.createObjectURL(file), //! xem trước ảnh tải lên từ url cục bộ mà không phải tải lên server
            name: file.name,
            path: `Chap1/${file.name}`,
        }));
        if (image) {
        URL.revokeObjectURL(image.url);
        }
        setImage(imagesArray[0]);
        
    };
    const openFilePicker = () => {
        document.getElementById('imageUploadInput').click();
    };
    const removeImage = (url) => {
        // Giải phóng bộ nhớ bằng cách thu hồi URL
        URL.revokeObjectURL(url);
        setImage(null);
    };
    return (
        <div>
            <div className="detail-title-item-header">Cover <span className="text-red-500">*</span></div>
            <button className="mb-1 text-white bg-[--color-pink-purple] px-3 py-2 rounded-lg" onClick={openFilePicker}>Upload Cover</button>
            <input
                id="imageUploadInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            <div className="image-preview-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                {image && <div className="relative m-3 text-center" >
                    <img src={image.url} alt={`Selected  ${image.path}`} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                    <button
                        className="hover:opacity-90"
                        onClick={() => removeImage(image.url)}
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
                </div>}

            </div>
        </div>
    )
}
