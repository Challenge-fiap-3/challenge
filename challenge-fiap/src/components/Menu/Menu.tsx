import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <nav>
            <Link to='/'>Inicio</Link>
            <span> | </span>
            <Link to='/cliente'>Area do Cliente</Link>
        </nav>
    )
}