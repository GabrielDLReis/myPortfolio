import  BackgroundLowRes  from "../assets/img/lowResolution.jpg"

function MyProjects () {
  return <div >
    <div className="projectsTitle">
      <h2>Meus projetos</h2>
      <p> Aqui vocês poderão ver os projetos realizados por mim</p>
    </div>

    <div className="containerImages">
      <div className="grid">
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 1" />
        </div>
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 2" />
        </div>
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 3" />
        </div>
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 4" />
        </div>
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 5" />
        </div>
        <div className="backFromImg">
          <img className="imageProjects" src={BackgroundLowRes} alt="Meu projeto 6" />
        </div>
      </div>
    </div>
  </div>
}

export default MyProjects