

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
                    <label htmlFor='name'>Nome:</label>
                    <input 
                        type='text'
                        id='name' 
                        name='name' 
                        placeholder='Digite seu nome'
                    />                    
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Digite sua senha'
                     />
                </div>
                <div>
                    <input type='submit' value='cadastrar'/>
                </div>
            </form>
        </>
    )
}

export default Form;