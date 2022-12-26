import Botao from "../Botao"
import Campos from "../Campos"
import "./telaForms.css"

function TelaForms(){

    const campos1={type: 'text',place: 'Nome'}
    const campos2={type: 'email',place: 'Email'}
    const campos3={type: 'password',place: 'Senha'}
    return(
        <div className="cont-Principal">
           
            <section className="Cont-secundario">
            <h2>Criar Conta</h2>
            <p>Preencha os campos</p>
                <Campos type={campos1.type} place={campos1.place} className="campo"/>
                <Campos type={campos2.type} place={campos2.place}  className="campo"/>
                <Campos type={campos3.type} place={campos3.place}  className="campo"/>
                <Botao/>
            </section>
        </div>
    )

}

export default TelaForms