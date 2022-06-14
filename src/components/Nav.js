import { Link } from 'react-router-dom';
import planetColors from '../images/planetColors.png';

function Nav() {
  return (
    <nav>
      <img className="nav-logo" src={planetColors} alt="logo" />
      <h1 className="nav-h1">Space Travelers Hub</h1>
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
