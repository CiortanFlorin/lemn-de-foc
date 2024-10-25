"use client";
import Image from "next/image";
import { useState } from "react";
export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Main Image Display */}
        <div className="flex w-1/2 min-w-[20rem] items-center justify-center overflow-hidden object-cover lg:h-auto lg:w-[38rem] lg:min-w-full lg:object-fill">
          <Image
            src={mainImage}
            alt="Imaginea principala a produsului"
            className="rounded-lg"
            width={500}
            height={500}
            loading="eager"
          />
        </div>

        {/* Thumbnail Image List */}
        <div className="mt-4 flex space-x-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={100}
              height={100}
              alt={`Imaginea ${index + 1}`}
              aria-label={`Vezi poza ${index + 1} ca imagine principala`}
              className="h-20 w-20 cursor-pointer rounded-lg border-2 border-gray-300 object-cover hover:border-fireRed lg:h-40 lg:w-40"
              onClick={() => setMainImage(image)} // OnClick updates the main image
            />
          ))}
        </div>
      </div>
    </div>
  );
}
