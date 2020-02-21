import React, { useState } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import '../App.css';

const App = () => {
  const [formData, setFormData] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Routes setFormData={setFormData} formData={formData} />
    </div>
  );
};

export default App;
