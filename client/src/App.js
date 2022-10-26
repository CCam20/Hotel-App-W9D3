import './App.css';
import GuestsContainer from './container/GuestsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <GuestsContainer />
    </div>
  );
}

export default App;
