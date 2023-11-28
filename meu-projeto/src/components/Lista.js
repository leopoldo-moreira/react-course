function Lista({pets}){

    
    return (
        <div>
            {pets.length > 0 ? (
                pets.map((nome,index) => (
                    <p key={index}>Nome: {nome}</p>
                ))) : (
                    <p>Lista Vazia</p>
                )
            }          
        </div>
    )
};

export default Lista