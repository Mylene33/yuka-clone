import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Produit from "./pages/produit";
import Footer from "./components/footer";

import './App.css';


class App extends Component {
  render(){
    return (

      <>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/produit/:id" component={Produit}/>
        </Switch>
        <Footer />
      </>
    
      )
  }
}

export default App;
