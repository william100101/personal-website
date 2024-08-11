import portrait from './assets/portrait.jpg'

import './About.css'

function About() {
    return(
        <div> 
            <text></text> {/* SLIDESHOW */}
            <div class="about" >{/* INTRODUCTION */}
                <div> {/* PORTRAIT */}
                        <img src={portrait} class="portrait"/>
                </div> 
                <div class="description">
                        <h2>
                            William Choi
                        </h2>
                        <h3>
                            Software Engineer
                        </h3>
                        <plaintext>
                            Hello there!  
                        </plaintext>
                </div> {/* DESCRIPTION */}
            </div>
        </div>
    )
}

export default About;