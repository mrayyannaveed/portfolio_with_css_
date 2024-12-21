import Image from "next/image"
import "./project.css"
import Link from "next/link"
function ProjectBox(props:any){
    return(
        <div style={{marginTop:20}}>
            <section id="project-cont">
                <div id="project-left">
                <h1>{props.head}</h1>
                <p>{props.desc}</p>
                </div>
                <div id="project-right">
                    <Link href={props.vercel} target="_blank">
                        <Image id="project-img"  src={props.image} alt={props.alt} width={500} height={500}></Image>
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default ProjectBox