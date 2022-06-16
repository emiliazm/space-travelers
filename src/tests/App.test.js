import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import MissionPage from '../pages/Missions';
import ProfilePage from '../pages/Profile';
import RocketsPage from '../pages/Rockets';
import missionsReducer from '../redux/missions/missionsReducer';
import rocketsReducer from '../redux/rockets.js/rockets';

const setupStore = (reserved) => {
  const preloadedState = {
    rockets: [
      {
        id: 1,
        rocketName: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickrImages: 'https://imgur.com/DaCfMsj.jpg',
        reserved,
      },
    ],
    missions: [
      {
        missionId: 1,
        missionName: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved,
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      rockets: rocketsReducer,
      missions: missionsReducer,
    },
  });
};

describe('Test the App components', () => {
  it('renders the App correctly', () => {
    const store = setupStore(false);
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('renders the Rockets page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('renders the Missions page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('renders the MyProfile page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('shows the Rockets page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    fireEvent.click(screen.getByText('Rockets'));
    expect(container.getElementsByClassName('rockets-container')).toHaveLength(1);
  });

  it('shows the Missions page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    expect(container.getElementsByClassName('container')).toHaveLength(2);
  });

  it('shows the MyProfile page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('My profile'));
    expect(container.getElementsByClassName('missions')).toHaveLength(1);
  });

  // test rockets components

  it('shows the button changes from "Reserve Rocket" to "Cancel Reservation" on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <RocketsPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Reserve Rocket'));
    expect(screen.queryByText('Cancel Reservation')).toBeTruthy();
  });

  it('shows the reserved badge on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <RocketsPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Reserve Rocket'));
    expect(screen.queryByText('Reserved')).toBeTruthy();
  });

  it('shows the button changes from "Cancel Reservation" to "Reserve Rocket" on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <RocketsPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Cancel Reservation'));
    expect(screen.queryByText('Reserve Rocket')).toBeTruthy();
  });

  it('hides the reserved badge on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <RocketsPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Cancel Reservation'));
    expect(screen.queryByText('Reserved')).toBeFalsy();
  });

  // test missions components
  it('shows the button changes from "Join Mission" to "Leave Mission" on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <MissionPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Join Mission'));
    expect(screen.queryByText('Leave Mission')).toBeTruthy();
  });

  it('shows the ACTIVE MEMBER badge on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <MissionPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Join Mission'));
    expect(screen.queryByText('ACTIVE MEMBER')).toBeTruthy();
  });

  it('shows the button changes from "Leave Mission" to "Join Mission" on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <MissionPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Leave Mission'));
    expect(screen.queryByText('Join Mission')).toBeTruthy();
  });

  it('hides the ACTIVE MEMBER badge on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <MissionPage url="/" />
      </Provider>,
    );

    fireEvent.click(screen.queryByText('Leave Mission'));
    expect(screen.queryByText('ACTIVE MEMBER')).toBeFalsy();
  });
});
