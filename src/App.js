import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [starWarsData,setStarWarsData]=React.useState({})
  const [count,setCount]=React.useState(1)
  React.useEffect(function(){
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res =>res.json())
    .then(data=>setStarWarsData(data))
  },[count])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Get Next Character</button>
    </div>
  );
}

export default App;
