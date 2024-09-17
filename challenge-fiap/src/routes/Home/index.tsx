// import '../../components/css/index-style.css';
import carro from '../../components/imgs/carro.png';
import fiap from '../../components/imgs/fiap.png';
import oxiace from '../../components/imgs/oxiace.png';
import porto from '../../components/imgs/porto.png';
import robo from '../../components/imgs/robot.png';

export default function Home() {
    return (
        <>
            <div className="challenge">
                <div className="fundo" >
                    <h1 className="titulo-1">Reparação automotiva</h1>
                    <p className="um-assistente">
                        Um assistente virtual para reparação <br />automotiva, oferecendo suporte personalizado<br />no diagnóstico do problema do veículo.
                    </p>
                    <img src={robo} className="robot" alt="Imagem de um robô conversando" />
                </div>
                <nav>
                    <ul>
                        <li><a className="porto" href="https://www.portoseguro.com.br" role="button">
                            <img src={porto} alt="imagem da porto" />
                        </a></li>
                        <li><a className="oxigenio-aceleradora" href="https://www.oxigenioaceleradora.com.br" role="button">
                            <img src={oxiace} alt="imagem da oxigênio aceleradora" />
                        </a></li>
                        <li><a className="fiap" href="https://www.fiap.com.br" role="button">
                            <img src={fiap} alt="imagem da fiap" />
                        </a></li>
                    </ul>
                </nav>
                <img src={carro} alt="Foto de carro" className='carro' />
                <h2 className="titulo-2">Sobre</h2>
                <p className='nosso-objetivo'>
                    Nosso objetivo é oferecer a você uma solução adequada <br />para os problemas do seu veículo. Desde a
                    identificação do <br />problema até a conclusão da manutenção, pode contar <br />conosco para oferecer a você
                    confiança, cuidado e atenção <br />que até hoje nenhuma plataforma fez igual! Você que já é <br />cliente
                    Porto faça seu login ou, se ainda não é, realize já o <br />seu cadastro!
                </p>
            </div>
        </>
    )
}