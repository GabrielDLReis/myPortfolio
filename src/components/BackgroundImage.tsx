import BackgroundJPG from "../assets/img/mediumResolution.jpg"

function BackgroundImage() {

  return <div>
    <img className="background" src={BackgroundJPG} alt="Imagem principal" />
    
    <div className="myProjectsBackground">
      <h2>My Projects</h2>
    </div>
  </div>
}

export default BackgroundImage