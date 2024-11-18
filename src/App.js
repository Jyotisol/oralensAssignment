import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Dashboard />} />
        <Route path='/mainpage' element={<Mainpage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
