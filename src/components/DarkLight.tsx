import light from "../assets/icons/light.svg"
import dark from "../assets/icons/dark.svg"


function DarkLight() {
  return <div className="cicle">
    <div className="light">
      <img className="lightFill"src={light} alt="" />
    </div>
    <div className="dark">
      <img src={dark} alt="" />
    </div>
  </div>
}

export default DarkLight