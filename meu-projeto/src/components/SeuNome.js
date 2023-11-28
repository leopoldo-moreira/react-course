function SeuNome({setName}){

    const nameState = (e) => (
        setName(e.target.value)
    )

    return(    
        <div>
            <input type='text' placeholder="Digite seu nome" onChange={nameState}></input>
        </div>
    )
}

export default SeuNome;