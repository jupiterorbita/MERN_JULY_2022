import './App.css';
import SomeClassComponent from "./componets/SomeClassComponent";
import Other from './componets/Other';

function App() {
  console.log("hello");
  const msg = "hello from the function!";

  const person = {
    name: "Avery",
    favFood: "Tuna 🥪"
  }

  const animals = ["tiger", "elephant", "zebra"];

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>{JSON.stringify(person)}</h1>
        <hr/>
        <p>
          {/* {
            animals.map( (animal, aIdx) => {
              return <li key={aIdx}>{aIdx + 1} -  {animal}</li>
            })
          } */}

        </p>
      </div>
      <p>this is cool</p>
      <hr/>
      <SomeClassComponent x={3} msgFromApp={msg}/>
      <Other animals={animals}/>

    </fieldset>
  );
}

export default App;
