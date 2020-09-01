/**
 * 用一個 非同步 例子說明 redux 透過 axios 與 REST API（Backend1_gradle）的互動
 *          方向  loading  projects        error
 * request --->   true
 * success <---   false   action.payload
 * fail    <---   false                  action.payload
 */

const redux = require("redux");
const createStore = redux.createStore;


//state
const initState = {
  loading: false,
  projects: [],
  error: "",
};

//action
const FETCH_PROJECT_REQUEST = "FETCH_PROJECT_REQUEST";
const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
const FETCH_PROJECT_FIALURE = "FETCH_PROJECT_FIALURE";
//action creator
const fetchProjectRequest = () => {
  return {
    type: FETCH_PROJECT_REQUEST,
  };
};
const fetchProjectSuccess = (projects) => {
  return {
    type: FETCH_PORJECT_SUCCESS,
    payload: projects,
  };
};
const fetchProjectFailure = (error) => {
  return {
    type: FETCH_PROJECT_FIALURE,
    payload: error,
  };
};

//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
        error: "",
      };
    case FETCH_PROJECT_FIALURE:
      return {
        loading: false,
        projects: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer)
console.log("Create a aync API call!")