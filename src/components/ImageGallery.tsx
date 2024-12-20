import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="relative">
      <div className="h-[60vh] overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt="Main view"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 bg-white/90 p-2 rounded-lg shadow-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`w-16 h-16 rounded-md overflow-hidden ${
                mainImage === image ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}