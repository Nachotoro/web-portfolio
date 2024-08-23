


function ContactMe(){
    return(
        <div className="card-contact">
            <div className="content">
                <div className="card-title">
                    <img src=".\src\assets\arrow_outward_FILL0_wght400_GRAD0_opsz24 3.png" />
                    <h2>Contact me</h2>
                </div>
                <ul>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <li><img src="./src/assets/WhatsApp.svg"/></li>
                    </a>
                    <a href="https://github.com/Nachotoro" target="_blank" rel="noopener noreferrer">
                        <li><img src="./src/assets/github.svg"/></li>
                    </a>
                    <a href="https://www.behance.net/ignacioto" target="_blank" rel="noopener noreferrer">
                        <li><img src="./src/assets/behance-svgrepo-com 1.svg"/></li>
                    </a>
                    <a href="https://www.linkedin.com/in/ignacio-toro-l%C3%B3pez-a84649144/" target="_blank" rel="noopener noreferrer">
                        <li><img src="./src/assets/linkedin.svg"/></li>
                    </a>   
                </ul>
                <div className="mail">
                    <img src=".\src\assets\mail.svg" />
                    <h3>Ignacio.thoro@gmail.com</h3>
                </div>
            </div>
        
        </div>
    )
}

export default ContactMe;