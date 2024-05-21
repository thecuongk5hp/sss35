import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Nguyen Van A');

  return (
    <div>
      <h1>Name and Surname: {name}</h1> {}
      {}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
