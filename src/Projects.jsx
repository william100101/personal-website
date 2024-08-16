import './Projects.css'
import Content from './Content.jsx'

//add github links for everything

function Projects(){
    return(
        <div>
            <Content 
                name="Manufacturing Execution System Message Hub"
                title=""
                description="During the summer of my junior year I interned at Carpenter Technology, a company headquartered in Reading, Pennsylvania that made specialized steel for industries like defense and aviation
                I was tasked with independently making a web application that could track and resend messages coming to and from a SQL database housing correspondence messages betweenMicrosoft's Biztalk and a local mainframe. 
                The frontend for this application was made using Microsoft's Blazor framework and its backend used C# and Entity Frameworks to handle interactions between my program's business logic and SQL
                "
                />
             <Content 
                name="ColorClarifer" 
                title=""
                description="During the summer of my sophmore year I participated in AccessHack 2022 as ran by Northerneastern University. 
                This week long Hackathon challenged participants to develop a piece of technology that would enable people with disabilities to better use technology.
                Taking 2nd place, I worked as a pair with another student from Bucknell to create a Google Chrome extension that could change the hue and contrast of a page to help those with different types of color blindness.
                This application was develope using vanilla Javascript."/>
            <Content 
                name="This website!" 
                title=""
                description="I made this website at the beginning of my senior year to begin cataloguing my software engineering portfolio and gain practical experience utilizing React and its APIs.
                If you've read this far, thanks!"/>
        </div>
    )
}

export default Projects;