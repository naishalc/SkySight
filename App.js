import './App.css';
import React, { useState } from 'react';
import './Components/SkyApp/SkyApp.css'

import SkyApp from './Components/SkyApp/SkyApp'

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      

      <SkyApp />
    </div>
  );
}
export default App;




