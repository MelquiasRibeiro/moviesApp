import { combineReducers } from 'redux';

import favorites from './ducks/favorites';
import movies from './ducks/movies';


export default combineReducers({
    favorites,
    movies,
});