import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const inputChange = (e) => {
    setInput(e.target.value);
  }
  

  async function fetchPokemon() {

    const res = await fetch(url + '/' + input.toLowerCase(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    setPokemon(data);
    console.log(data)
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 text-center">
        <h1>Pokédex</h1>
        <hr />
  
        <div className="container">
          <form id="form" onSubmit={(e) => { e.preventDefault(); fetchPokemon(); }}>
          <div className="input-group"></div>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">https://pokeapi.co/api/v2/pokemon/</span>
              <input type="text" id="task-input" className="form-control" placeholder="pikachu" value={input} onChange={inputChange} />
              <div className="input-group-append">
                <button className="btn btn-outline-dark btn-sm" type="submit" style={{ fontSize: '20px' }}>Look Up</button>
              </div>
            </div>
          </form>
        </div>
        
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Height</th>
              <th>Weight</th>
              <th>Abilities</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {pokemon && (
              <tr>
                <td>{pokemon.height}</td>
                <td>{pokemon.weight}</td>
                <td>
                  {pokemon.abilities.map((ability, index) => (
                    <div key={index}>
                      {ability.ability.name}
                    </div>
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
