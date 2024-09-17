import { Link } from 'react-router-dom';


import logo from '../imgs/logo.png';

export default function Cabecalho() {
    return (
        <>
            <div className="challenge">
                <div className="cabecalho">
                    <nav>
                        <img src={logo} alt="Logo do site" className='logo-1' />
                        <Link to='/'>
                            <button className='login-button'>Inicio</button>
                        </Link>

                        <Link to='/cliente'>
                            <button className='login-button'>Area do Cliente</button>
                        </Link>

                    </nav>


                </div>
            </div>
        </>
    )
}

