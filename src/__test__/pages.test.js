import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets/Rocket';
import Missions from '../components/Missions/Missions';
import Profile from '../components/profile/profile';

describe('Testing if all space travelers pages renders correctly', () => {
  test('Testing the Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Testing the Missions page', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Testing Profile page', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
