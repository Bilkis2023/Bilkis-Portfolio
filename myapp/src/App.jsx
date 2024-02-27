

import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
// import Project from './components/Project.jsx'
import ProjectGallery from './components/ProjectGallery.jsx'
import './App.css'





function App() {

  return (

    <div className="container">
      <main>
        <Routes>
        <Routes id="header-route" path="/" element={<Header />} />
          <Routes id="home-route" path="/" element={<Home />} />
          <Routes id="contact-route" path="/" element={<Contact />} />
          <Routes id="project-route" path="/" element={<Project />} />
          <Routes id="projectGallery-route" path="/" element={<ProjectGallery />} />
        </Routes>

      </main>

    </div>
  )
}


export default App








/