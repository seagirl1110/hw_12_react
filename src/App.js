import './App.css';
import React, { useState } from 'react';
import ValueDisplay from './components/ValueDisplay';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h2>Current and Previous Value</h2>
      <input
        className="text_input"
        type="text"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
