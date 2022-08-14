interface Props {
  themeChanger : boolean
}

function TopContent({themeChanger} : Props) {
  return <div className="container">
    <h1 className={themeChanger ? "borderBlack" : "borderWhite"}>Gabriel Reis</h1>
    <p>Welcome to my portfolio, here you can see<br/> my projects, my skills and a little about me.</p>
  </div>
}

export default TopContent