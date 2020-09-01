/**
 * 用一個 非同步 例子說明 redux 透過 axios 與 REST API（Backend1_gradle）的互動
 *          方向  loading  projects        error
 * request --->   true
 * success <---   false   action.payload
 * fail    <---   false                  action.payload
 */

const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default; // 使 redux 可處理 async
const axios = require("axios");

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
    type: FETCH_PROJECT_SUCCESS,
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

//async action
const GET_URL = "http://localhost:8080/api/project/all"
const fetchProjects = () => {
    return function (dispatch) {
        dispatch(fetchProjectRequest())

        axios.get(GET_URL)
        .then((response)=> {
            console.log(response.data)
            dispatch(fetchProjectSuccess(response.data))
        })
        .catch((error)=>{
            console.log(error)
            dispatch(fetchProjectFailure(error))
        })
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("Create a aync API call!");
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchProjects()) // 透過雙層dispatch做到非同步呼叫更新store內容