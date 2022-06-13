import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Nav from './components/Nav';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/Missions" element={<Missions />} />
        <Route path="/myProfile" element={<miPorfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
