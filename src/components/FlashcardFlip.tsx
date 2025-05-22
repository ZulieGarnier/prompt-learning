import React, { useState } from "react";

interface FlashcardProps {
  title: string;
  content: string;
  image: string;
}

export default function Flashcard({ title, content, image }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-72 transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Recto */}
        <div className="absolute w-full h-full bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center justify-center backface-hidden">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain mb-4"
          />
          <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-blue-500 text-sm">🡆 Cliquez pour découvrir</p>
        </div>

        {/* Verso */}
        <div className="absolute w-full h-full bg-blue-50 border border-blue-200 rounded-xl shadow-md p-4 text-sm text-gray-800 [transform:rotateY(180deg)] backface-hidden overflow-y-auto">
          <h3 className="text-md font-semibold text-blue-800 mb-2 text-center">
            {title}
          </h3>
          <pre className="whitespace-pre-wrap text-xs text-gray-700">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}
