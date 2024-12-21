import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div style={{marginTop:100}}>
    <footer id="footer">
      <div id="footer-container">
        <div id="footer-section">
          <h2>Contact Us</h2>
          <p>Email: rayyannaveed33@gmail.com</p>
          <p>Phone: +92 312 888 8822</p>
          <p>Address : North Nazimabad, Karachi</p>
        </div>

        <div id="footer-section">
          <h2>Follow Us</h2>
          <div id="social-links">
            <a
              href="https://www.facebook.com/rayyan.naveed.33?mibextid=ZbWKwL"
              target="_blank"
              id="social-icons"
              >Facebook</a
            >
            <a href="https://github.com/dashboard" 
            target="_blank" id="social-icons"
              >Github</a
            >
            <a
              href="https://vercel.com/muhammad-rayyan-naveeds-projects"
              target="_blank" id="social-icons"
              >Vercel</a
            >
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer