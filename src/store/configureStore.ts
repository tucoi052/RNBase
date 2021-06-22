import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from './configureAction';


const AllReducers = {
};
const AppState: ApplicationState = {
};
const rootReducers = combineReducers({ ...AllReducers });
const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducers, AppState, middlewares);

export default store;
