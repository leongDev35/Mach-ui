import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ResponsiveImage({ src, alt, originalWidth, originalHeight }) {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Kiểm tra nếu ảnh có chiều ngang lớn hơn chiều dọc
    if (originalWidth > originalHeight) {
      setIsLandscape(true);
    }
  }, [originalWidth, originalHeight]);

  return (
    <Image
      src={src}
      alt={alt}
      width={originalWidth}
      height={originalHeight}
      className={`mt-1 ${isLandscape ? 'w-full max-w-[800px]' : 'h-auto max-h-[500px]'}`}
      // Nếu ảnh landscape, kích thước tối đa chiều rộng là 800px, 
      // Nếu portrait, chiều cao tối đa là 500px
    />
  );
}