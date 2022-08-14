interface Props {
  themeChanger : boolean
}

function Footer({themeChanger} : Props) {
  return <footer className={themeChanger ? "footerOff" : "footerOn" }></footer>
}

export default Footer