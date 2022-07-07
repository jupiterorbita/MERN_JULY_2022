import './App.css';
import Person from "./components/ClassComponent";
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const person = {
    name: "bob",
    favFood: "🍝",
    luckyNumber: 7
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>welcome to functional components!</h1>
        <Person person={person}/>
        <FunctionalComponent person={person}/>
      </div>
    </fieldset>
  );
}

export default App;
