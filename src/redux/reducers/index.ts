import { IMAGE_DATA_FETCHED, DATA_LOADING, FETCH_MORE, EMPLOYEE_DATA_FETCHED } from "../actions/fetch";
interface Action {
  type: string;
  payload: any;
}
interface State {
  data: any[];
  loading: boolean;
}

const intialState = {
  data: [],
  data1: [],
  loading: false
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case IMAGE_DATA_FETCHED:
      return {
        ...state,
        data: action.payload
      };
    case EMPLOYEE_DATA_FETCHED:
        return {
          ...state,
          data1: action.payload
        };  
    case FETCH_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case DATA_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
