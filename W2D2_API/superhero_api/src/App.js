import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // anything dynamic needs STATE
  const [heroes, setHeroes] = useState([])

  // -- useEffect
  // TRIGGERS A F T E R the component has finished loading!
  useEffect(() => {
    // const axiosHeroes = () => {
    //   axios.get("https://akabab.github.io/superhero-api/api/all.json")
    //     .then(someRes => {
    //       // AXIOS WRAPS EVERYTHING IN A .data key
    //       console.log(someRes.data);
    //       setHeroes(someRes.data)
    //     })
    //     .catch(err => console.log(err))
    // }
    axiosHeroes();
  }, []) // never put a state var that is getting changed



  // vanilla JS fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        console.log(response);
        return response.json();
      }).then(response => {
        console.log(response);
        setHeroes(response)
      }).catch(err => {
        console.log(err);
      });
  }

  // axios
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(someRes => {
        // AXIOS WRAPS OUT "DATA" in the .data key <---- !!!!!!
        // always log the response.data before setting it to state
        console.log(someRes.data);
        setHeroes(someRes.data)
      })
      .catch(err => console.log(err))
  }
  // NEVER CALL A FUNCTION THAT CHANGES A STATE VAR outside of useEffect
  // axiosHeroes();

  return (
    <div className="App">
      <h1>🦸‍♀️🦸‍♀️ SuperHeroes 🦹‍♀️🦹‍♂️</h1>
      <h4>fetch / Axios / useEffect()</h4>

      <hr />
      <div>
        {/* {JSON.stringify(heroes)} */}
      </div>
      <button onClick={fetchHeroes}>fetch heroes</button> |
      <button onClick={axiosHeroes}>axios heroes</button>

      <hr />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero name</th>
            <th>Full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, idx) => {
              return (
                <tr key={hero.id}>
                  <td> <img src={hero.images.md} alt={hero.name} width="70px" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
