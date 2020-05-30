import {
  call,
  takeLatest,
  put,
  spawn,
  select,
  debounce,
} from 'redux-saga/effects';

import {
  clearSearchSkills,
  searchSkillsRequest,
  searchSkillsFailure,
  searchSkillsSuccess,
} from '../actions/actionCreators';
import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_SUCCESS,
} from '../actions/actionTypes';
import { searchSkills } from '../api';

// Worker
function* handleChangeSearchSaga({ payload }) {
  if (payload.search.trim() !== '') {
    yield put(searchSkillsRequest(payload.search));
  }

  const { items } = yield select(state => state.skills);

  if (payload.search.trim() === '' && items.length > 0) {
    yield put(clearSearchSkills());
  }
}

// Worker
function* handleSearchSkillsSaga({ payload }) {
  try {
    const data = yield call(searchSkills, payload.search);
    yield put(searchSkillsSuccess(data));
  } catch (error) {
    yield put(searchSkillsFailure(error.message));
  }
}

// Worker
function* handleSearchSkillsSuccessSaga({ payload }) {
  const { search } = yield select(state => state.skills);

  if (search.trim() === '' && payload.items.length > 0) {
    yield put(clearSearchSkills());
  }
}

// Watcher
function* watchChangeSearchSaga() {
  yield debounce(100, CHANGE_SEARCH_FIELD, handleChangeSearchSaga);
}

// Watcher
function* watchSearchSkillsSaga() {
  yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

// Watcher
function* watchSearchSkillsSuccessSaga() {
  yield takeLatest(SEARCH_SKILLS_SUCCESS, handleSearchSkillsSuccessSaga);
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
  yield spawn(watchSearchSkillsSuccessSaga);
};
