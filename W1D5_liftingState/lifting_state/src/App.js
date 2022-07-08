import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState} from 'react'

function App() {

  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"]);

  const [people, setPeople] = useState([
    {
      name: "Toad",
      age: 30
    },
    {
      name: "Mario",
      age: 35
    },
    {
      name: "Luigi",
      age: 33
    },
    {
      name: "Princess Peach",
      age: 30
    }
  ])

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson])
    
  }
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
      {JSON.stringify(people)}
      <div className="App">
        <h1>lifting state</h1>
        <hr />
        <Form 
          addAnimal={addAnimal} 
          animals={animals} 
          setAnimals={setAnimals}
          addPerson={addPerson}
        />
        {/* <Display animals={animals}/> */}
        <Display people={people}/>
      </div>
    </fieldset>
  );
}

export default App;
