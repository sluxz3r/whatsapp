import React from 'react';
import './App.css';
import logo1 from './1.jpg';
import logo2 from './2.jpg';
import logo4 from './4.jpg';
import logo5 from './5.jpg';
import logo6 from './6.jpg';
import logo7 from './7.jpg';
import logo8 from './8.jpg';
import logo9 from './9.jpg';
import logo10 from './10.jpg';
import logo12 from './12.jpg';
import logo13 from './13.jpg';
import logo14 from './14.jpg';
import logo15 from './15.jpg';
import logo16 from './16.jpg';

function App() {
  const chatme = () => {
    window.open('https://api.whatsapp.com/send?phone=628112640112&text=Hello%20World')
  }
  return (
    <div className="App">
      <img className="App-image" src={logo1} alt="Logo-1" />
      <img className="App-image" src={logo2} alt="Logo-2" />
      <img className="App-image" src={logo4} alt="Logo-4" />
      <img className="App-image" src={logo5} alt="Logo-5" />
      <img className="App-image" src={logo6} alt="Logo-6" />
      <img className="App-image" src={logo7} alt="Logo-7" />
      <img className="App-image" src={logo8} alt="Logo-8" />
      <img className="App-image" src={logo9} alt="Logo-9" />
      <img className="App-image" src={logo10} alt="Logo-10" />
      <img className="App-image" src={logo12} alt="Logo-12" />
      <br />
      <img className="App-image-sm" src={logo13} alt="Logo-13" />
      <br />
      <img className="App-image-sm" src={logo14} alt="Logo-14" />
      <br />
      <img className="App-image" src={logo15} alt="Logo-15" />
      <img className="App-image" src={logo16} alt="Logo-16" />
      <button className="App-chat" onClick={() => chatme()}>Chat Me</button>
    </div>
  );
}

export default App;
