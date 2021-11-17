import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { requestMiddleware } from './redux-request';

const composeEnhancers = typeof window !== 'undefined'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;

requestMiddleware.on.fail = (e) => {
  if (e.response) {
    return e.response;
  }
  throw e;
};

const makeStore = (context, initialState, initialStateFromGSPorGSSR) => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(requestMiddleware)),
  initialState,
  initialStateFromGSPorGSSR,
);

export const wrapper = createWrapper(makeStore, { debug: true });
