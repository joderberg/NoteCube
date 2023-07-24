import React from 'react';
import Cube from './Cube';

const CubeColumn = ({ numCubes }) => {
  return (
    <div className="cube-column">
      {[...Array(numCubes)].map((_, index) => (
        <Cube key={index} />
      ))}
    </div>
  );
};

export default CubeColumn;
