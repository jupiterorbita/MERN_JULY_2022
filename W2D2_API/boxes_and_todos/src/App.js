import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  // main state variable (ARRAY)
  const [boxes, setBoxes] = useState(
    [
      { color: "red", status: true },
      { color: "green", status: false },
      { color: "blue", status: true },
    ]
  )

  // DELETE
  const deleteBox = (idx) => {
    console.log(idx);
    // const filteredBoxes = boxes.filter( (box, i) => {
    //   if (i === idx) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })

    if (window.confirm(`delete ${boxes[idx].color}?`)) {
      const filteredBoxes = boxes.filter((b,i) => i !== idx )
      setBoxes(filteredBoxes)
    }
  }

  // UPDATE
  const updateBox = (idx) => {
    console.log(idx);

    const copyBoxes = [...boxes];
    copyBoxes[idx].status = !copyBoxes[idx].status

    // if (copyBoxes[idx].status === true) {
    //   copyBoxes[idx].status = false
    // } else {
    //   copyBoxes[idx].status = true
    // }
    setBoxes(copyBoxes);
  }

  // CREATE NEW BOX AND ADD TO OUR STATE
  const createBox = (newBoxObj) => {
    console.log(newBoxObj);

    // add this obj to our state
    setBoxes([...boxes, newBoxObj]);

    //  --- alt way ---
    // const copyBoxes = [...boxes];
    // copyBoxes.push(newBoxObj);
    // setBoxes(copyBoxes);

  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>Boxes & Todos 📦</h1>
        {JSON.stringify(boxes)}
        <hr />
        <Form createBox={createBox} />
        {
          boxes.map((box, i) => {
            return (
              <Box
                key={i}
                idx={i}
                box={box}
                deleteBox={deleteBox}
                updateBox={updateBox}
              />
            )
          })
        }
      </div>
    </fieldset>
  );
}

export default App;
