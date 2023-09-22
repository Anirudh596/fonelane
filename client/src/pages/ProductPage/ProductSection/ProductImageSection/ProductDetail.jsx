import  { useState } from 'react';

const ProductDetail = () => {
  const [selectedQuality, setSelectedQuality] = useState('good');

  const handleQualityButtonClick = (quality) => {
    setSelectedQuality(quality);
  };

  let title, specifications;

  if (selectedQuality === 'good') {
    title = 'High-Quality Device';
    specifications = 'Specifications for a high-quality device...';
  } else if (selectedQuality === 'average') {
    title = 'Average-Quality Device';
    specifications = 'Specifications for an average-quality device...';
  } else if (selectedQuality === 'poor') {
    title = 'Low-Quality Device';
    specifications = 'Specifications for a low-quality device...';
  }

  return (
    <div className='w-full h-[100vh] absolute'>
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="specification">
        <p>{specifications}</p>
      </div>

      <div className="quality-buttons">
        <button
          onClick={() => handleQualityButtonClick('good')}
          className={selectedQuality === 'good' ? 'selected' : ''}
        >
          Good Quality
        </button>
        <button
          onClick={() => handleQualityButtonClick('average')}
          className={selectedQuality === 'average' ? 'selected' : ''}
        >
          Average Quality
        </button>
        <button
          onClick={() => handleQualityButtonClick('poor')}
          className={selectedQuality === 'poor' ? 'selected' : ''}
        >
          Poor Quality
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
