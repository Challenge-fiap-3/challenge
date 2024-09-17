import logo from '../imgs/logo.png';

export default function Rodape() {
    return (
        <>
            <div className="challenge">
                <footer className="rodape">
                    <div className="overlap-group">
                        <nav>
                            <ul>
                                <li><a href="https://www.portoseguro.com.br" className="porto-link">Site da Porto Seguro</a></li>
                                <li><a href="https://oxigenioaceleradora.com.br" className="oxiace-link">Site da Oxigênio Aceleradora</a></li>
                                <li><a href="https://www.fiap.com.br" className="fiap-link">Site da FIAP</a></li>
                                <li><a href="https://github.com/Carlos-Eduardo-Rabelo" className="giopolub-link">Carlos-Eduardo-Rabelo</a></li>
                                <li><a href="https://github.com/GiovanniSouzaL" className="giovannisouzal-link">Giovanni de Souza Lima</a></li>
                                <li><a href="https://github.com/luketa02496" className="luketa-link">Lucas Abud Berbel</a></li>
                                <li><a href="pages/login.html" className="register">acesse agora</a></li>
                            </ul>
                        </nav>
                        <img src={logo} className="logo-2" alt="imagem da conserta fácil" />
                        <p className="integrantes">INTEGRANTES</p>
                        <p className="links-uteis">LINKS ÚTEIS</p>
                        <p className="conta">CONTA</p>
                        <p className="giovannisouzal-rm">RM:556536</p>
                        <p className="luketa-rm">RM:557957</p>
                        <p className="giopolub-rm">RM:5584470</p>
                        <p className="copyright">©2024 | Conserta Fácil | Todos direitos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}