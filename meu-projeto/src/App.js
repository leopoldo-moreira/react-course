import './App.css';
import Lista from './components/Lista'


function App() { 

  const pets = ['Tony','Bruce','Nick']

  return (
    <div className="App"> 
      <h1>Renderização de Listas</h1> 
      <Lista pets={pets}/>   
      <Lista pets={[]}/>        
    </div>    
  )
}

export default App;
