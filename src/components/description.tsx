import React from 'react';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  const formattedDescription = description.replace(/\n/g, '<br/>').replace(/&amp;/g, '&amp;');

  return (
    <div className="text-base text-gray-900">
      <p className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
    </div>
  );
};

export default ProductDescription;
