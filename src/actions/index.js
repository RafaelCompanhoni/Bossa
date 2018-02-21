import * as actionTypes from './types';

export function createTestAction() {
  return (dispatch) => {
    dispatch({ type: actionTypes.INITIAL });
  };
}

export function createTestAction2() {
  return (dispatch) => {
    dispatch({ type: actionTypes.INITIAL2 });
  };
}
