import React, { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <h1>Hiện</h1>}
      {!isVisible && <h1>Ẩn</h1>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ẩn' : 'Hiện'}
      </button>
    </div>
  );
}

export default Toggle;
