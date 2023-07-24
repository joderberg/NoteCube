import React, { useState, useRef, useEffect } from 'react';

const NoteCube = ({ onClose }) => {
  const [note, setNote] = useState('');

  const noteCubeRef = useRef();

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleOutsideClick = (event) => {
    if (noteCubeRef.current && !noteCubeRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="note-cube" ref={noteCubeRef}>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Skriv något här"
        style={{
          width: '100%',
          height: '100%',
          fontSize: '3px',
          resize: 'none',
          backgroundColor: 'darkgray',
          border: 'none',
          outline: 'none',
          overflow: 'hidden', // Håll texten inom rutan
          whiteSpace: 'pre-wrap', // Tillåt radbyte inom textarea
          padding: '5px',
          boxSizing: 'border-box',
          color: 'white', // Vit text på mörkgrå bakgrund
        }}
      />
    </div>
  );
};

export default NoteCube;
