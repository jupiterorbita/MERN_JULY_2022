import './App.css';
import Home from './components/Home';
import Hero from './components/Hero';
import Error from './components/Error';
import Form from './components/Form';

import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <Link to={"/"}>/</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/home"}>home</Link>
      <br />
      <Form />
      <hr />
      <Routes>
        <Route path='/home' element={
          <>
            <Home />
          </>
        } />

        <Route path='/hero/:urlVar' element={<Hero />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
