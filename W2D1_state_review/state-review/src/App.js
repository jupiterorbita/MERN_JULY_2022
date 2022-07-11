import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  //     getter    setter
  const [things, setThings] = useState([
    {color: "red"},
    {color: "green"},
    {color: "blue"},
  ])

  const addColorToThings = (color) => {
    console.log("hello ", color);
    // create a copy of state
    // bc state is immutable
    // // const [copythings] = [things]
    // const copythings = [...things];
    // // add to mutable array
    // copythings.push(color);
    // console.log(copythings);
    // // set the new state 
    // setThings(copythings);

    setThings([...things, color])


  }


  return (
    <div className="App">
      <h1>lifting state review</h1>
      <p>
        app.js state: {JSON.stringify(things)}
      </p>
      <Form things={things} setThings={setThings} addColorToThings={addColorToThings} />
      <Display things={things} />
    </div>
  );
}

export default App;
