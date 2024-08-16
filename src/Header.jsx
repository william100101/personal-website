import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div class="header">
            <Link to="/">
                <h2 class="header-item">
                    William Choi
                </h2>
            </Link>
            <div class="header-right">
                <Link to="/projects">
                    <h2 class="header-item">
                        Projects
                    </h2>
                </Link>
                <Link to="/resume">
                    <h2 class="header-item"> 
                        Resume
                    </h2>
                </Link>

            </div>
        </div>
    )
}

export default Header;