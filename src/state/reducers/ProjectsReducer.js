import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../constants/ProjectsConstants";

const initialState = {
  colors: ["#f7d050", "#a6e3ed", "#f7d050"],
  Projects: [
    {
      projectId: "dwadwa",
      title: "Physics Project For Today",
      percentage: "55",
      subject: "Physics",
      description: "Simple project deployed for the help of thi",
      dueDate: "12/15/2029",
      count: 0,
    },
    {
      projectId: "llkk",
      title: "Mathematics Project Project For Today",
      percentage: "55",
      subject: "Mathematics",
      description: "Simple project deployed for the help of thi",
      dueDate: "12/15/2020",
      count: 1,
    },
    {
      projectId: "dwwwrrr",
      title: "Mathematics Project Project For Today",
      percentage: "55",
      subject: "Mathematics",
      description: "Simple project deployed for the help of thi",
      dueDate: "12/15/2020",
      count: 1,
    },
  ],
  loading: false,
  erorr: null,
};
export default function ProjectFetch(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
