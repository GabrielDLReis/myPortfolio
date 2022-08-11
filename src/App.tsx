// import { useState } from 'react'

import './styles/background.css'
import './styles/topcontent.css'
import './styles/navbar.css'
import './styles/myprojects.css'
import './styles/darklight.css'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import TopContent from './components/TopContent'
import NavBar from './components/NavBar'
import MyProjects from './components/MyProjects'
import DarkLight from './components/DarkLight'

function App() {
  

  return (
    <div className="App">
      <DarkLight />
      <NavBar />
      <TopContent />
      <BackgroundImage />
      <MyProjects />
    </div>
  )
}

export default App
