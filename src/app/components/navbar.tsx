// "use client"
import Link from "next/link";
import "./navbar.css"
const Navbar = () => {
    return(
        <div id="nav-cont" style={{marginBottom:50}}>
            <nav id="nav">
                <p id="left-cont" className="lg:text-lg">Muhammad Rayyan Naveed</p>
                <ul id="right-cont">
                    <li><Link href="/">Home</Link></li>         
                    <li><Link href="/about">About</Link></li>         
                    <li><Link href="/projects">Projects</Link></li>        
                    <li><Link href="/contacts">Contacts</Link></li>         
                </ul>
            </nav>
        </div>
    )
    
}

export default Navbar;
