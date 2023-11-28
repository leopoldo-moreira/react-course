import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'


import './App.css';

function App() { 
  const [name, setName] = useState();

  return (
    <div className="App"> 
      <h1>Lift State</h1> 
      <SeuNome setName={setName}/>
      <Saudacao nome={name} idade='3' time='corinthians' />      
    </div>    
  )
}

export default App;
