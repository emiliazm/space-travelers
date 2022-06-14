import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { cancelRockets, reserveRockets } from '../../redux/rockets.js/rockets';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveHandler = () => { dispatch(reserveRockets(id)); };
  const cancelHandler = () => { dispatch(cancelRockets(id)); };

  return (
    <li className="rocket-container" id={id}>
      <div>
        <img src={flickrImages} alt="logo" />
      </div>
      <div>
        <h2>{rocketName}</h2>
        <div>
          {reserved && (<span>Reserved</span>)}
          {description}
        </div>
      </div>
      <div>
        {reserved && (
          <button onClick={() => { cancelHandler(); }} className="rocket-cancel" type="button">Cancel Reservation</button>
        )}
        {!reserved && (
          <button onClick={() => { reserveHandler(); }} className="rocket-reserve" type="button">Reserve Rocket</button>
        )}
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
