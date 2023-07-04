import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Footer'
import Header from './Header'
import Skill from './Components/Skill';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Header/>
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p className='py-4 text-primary'>To Navigate / Routing About, Skill, Contact Pages Click on Navbar </p>
              <Routes >
              
                    <Route path='/about' Component={About}/>
                    <Route path='/' Component={Home}/>
                    <Route path='/contact' Component={Contact}/>
                    <Route path='/skill' Component={Skill}/>
              
              </Routes>
        </div>
      </header>
    </div>
    <div className="">
      <Footer/> 
    </div>
    </>
  );
}

export default App;
