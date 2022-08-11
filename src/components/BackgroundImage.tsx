import BackgroundJPG from "../assets/img/mediumResolution.jpg"

function BackgroundImage() {

  return <div>
    <img className="background" src={BackgroundJPG} alt="Imagem principal" />
    
  </div>
}

export default BackgroundImage