import './campos.css'


function Campos({type, place}){
    return(
        <input type={type} className="campos-text" placeholder={place} />
    )
}

export default Campos