import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  
  return (

    <div className="App"> 
     <SayMyName nome='Leopoldo'/>
     <Pessoa
      nome='Leopoldo'
      idade='31'
      profissao='Desenvolvedor'
      foto='https://via.placeholder.com/150'     
     />
    </div>
    
  )
}

export default App;
