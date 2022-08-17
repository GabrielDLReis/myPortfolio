import "../styles/myTestProjects.css"


import MyProjects from "./MyProjects";

interface Props {
  themeChanger : boolean
  backgroundLow : string
}

function MyTestProjects({themeChanger, backgroundLow} : Props) {
  return <div className='newGrid'>
    
    <MyProjects 
    themeChanger={themeChanger} 
    title={"Teste"} 
    imageProject={backgroundLow} 
    text={"Testando texto"}/>
    <MyProjects 
    themeChanger={themeChanger} 
    title={"Teste 3"} 
    imageProject={backgroundLow} 
    text={"Testando texto"}/>
    <MyProjects 
    themeChanger={themeChanger} 
    title={"Teste 3"} 
    imageProject={backgroundLow} 
    text={"Testando texto"}/>
    
  </div>

}

export default MyTestProjects