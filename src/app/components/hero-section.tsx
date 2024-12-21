import Image from "next/image"
import rayyan from "../../../public/rayyan.png"
import Link from "next/link"
import "./hero.css"
const Hero = () => {
    return(
        <div style={{marginTop:100}}>
            <div id="hero-cont">
                <section id="left-cont">
                <h1>Hello, my name is Muhammad Rayyan</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi alias temporibus, minima id, libero sed sint ipsa, magni repellat eius voluptatibus.</p>
                <button id="hero-btn">
                    <Link href="https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/" target="blank">LinkedIn</Link>
                    </button>
                </section>
                <div id="right-cont">
            <Image id="hero-img" src={rayyan} alt="Rayyan Naveed"></Image>
            </div>
            </div>
        </div>
    )
}

export default Hero 
