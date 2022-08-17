import  BackgroundLowRes  from "../assets/img/lowResolution.jpg"
import BackgroundImage from "./BackgroundImage"
import "../styles/myprojects.css"

interface Props {
  themeChanger : boolean
  title : string
  text : string
  imageProject : string
}

function MyProjects ({imageProject, text, title, themeChanger} : Props) {
  
  return <div className="gridTest">
    
    
    <div className="containerImages">
      <div className="grid">
        <div className={themeChanger ? "black" : "white"}>
          <img src={imageProject} alt="Meu projeto 1" className="imageProject" />
          <h4 className="titleOfProjects">{title}</h4>
          <p className="textOfProject">{text}</p>
        </div>
      </div>
    </div>
  </div>
}

export default MyProjects