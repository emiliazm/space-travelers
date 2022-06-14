import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { reserveRockets } from '../../redux/rockets.js/rockets';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages,
  } = props;

  const dispatch = useDispatch();

  const reserveHandler = () => { dispatch(reserveRockets(id)); };

  return (
    <li className="rocket-container" id={id}>
      <div>
        <img src={flickrImages} alt="logo" />
      </div>
      <div>
        <h2>{rocketName}</h2>
        <p>{description}</p>
        <button id={id} type="button" onClick={reserveHandler}>Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default Rocket;
