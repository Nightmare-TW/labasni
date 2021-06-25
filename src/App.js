import React from 'react';
import { Products, Navbar } from './components';
import Create from '../src/components/Products/Product/Create.jsx';
function App() {
  
  return (
    <div>
      <Navbar />
      <Products />
      <h3>ADMIN</h3>
      <Create/>
    </div>
  );
}

export default App;
