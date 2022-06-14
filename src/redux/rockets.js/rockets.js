import getRocketApi from '../../Api/rocketsApi';

const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spacetravelers/rockets/RESREVE_ROCKETS';

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const data = await getRocketApi();
  const rockets = data.map((rocket) => {
    const {
      id, rocket_name: rocketName, description, flickr_images: flickrImages,
    } = rocket;

    return {
      id,
      rocketName,
      description,
      flickrImages: flickrImages[0] || '',
    };
  });
  dispatch({ type: GET_ROCKETS, rockets });
};

export function reserveRockets(id) {
  return () => ({
    type: RESERVE_ROCKETS,
    id,
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;

      // case RESERVE_ROCKETS:
      //   const newState = state.map((rocket) => {
      //     if (action.id === rocket.id) {
      //       return {
      //         ...rocket,
      //         reserved: !rocket.reserved,
      //       };
      //     }
      //     return rocket;
      //   });
      //   return newState;

    default:
      return state;
  }
};

export default reducer;
