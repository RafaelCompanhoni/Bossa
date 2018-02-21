import { INITIAL, INITIAL2 } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIAL: {
      return 'This is just some initial state';
    }

    case INITIAL2: {
      return 'This is just another initial state';
    }

    default:
      return state;
  }
};
