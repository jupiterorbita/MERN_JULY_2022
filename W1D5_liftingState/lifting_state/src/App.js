import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState} from 'react'

function App() {

  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"]);

  const addAnimal = (newAnimal) => {
    console.log("hello " + newAnimal);
    // to append something to our state
    // 1. copy the array -
    const copyAnimals = [...animals];

    // push
    copyAnimals.push(newAnimal);

    // set the new array as the new state
    setAnimals(copyAnimals);

    // setAnimals([...animals, newAnimal])
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      {JSON.stringify(animals)}
      <div className="App">
        <h1>lifting state</h1>
        <hr />
        <Form addAnimal={addAnimal} animals={animals} setAnimals={setAnimals}/>
        <Display animals={animals}/>
      </div>
    </fieldset>
  );
}

export default App;
