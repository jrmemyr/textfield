import React from 'react';
import { Fragment } from 'react';
import Button from './components/Button';
import TextField from './components/TextField';
import H2 from './components/H2';
import './App.css';
import Logo from './components/image assets/citelogo.png'
import Pic1 from './components/image assets/mypic.jpg'
import Pic2 from './components/image assets/mypicc.jpg'

function App() {
  return (
    <Fragment>
      <H2>P2 ACTIVITY PART 2</H2>
      <Button text="Cancel" color="red" rounded />
      <Button text="Submit" color="blue" rounded />
      <TextField id="textfield1" rounded classname="common-textfield" />
      <TextField id="textfield2" rounded classname="common-textfield" />
      <TextField id="textfield3" greenBg rounded classname="common-textfield" />
      <TextField id="textfield4" greenBg rounded classname="common-textfield" />
      <img src={Logo} alt="CITE Logo" className="circular-image" />
      <img src={Pic1} alt="" className="rounded-square-image" />
      <img src={Pic2} alt="" className="rounded-square-image" />
    </Fragment>
  );
}

export default App;
