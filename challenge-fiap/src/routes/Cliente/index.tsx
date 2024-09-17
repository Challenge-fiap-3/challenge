import robo from '../../components/imgs/robot.png'
import '../../components/css/cliente-style.css'

export default function Cliente() {
    return (
        <>
            <div className="area-cliente">
                <div className="fundo">
                    <h1 className="titulo-1-cliente">Converse com o bot</h1>
                    <p className="texto-cliente">
                        No canto da sua tela vai ter um botão clicando<br />nele vai abrir a conversa com o nosso bot, ele<br />irá
                        responder suas perguntas e te ajudar no<br />diagnóstico do carro.
                    </p>
                    <img src={robo} alt="Bot" className='robot-cliente'/>
                    </div>
            </div>
        </>
    )
}