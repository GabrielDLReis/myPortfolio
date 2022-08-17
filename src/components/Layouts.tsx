import "../styles/footer.css"
import '../styles/background.css'
import '../styles/topcontent.css'
import '../styles/navbar.css'

import "../styles/hardskills.css"
import backgroundLow from "../assets/img/lowResolution.jpg"

import NavBar from './NavBar'
import TopContent from './TopContent'
import BackgroundImage from './BackgroundImage'

import HardSkills from "./HardSkills"
import Footer from "./Footer"
import MyTestProjects from "./myTestProjects"


interface Props {
  themeChanger : boolean
}

function Layouts({themeChanger} : Props) {
  return <div>
    <NavBar aButton={themeChanger}/>
    <TopContent themeChanger={themeChanger}/>
    <BackgroundImage />
    <MyTestProjects themeChanger={themeChanger} backgroundLow={backgroundLow}/>
    <HardSkills themeChanger={themeChanger}/>
    <Footer themeChanger={themeChanger}/>
    {/* < themeChanger={themeChanger}/> */}


  </div>
}

export default Layouts