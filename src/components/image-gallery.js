"use client";

import { useState } from "react";
export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Main Image Display */}
        <div className=" flex  lg:h-auto w-1/2 lg:w-[38rem] min-w-[20rem] lg:min-w-full items-center justify-center overflow-hidden object-cover lg:object-fill">
          <img src={mainImage} alt="Main Display" className="rounded-lg" />
        </div>

        {/* Thumbnail Image List */}
        <div className="mt-4 flex space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 lg:h-40 w-20 lg:w-40 cursor-pointer rounded-lg border-2 border-gray-300 object-cover hover:border-blue-500"
              onClick={() => setMainImage(image)} // OnClick updates the main image
            />
          ))}
        </div>
      </div>
    </div>
  );
}
