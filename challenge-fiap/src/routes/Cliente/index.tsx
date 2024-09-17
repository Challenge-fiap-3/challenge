import robo from '../../components/imgs/robot.png'

export default function Cliente() {
    return (
        <>
            <h1 className="titulo-1">Converse com o bot</h1>
            <p className="texto">
                No canto da sua tela vai ter um botão clicando<br />nele vai abrir a conversa com o nosso bot, ele<br />irá
                responder suas perguntas e te ajudar no<br />diagnóstico do carro.
            </p>
            <img src={robo} className="robot" alt="Imagem de um robô conversando" />
        </>
    )
}