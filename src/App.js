
// import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Signup from "./Pages/Signup/Signup";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/Signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
