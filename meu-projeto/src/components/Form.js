import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Username: ${name}, password: ${password}`);        
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    
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
                        onChange={(e) => setName(e.target.value)}                       
                    />                    
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
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