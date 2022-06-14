import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Nav from './components/Nav';
import RocketPage from './pages/Rockets';
import MyProfile from './components/Profile/profile';
import MissionPage from './pages/Missions';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Missions" element={<MissionPage />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
