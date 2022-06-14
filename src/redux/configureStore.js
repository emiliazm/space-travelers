import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets.js/rockets';
import missionsReducer from './missions/missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: [thunk],
});

export default store;
