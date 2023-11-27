import {useState} from 'react'

function Condicional (){

    const [email, setEmail] = useState();
    const [userEmail,setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
        document.getElementById('emailField').value = '';

    }    

    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input 
                    id='emailField'
                    type='email'
                    placeholder='Digite seu email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                    type='submit' 
                    onClick={enviarEmail}>
                    Cadastrar
                </button>

                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={() => {
                            setUserEmail('')
                            setEmail('')
                            }}>
                        Limpar
                        </button>
                    </div>
                )}
                
            </form>
            
        </div>
    )
}

export default Condicional