/** @format */
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'


import "./App.styles.scss";

import Navbar from "./components/nav/Navbar";
import Footer from './components/footer/footer.component'
import Contact from "./pages/contact/contact.component"

import Home from "./pages/home/Home";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </Fragment>

  );
}

export default App;
