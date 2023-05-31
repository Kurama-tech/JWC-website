import React from 'react';

interface TextWrapperProps {
  text: string;
}

const TextWrapper: React.FC<TextWrapperProps> = ({ text }) => {
  const truncatedText = text.length > 120 ? `${text.slice(0, 120)}...` : text;

  return (
    <div className="whitespace-normal break-words mb-2">
      {truncatedText}
    </div>
  );
};

export default TextWrapper;
