


export default function Characters(props) {
  const {characters, setcharacters} = props; //recibiendo props
  
  const reset= ()=>{
    setcharacters(null)
  }

  return (
    
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={reset}>volver a home</span>
      <div className="container-characters">
        {characters.map((characters, index) => (
            <div className="character-container" key={index}>          
                <div>
                  <img src={characters.image} alt={characters.name}/>
                </div>

                <div>
                <h3>{characters.name}</h3>
                <h6>
                  {characters.status === "Alive" ? (
                    <>
                    <span className="alive" />
                    Alive
                   </>
                  ):(
                  <>
                    <span className= "dead" />
                    Dead
                  </>
                  )}
                </h6>

                  <p>
                    <span className= "text-grey"> episodios: </span>
                    <span>{characters.episode.length}</span>
                  </p>

                  <p>
                    <span className= "text-grey"> especie: </span>
                    <span>{characters.species}</span>
                  </p>

                </div>               
            </div>
        ))}
      </div>
      <span className="back-home" onClick={reset}>volver a home</span>
    </div>
  )
}
