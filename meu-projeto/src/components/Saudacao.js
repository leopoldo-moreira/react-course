function Saudacao(props){
    const msgSaudacao = (x) => `Ola ${x}, idade: ${props.idade}, time: ${props.time}`;
    return <>{props.nome && <p>{msgSaudacao(props.nome)}</p>}</>
}

export default Saudacao