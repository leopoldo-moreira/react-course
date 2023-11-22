function Form() {

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(e);
    }



    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type='text' placeolder='Digite seu nome'/>                    
                </div>
                <div>
                    <input type='submit' value='cadastrar'/>
                </div>
            </form>
        </>
    )
}

export default Form;