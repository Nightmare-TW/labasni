import React from 'react';
import { Products, Navbar } from './components';
import Create from './components/Products/Create.jsx';
function App() {
  
  return (
    <div>
      <Navbar />
      <Products />
      <Create/>
    </div>
  );
}

export default App;
