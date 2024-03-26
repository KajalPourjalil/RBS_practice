import React from 'react'
import "../src/scss/main.scss";
import { NavBar } from './Components/Navbar'
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
    <NavBar/>
    <Container/>
    </div>
  )
}

export default App
