import './App.css';
import Person from "./components/Person";

function App() {

  
  const myArr = [1, 2, 3, 4];
  const copyArr = [...myArr];
  
  // destructuring
  // const {name, favFood, luckyNumber} = person;
  
  const person = {
    name: "bob",
    favFood: "🍝",
    luckyNumber: 7
  }
  // copy object
  const copyPerson = { ...person };

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>hello</h1>
        <p>
          {JSON.stringify(person)}
        </p>
        {/* {person.name}, {person.favFood} */}
        <Person person={person} y={4} />
        <Person person={person} y={4} />
      </div>
    </fieldset>
  );
}

export default App;
