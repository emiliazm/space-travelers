import { Link } from 'react-router-dom';
import planetColors from '../images/planetColors.png';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className="logo-conatiner">
        <img className="nav-logo" src={planetColors} alt="logo" />
        <h1 className="nav-h1">Space Travelers Hub</h1>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">
            Rockest
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/missions">
            Missions
          </Link>
        </li>
        <span>|</span>
        <li className="nav-li">
          <Link to="/myProfile">
            My profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
