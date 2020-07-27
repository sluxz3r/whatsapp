import React from 'react';
import './App.css';

function App() {
  const chatme = () => {
    window.open('https://api.whatsapp.com/send?phone=628112640112&text=Hello%20World')
  }
  return (
    <div className="App">
      <button onClick={() => chatme()}>Chat Me</button>
    </div>
  );
}

export default App;
