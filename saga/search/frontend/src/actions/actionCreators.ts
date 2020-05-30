import {
  CHANGE_SEARCH_FIELD,
  CLEAR_SEARCH_SKILLS,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
} from './actionTypes';

export const searchSkillsRequest = (search: string) => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: { search },
});

export const searchSkillsFailure = (error: string) => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: { error },
});

export const searchSkillsSuccess = (items: Array<any>) => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: { items },
});

export const changeSearchField = (search: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});


export const clearSearchSkills = () => ({
  type: CLEAR_SEARCH_SKILLS,
});
