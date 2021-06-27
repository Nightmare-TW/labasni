import React, { useState, useEffect } from 'react';
import { Products, Navbar, Create, ProductDetails, Container, SignUp, Login } from './components';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
    .then(result =>{
      // console.log(result.data);
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
        <Route exact path="/landing">
          <Container />
        </Route>
        <Route exact path="/">
          <Products products={products} />
        </Route>
        <Route exact path="/product/details/:id">
          <ProductDetails />
        </Route>
        <Route exact path="/posts">
          <Create/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
