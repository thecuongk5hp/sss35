import React, { useState } from 'react';

function ExampleComponent() {
  const [stateValue, setStateValue] = useState<string>('giá trị khởi tạo');
  const updateState = (newValue: string) => {
    setStateValue(newValue);
  };
  return (
    <div>
      <h1>{stateValue}</h1> {/* Hiển thị giá trị state */}
      <button onClick={() => updateState('giá trị mới')}>
        Cập nhật State
      </button>
    </div>
  );
}
export default ExampleComponent;