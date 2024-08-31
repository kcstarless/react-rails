// Posts show link and create new post link are in NavBar component
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <nav>
            <Link to="/">Posts list</Link>
            { " | " }            
            <Link to="/new">Create New Post</Link>
        </nav>
    )
}

export default NavBar