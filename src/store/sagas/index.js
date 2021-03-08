
import { api } from '../../services/api'
import { put, call, takeLatest, all } from 'redux-saga/effects'
import { Types } from '../ducks/movies';


function* loadCharsSaga(action) {
    const jsonResponse = yield call(api.get,`trending/${action.payload.midia}/week?api_key=8d05659f30182cd2011ad0dd54e9f430&language=pt-BR`)
    yield put({ type: Types.SET_MIDIA, payload:  jsonResponse.data.results})
}

export default function* rootSaga() {
    yield all([ 
        takeLatest(Types.LOAD_DATA_SAGA, loadCharsSaga)
    ])
}


