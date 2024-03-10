import React from 'react'
import reactLogo from './assets/react.svg';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Services from './components/Internship/Internship';
import Resume from './components/Education/Education';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/Projects/Project';
// import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/certificates/certificates';
import Contact from './components/contact/Contact';
// import Pricing from './components/pricing/Pricing';


function App() {

  return (
    <div className="App">
        <Sidebar />
        <main className='main'>
          <Home/>
          <About />
          <Services/>
          <Resume />
          <Portfolio />
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
          <Blog />
          <Contact />
        </main>
    </div>
  )
}

export default App
