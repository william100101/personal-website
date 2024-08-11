import portrait from './assets/portrait.jpg'

import './About.css'

function About() {
    return(
        <div class=""> 
            <text></text> {/* SLIDESHOW */}
            <div> {/* INTRODUCTION */}
                <div> {/* PORTRAIT */}
                        <img src={portrait}/>
                </div> 
                <div>
                        <h2>
                            William Choi
                        </h2>
                        <h3>
                            Softwarre Engineer
                        </h3>
                </div> {/* DESCRIPTION */}
            </div>
        </div>
    )
}

export default About;