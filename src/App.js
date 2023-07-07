import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Footer'
import Header from './Header'
import Skill from './Components/Skill';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Product from './Pages/Product';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="App">
          <header className="App-header">
            <div className="container">
              {/* <p className='py-4 text-primary'>To Navigate / Routing About, Skill, Contact Pages Click on Navbar </p>           */}
                <Routes>
                  <Route path='/about' Component={About}/>
                  <Route path='/home' Component={Home}/>
                  <Route path='/contact' Component={Contact}/>
                  <Route path='/skill' Component={Skill}/>
                  <Route path="*" element={<h1 className="text-center">404 Not Found</h1>}/>           
                  <Route path='/' Component={Dashboard}/>            
                  <Route path='/login' Component={Login}/>            
                  <Route path='/register' Component={Register}/>    
                  <Route path='/product' Component={Product}/>        
                  <Route path='/:id' Component={SingleProduct}/>        
                </Routes>  
            </div> 
          </header>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>           
    </>
  );
}

export default App;
