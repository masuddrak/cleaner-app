import React from 'react';
import Navber from './componets/Navber';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Login from './pages/Login';
import { Route, Routes } from 'react-router';
const App = () => {
  return (
    <div className='app text-white'>
      <Navber>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Navber>
    </div>
  );
};

export default App;
