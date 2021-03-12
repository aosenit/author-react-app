import { Link } from 'react-router-dom'
const notFound = () => {
    return (
        <div>
            <h3>Sorry</h3>
            <h1>PAGE NOT FOUND!</h1>
            <h3>Please go back to Home page</h3>


            <li><Link to='/'>Home</Link></li>
        </div>
    )
}

export default notFound
