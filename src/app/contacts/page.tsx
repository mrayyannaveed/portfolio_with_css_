import "./contact.css"

const Contact = () => {
    return(
        <div>
            <div id="contact-cont" >
            <h1>Contact Us</h1>
            <form id="form">
                <label htmlFor="name">Name: </label>
                <input  type="text" placeholder="Enter Your Name" name="name" id="name" required/>
                <label htmlFor="email">Email: </label>
                <input  type="email" placeholder="Enter Your Email" name="email" id="email" required/>
                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message" rows={4}></textarea>
                <div id="btn-div" className="">
                <button id="form-btn">Send</button>
                </div>
            </form>
            </div>
        </div>
    )
}


export default Contact