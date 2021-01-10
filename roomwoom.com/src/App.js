import React from 'react';
import './App.css';

import Navbar from "./Components/navbar/navbar";
import Searchlogo from "./Components/searchLogo/searchlogo";
import Searchbar from "./Components/searchbar/searchbar";

function App() {
  return (
      <div>
        <Navbar />
        <Searchlogo />
        <Searchbar />
      </div>
  );
}

export default App;
