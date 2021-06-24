import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products, Navbar } from './components';
import Create from './components/Products/Product/Create.js';
import SignUp from './components/auth/SignUp.js';
import Login from './components/auth/Login.js';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Products} />
      <Create />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
