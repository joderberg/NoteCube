import React, { useState } from 'react';

const Cube = () => {
  const [isLarge, setIsLarge] = useState(false);

  const handleCubeClick = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div
      className={`cube ${isLarge ? 'large' : ''}`}
      onClick={handleCubeClick}
    ></div>
  );
};

export default Cube;
