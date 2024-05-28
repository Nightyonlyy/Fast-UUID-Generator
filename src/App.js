import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [uuid, setUuid] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const generateUUID = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    setCopySuccess('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid).then(() => {
      setCopySuccess('UUID copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Generate your UUID
        </p>
        <div className="App-body">
          <p>Generated UUID:</p>
          <div className="uuid-container"></div>
          <button className="button" onClick={copyToClipboard}>{uuid}</button>
        </div>
        <button className="button" onClick={generateUUID}>Generate UUID</button>
        {copySuccess && <div className="copy-message">{copySuccess}</div>}
      </header>
    </div>
  );
}

export default App;
