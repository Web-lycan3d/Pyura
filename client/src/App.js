/** @format */
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'


import "./App.styles.scss";

import Navbar from "./components/nav/Navbar";
import Footer from './components/footer/footer.component'
import Firstpage from "./pages/home/Firstpage";
import Contact from "./pages/contact/contact.component"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Firstpage} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </Fragment>
  );
}

export default App;
