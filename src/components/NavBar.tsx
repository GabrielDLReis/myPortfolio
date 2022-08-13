interface Props {
  aButton : boolean
}

function NavBar({aButton} : Props) {
  return <div> 
    <ul>
      <li><a className={aButton ? "b" : "a"} href=""> About me </a> </li>
      <li><a className={aButton ? "b" : "a"} href=""> Projects </a></li>
      <li><a className={aButton ? "b" : "a"} href=""> Hard skills </a> </li>
      <li><a className={aButton ? "b" : "a"} href=""> Soft skills </a> </li>
      <li><a className={aButton ? "b" : "a"} href=""> Contacts </a> </li>
    </ul>
  </div>

}

export default NavBar