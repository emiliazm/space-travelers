import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

function RocketsList() {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      <ul className="rockets-ul-container">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages}
          />
        ))}
      </ul>
    </div>
  );
}

export default RocketsList;
