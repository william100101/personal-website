/*
Includes links to GitHub, and LinkedIn
*/
import CarouselItem from 'react-bootstrap/CarouselItem'


import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import './Footer.css'



function Footer() {
    return(
        <div class="footer">
            <plaingtext>© 2024 William C. Choi. All rights reserved.</plaingtext>
            <a target="_blank" href="https://www.linkedin.com/in/willchoi2025/">
                <FaLinkedin class="footer-element"/>
            </a>
            <a target="_blank" href="https://github.com/william100101">
                <FaGithubSquare class="footer-element"/>
            </a>
        </div>
    )
}

export default Footer;