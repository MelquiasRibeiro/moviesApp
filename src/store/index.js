import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './rootReducers';
import sagas from './sagas/'
import createSaga from 'redux-saga'

const sagaMiddleware = createSaga()

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
    rootReducers,
    compose(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)