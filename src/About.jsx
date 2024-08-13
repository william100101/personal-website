import './About.css'
import Carousel from 'react-bootstrap/Carousel'


import Content from './Content.jsx'
/*
POTENTIAL IMAGES FOR SLIDESHOW 
    graduation from highschool
    picture of me at university
    picture of me going to carpenter
*/
function About(){
    return(
        <div>
            <Carousel />
            <Content
                portrait={portrait}
                name="Wiliam Choi"
                title="Software Engineer"
                description=" Hello there! My name is William Choi, an aspiring software engineer currently a senior at Bucknell University pursuing a Bachelor's of Science in Computer Science. 
                I grew up in Lancaster, PA being raised by a family of Chinese immigrants and came to loveany work related to computing and programming after realizing how the field encapsulted the creativity of the arts and the technicality of traditional engineering. 
                In my free time, I often enjoy reading, and playing the saxophone for my university's Jazz Band."
            />
        </div>
    )
}

export default About;