import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const changeColor = () => {
    setColor(color === 'black' ? 'red' : 'black');
    setTextColor(textColor === 'black' ? 'white' : 'black');
  };
  return (
    <div>
      <button
        style={{ backgroundColor: color, color: textColor }}
        onClick={changeColor}
      >
        Thay đổi màu
      </button>
      <h2 style={{ color: textColor }}>Tiêu đề văn bản</h2>
    </div>
  );
}
export default ColorChanger;
