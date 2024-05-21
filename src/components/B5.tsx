import React, { useState } from 'react';

function FormComponent() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Nhập giá trị:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <p>Giá trị nhập: {inputValue}</p> 
      </form>
    </div>
  );
}

export default FormComponent;