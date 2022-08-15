import  BackgroundLowRes  from "../assets/img/lowResolution.jpg"
import BackgroundImage from "./BackgroundImage"

interface Props {
  themeChanger : boolean
  title : string
  text : string
  imageProject : string
}

function MyProjects ({imageProject, text, title, themeChanger} : Props) {
  return <div >
    <div className="projectsTitle">
      <h2>My projects</h2>
      <p> All these projects are my own</p>
    </div>
    
    <div className="containerImages">
      <div className="grid">
        <div className={themeChanger ? "black" : "white"}>
          <img src={imageProject} alt="Meu projeto 1" />
          
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className={themeChanger ? "black" : "white"}>
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 3" />
          <h4>Projeto 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur error molestias consectetur quam est beatae.</p>
        </div>
        <div className={themeChanger ? "black" : "white"}>
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 4" />
          <h4>Projeto 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur error molestias consectetur quam est beatae.</p>
        </div>
        <div className={themeChanger ? "black" : "white"}>
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 5" />
          <h4>Projeto 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur error molestias consectetur quam est beatae.</p>
        </div>
        <div className={themeChanger ? "black" : "white"}>
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 6" />
          <h4>Projeto 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur error molestias consectetur quam est beatae.</p>

          
        </div>
      </div>
    </div>
  </div>
}

export default MyProjects