import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../constants/ProjectsConstants";

export const FetchingProjectsBegin = () => ({
  type: FETCH_BEGIN,
});

export const fetchProductsSuccess = (projects) => ({
  type: FETCH_SUCCESS,
  payload: { projects },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: { error },
});
