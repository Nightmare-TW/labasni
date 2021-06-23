import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/posts')
    .then(result =>{
      console.log(result.data);
      setProducts(result.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }, []);

  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/products">
          <Products products={products} />
        </Route>
        {/* <Route exact path="/">

        </Route> */}
      </Switch>
      
    </div>

    </Router>
  );
}

export default App;
