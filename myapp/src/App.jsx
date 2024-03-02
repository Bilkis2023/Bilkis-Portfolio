import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import ProjectGallery from './components/ProjectGallery.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import './App.css'



function App() {

  return (

    <div className="container">
      <Header />
      <main>
        <Routes>

          <Route id="home-route" path="/" element={<Home />} />
          <Route id="contact-route" path="/" element={<Contact />} />
          <Route id="projectGallery-route" path="/" element={<ProjectGallery />} />
          <Route id="projectDetails-route" path="/" element={<ProjectDetails />} />

        </Routes>

      </main>

    </div>
  )
}


export default App;








