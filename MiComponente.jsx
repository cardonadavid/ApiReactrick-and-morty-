import { useEffect, useState } from "react";
import "../assets/css/MiComponente.css";

const MiComponente = () => {
    const [personajes , setPersonajes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {
        const fetchCharacters = async () => {
            let response = await fetch('https://rickandmortyapi.com/api/character');
            let resultado = await response.json();
            setPersonajes(resultado.results);
        };
        fetchCharacters();
    }, []);

    const filteredPersonajes = personajes.filter(personaje =>
        personaje.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        personaje.status.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        personaje.species.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return (
        <div className="container" >
        <input  type="text" placeholder="Busca Personajes por su nombre, especie o su estado" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            {filteredPersonajes.map(personaje => (
              <div key={personaje.id} className="card">
                <img src={personaje.image} alt={personaje.name} />
                <div className="card--info">
                  <h3>{personaje.name} </h3>
                  <p>{personaje.species}</p>
                  <p>{personaje.status}</p>
                </div>
              </div>
            ))}
        </div>
      
    )
}

export default MiComponente;