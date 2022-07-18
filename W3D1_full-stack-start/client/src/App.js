import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("")
  const [age, setAge] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log(res.data);
        setPets(res.data.allDaPets);
      })
      .catch(err => {
        console.log(`❌❌❌❌`, err);
      })
  }, [])

  const submitForm = (e) => {
    e.preventDefault();

    const newPet = {
      name,
      species,
      age,
      color
    }
    console.log(newPet);

    axios.post("http://localhost:8000/api/pets", newPet)
      .then(res => {
        console.log("⭐⭐⭐ SUCCESS!!!", res.data);
      })
      .catch(err => {
        console.log(" 🔴🔴🔴🔴 CLIENT ERROR", err);
      })
  }

  return (
    <div className="App">
      <h1>PETS</h1>
      <div>
        {/* pets: {JSON.stringify(pets)} */}
        <p>
          name: {JSON.stringify(name)}<br />
          species: {JSON.stringify(species)}<br />
          age: {JSON.stringify(age)}<br />
          color: {JSON.stringify(color)}<br />
        </p>

        <form onSubmit={submitForm}>
          name: <input onChange={(e) => setName(e.target.value)} value={name} /><br />
          species: <input onChange={(e) => setSpecies(e.target.value)} value={species} /> <br />
          age: <input type="number" onChange={(e) => setAge(e.target.value)} value={age} /> <br />
          color: <input onChange={(e) => setColor(e.target.value)} value={color} /> <br />
          <button>create pet</button>
        </form>
      
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
