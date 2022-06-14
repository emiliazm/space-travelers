import { useSelector } from 'react-redux/es/exports';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  if (bookedRockets.length !== 0) {
    return (
      <div>
        {bookedRockets.map((rocket) => (
          <ul key={rocket.id}>
            <li>{rocket.rocketName}</li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      <p>Your booked Rockets will appear here</p>
    </div>
  );
}
