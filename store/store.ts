import { createStore } from 'redux';
import rootReducers from './reducers/root-reducers';

const store = createStore(rootReducers);

export default store;
