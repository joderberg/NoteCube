import React, { useState, useRef } from 'react';
import './styles.css';

const App = () => {
  const [activeCube, setActiveCube] = useState(null);
  const appRef = useRef(null);

  const handleCubeClick = (columnIndex, rowIndex) => {
    setActiveCube({ columnIndex, rowIndex });
  };

  const handleAppClick = (event) => {
    if (!appRef.current.contains(event.target)) {
      setActiveCube(null);
    }
  };

  return (
    <div className="app" ref={appRef}>
      <div className="cube-container">
        {[...Array(10)].map((_, columnIndex) => (
          <div key={columnIndex} className="cube-column">
            {[...Array(10 - columnIndex)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className={`cube ${activeCube?.columnIndex === columnIndex && activeCube?.rowIndex === rowIndex ? 'active-cube' : ''}`}
                onClick={() => handleCubeClick(columnIndex, rowIndex)}
                contentEditable={activeCube?.columnIndex === columnIndex && activeCube?.rowIndex === rowIndex}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
