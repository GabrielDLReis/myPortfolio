

interface Props {
  themeChanger : boolean
}

function HardSkills({themeChanger} : Props) {
  return <div>
    <h2 className={themeChanger ? "hardSkillsOff" : "hardSkillsOn"}>Hard Skills</h2>

    <img src="" alt="teste" />
    <h4>Javascript</h4>

  </div>
}

export default HardSkills