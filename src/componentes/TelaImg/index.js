import './telaImg.css'
import icon from '../../img/seta.svg'

function TelaImg(){
    return(
        <div className="container">
            <section className="cont-sub">
                <h2>Bem vindo de volta!</h2>
                <p>Para se manter conectado conosco por favor logar com sua conta pessoal</p>
                <a href="#" className="btn">Conectar-se</a>
                <a className="cad-link" href="#">Cadastra-se</a>
                <img className="icon " src={icon} alt="" />
                <i src={icon} class="icon"></i>
                <i src={icon} class="icon"></i>
            </section>

        </div>

    );
}

export default TelaImg