import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    // 👉 BrowserRouter is in index.js
    <div className="App">
      <h1>Cars 🚗</h1>
      <hr />
      <Link to="/cars">Home</Link> | 
      <Link to="/create">create</Link>  

      <Routes>
        {/* MAIN - ALL CARS */}
        <Route path="/cars" element={<Main/>} />

        {/* CREATE */}
        <Route path="/create" element={<Create/>} />

        {/* SHOW ONE */}
        <Route path="/cars/:id" element={<ViewOne/>} />

        {/* UPDATE */}
        <Route path="/update/:id" element={<Update/>} />

        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/cars" replace/>}/>

      </Routes>
    </div>
  );
}

export default App;
