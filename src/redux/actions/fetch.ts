import { Dispatch } from "redux";
import { fetchImageService } from "../services/user";
import { fetchEmployeeService } from "../services/employees";
import { number } from "prop-types";

export const EMPLOYEE_DATA_FETCHED = "EMPLOYEE_DATA_FETCHED";
export const IMAGE_DATA_FETCHED = "IMAGE_DATA_FETCHED";
export const DATA_LOADING = "DATA_LOADING";
export const FETCH_MORE = "FETCH_MORE";

export function fetchImageData(page?: number, limit?: number) {
  return (dispatch: Dispatch) => {
    dispatch(loading(true));
    fetchImageService(page, limit)
      .then((res: any) => {
        dispatch(imageDataFetched(res));
        dispatch(loading(false));
      })
      .catch(err => {
        dispatch(loading(false));
      });
  };
}

export function fetchMoreImageData(page?: number, limit?: number) {
  console.log("Fetch More : "+page+" : "+limit)
  return (dispatch: Dispatch) => {
    dispatch(loading(true));
    fetchImageService(page, limit)
      .then((res: any) => {
        dispatch(fetchMore(res));
        dispatch(loading(false));
      })
      .catch(err => {
        dispatch(loading(false));
      });
  };
}

export function fetchEmployeeData() {
  return (dispatch: Dispatch) => {
    dispatch(loading(true));
    fetchEmployeeService()
      .then((res: any) => {
        dispatch(employeeDataFetched(res));
        dispatch(loading(false));
      })
      .catch(err => {
        dispatch(loading(false));
      });
  };
}


const employeeDataFetched = (data: any[]) => ({
  type: EMPLOYEE_DATA_FETCHED,
  payload: data
});


const imageDataFetched = (data: any[]) => ({
  type: IMAGE_DATA_FETCHED,
  payload: data
});


const fetchMore = (data: any[]) => ({
  type: FETCH_MORE,
  payload: data
});

export const loading = (loader: boolean) => ({
  type: DATA_LOADING,
  payload: loader
});
