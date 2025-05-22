import React from "react";

interface FlashcardProps {
  title: string;
  content: string;
  image: string;
}

export default function Flashcard({ title, content, image }: FlashcardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 transition hover:scale-[1.02] hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-contain mb-3"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center whitespace-pre-line">{content}</p>
    </div>
  );
}
