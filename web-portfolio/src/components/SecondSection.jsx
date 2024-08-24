import TitleProjects from "./TitleProjects";
import ProjectsSection from "./ProjectsSection.jsx";
import '../styles/second-section.css';


function SecondSection(){
    return(
        <div className="second-section">
            <TitleProjects/>
            <ProjectsSection/>         
        </div>
    )
}

export default SecondSection;