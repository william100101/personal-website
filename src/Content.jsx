import './Content.css'

function Content({portrait, name, title, description}) {
    return(
        <div> 
            <div class="about" >{/* INTRODUCTION */}
                <div> {/* PORTRAIT */}
                        <img src={portrait} class="portrait"/>
                </div> 
                <div class="description"> {/* DESCRIPTION */}
                        <h1>
                            {name}
                        </h1>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {description}
                        </p>
                </div> 
            </div>
        </div>
    )
}

export default Content;