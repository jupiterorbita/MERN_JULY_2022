import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pets, setPets] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:8000/api/pets")
      .then( res => {
        console.log(res.data);
        setPets(res.data.allDaPets);
      })
      .catch( err => {
        console.log(`❌❌❌❌`, err);
      })
  }, [])

  return (
    <div className="App">
      <h1>PETS</h1>
      <div>
        pets: {JSON.stringify(pets)}
      </div>
      <hr />
      {
        pets.map(pet => {
          return (
            <div key={pet._id}>
              name: {pet.name} <br />
              species: {pet.species} <br />
              age: {pet.age} <br />
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
