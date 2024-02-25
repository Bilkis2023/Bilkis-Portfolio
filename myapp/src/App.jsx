import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
// import Project from './components/Project.jsx'
import ProjectGallery from './components/ProjectGallery.jsx.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Routes id="home-route" path="/" element={<Home />} />
      </Routes>

    </main>

    <Header />
    <main>
      <Routes>
        <Routes id="Project-route" path="/" element={<Project />} />
      </Routes>

    </main>

    <Header />
    <main>
      <Routes>
        <Routes id="ProjectGallery-route" path="/" element={<ProjectGallery />} />
      </Routes>

    </main>

    <Header />
    <main>
      <Routes>
        <Routes id="Contact-route" path="/" element={<Contact />} />
      </Routes>

    </main>

    
    </>
  )
}

export default App
