import {
  call,
  put,
  spawn,
  takeEvery,
} from 'redux-saga/effects';

import * as apiServices from '../../api/services';
import {
  fetchServicesRequest,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsRequest,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from './actions';
import { FETCH_SERVICES, FETCH_SERVICE_DETAILS } from './types';

function* handleFetchServicesSaga() {
  try {
    yield put(fetchServicesRequest());
    const services = yield call(apiServices.fetchServices);
    yield put(fetchServicesSuccess(services));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

function* watchFetchServicesSaga() {
  yield takeEvery(FETCH_SERVICES, handleFetchServicesSaga);
}

function* handleFetchServiceDetailsSaga({ payload }) {
  try {
    yield put(fetchServiceDetailsRequest());
    const services = yield call(apiServices.fetchServiceDetails, payload.id);
    yield put(fetchServiceDetailsSuccess(services));
  } catch (error) {
    yield put(fetchServiceDetailsFailure(error.message));
  }
}

function* watchFetchServiceDetailsSaga() {
  yield takeEvery(FETCH_SERVICE_DETAILS, handleFetchServiceDetailsSaga);
}

export default function* rootSagа() {
  yield spawn(watchFetchServicesSaga);
  yield spawn(watchFetchServiceDetailsSaga);
}
