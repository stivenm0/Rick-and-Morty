import logo from "./img/rick-morty.png";
import { useState } from "react";
import Characters from "./components/Characters.js";

function App() {
  const [characters, setcharacters]= useState(null);

  const reqApi= async ()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character"); //peticion
    const characterApi =  await api.json();  //convirtiendo en json
    setcharacters(characterApi.results)
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ?  (    <Characters characters={characters}  setcharacters={setcharacters}/>   ):
         <>
        <img src={logo} className="img-home" alt="rick y morty"></img>
        <button onClick={reqApi} className="btn-search">Ver Personajes</button>
        </>}
        
     
      </header>
    </div>
  );
}

export default App;
