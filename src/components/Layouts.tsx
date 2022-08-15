import "../styles/footer.css"
import '../styles/background.css'
import '../styles/topcontent.css'
import '../styles/navbar.css'
import '../styles/myprojects.css'
import "../styles/hardskills.css"

import NavBar from './NavBar'
import TopContent from './TopContent'
import BackgroundImage from './BackgroundImage'
import MyProjects from './MyProjects'
import HardSkills from "./HardSkills"
import Footer from "./Footer"


interface Props {
  themeChanger : boolean
}

function Layouts({themeChanger} : Props) {
  return <div>
    <NavBar aButton={themeChanger}/>
    <TopContent themeChanger={themeChanger}/>
    <BackgroundImage />
    <MyProjects themeChanger={themeChanger}/>
    <HardSkills themeChanger={themeChanger}/>
    <Footer themeChanger={themeChanger}/>
    {/* < themeChanger={themeChanger}/> */}


  </div>
}

export default Layouts