import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks"
import NavStock from './components/NavStock';
import Dashboard from './pages/Dashboard';

function App() {


  return (
    <>
      <NavStock/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/stocks' element={<Stocks/>}/>
        <Route path="/dashboard/:symbol" element={<Dashboard/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
