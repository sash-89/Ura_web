import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import reducer from './reducer';

const rootReducer = combineReducers({
  reducer,
});

export default function (state, action) {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    // if (!_.isEmpty(state.reducer.aboutUsId)) {
    //   nextState.reducer.aboutUsId = state.reducer.aboutUsId;
    // } else if (!_.isEmpty(state.reducer.aboutUs)) {
    //   nextState.reducer.aboutUs = state.reducer.aboutUs;
    // } else if (!_.isEmpty(state.reducer.ourWorks)) {
    //   nextState.reducer.ourWorks = state.reducer.ourWorks;
    // }
    return rootReducer(nextState, action);
  }
  return rootReducer(state, action);
}
