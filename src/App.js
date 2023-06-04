import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div className="App">
      <nav>
        <p>Social Media App</p>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;