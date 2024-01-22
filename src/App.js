import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Table from './Components/Table';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/table' element={<Table />} />
              <Route path='/update/:id' element={<Update />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
