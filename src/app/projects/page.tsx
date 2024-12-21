import ProjectBox from "../components/project-section";
import pakWheels from "../../../public/pakWheels.png";
import panacloud from "../../../public/panacloud.png";
import resume from "../../../public/resume.png";
import "./projects.css"
const Projects = () => {
    let content = [
        {heading: "Pak Wheels", ImageName: pakWheels, projectDesc: "This is a user-friendly online application for buying and selling cars.",
        link: "https://my-pakwheels-app.vercel.app/"
        },
        {heading: "Panacloud", ImageName: panacloud, projectDesc: "Panacloud is an innovative and user-friendly app designed to empower users with advanced tools and resources for seamless cloud computing and software development.",
        link: "https://company-portfolio-indol.vercel.app/"
        },
        {heading: "Resume Builder", ImageName: resume, projectDesc: "A static resume is a fixed, non-interactive document that presents an individual's skills, experiences, and achievements in a straightforward format, typically as a PDF or printed file.", link: "https://resume-builder-phi-red.vercel.app/"}
    ]

    return(
        <div id="project" style={{marginTop:20, marginBottom:50}}>
                <h1>Projects Change Into CSS</h1>
            <div id="project-div">
                {content.map((item) => (
                    <ProjectBox head={item.heading} image={item.ImageName} desc={item.projectDesc} alt={item.heading} vercel={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;