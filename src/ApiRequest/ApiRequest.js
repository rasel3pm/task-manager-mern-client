import axios from "axios";
import { SuccessToast, errorToast } from "../helper/FormValidation";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/slice/settings/settingsSlice";
import { getToken, setToken, setUserDetails } from "../helper/appHelper";
import {
  canceledTask,
  completedTask,
  newTask,
  progressTask,
} from "../redux/slice/taskSlice/taskSlice";
import { SetSummary } from "../redux/slice/summary/summarySlice";
let baseURL = "http://localhost:5000/api/v1";
let axiosHeader = { headers: { token: getToken() } };
export function createTask(title, description) {
  let url = baseURL + "/CreateTask";
  let data = {
    title: title,
    description: description,
    status: "New",
  };

  return axios
    .post(url, data, axiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Task Create Success");
        return true;
      }
    })
    .catch((e) => {
      errorToast("Something went wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
export function LoginRequest(email, password) {
  let URL = baseURL + "/login";
  let PostBody = { email: email, password: password };
  return axios
    .post(URL, PostBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        console.log(res.data["token"]);
        setUserDetails(res.data.user[0]);
        SuccessToast("Login Success");
        return true;
      }
      if (res.status === 401) {
        errorToast("Invalid email or password");
        return false;
      }
    })
    .catch((err) => {
      errorToast("Something went wrong !");
      store.dispatch(HideLoader());
      return false;
    });
}
export function registerRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(ShowLoader());
  let url = baseURL + "/registration";
  let data = {
    email,
    firstName,
    lastName,
    mobile,
    password,
    photo,
  };
  return axios
    .post(url, data)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          if (res.data.keyPattern && res.data.keyPattern.email === 1) {
            errorToast("Email Already Exist");
            return false;
          } else {
            errorToast("Something Went Wrong");
            return false;
          }
        } else {
          SuccessToast("Registration Success");
          return true;
        }
      } else {
        errorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      store.dispatch(HideLoader());
      errorToast("Email Already Exist!");
      return false;
    });
}
export function taskListByStatus(status) {
  try {
    store.dispatch(ShowLoader());
    let url = baseURL + "/ListTaskByStatus/" + status;
    return axios.get(url, axiosHeader).then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (status === "New") {
          store.dispatch(newTask(res.data["data"]));
        } else if (status === "Completed") {
          store.dispatch(completedTask(res.data["data"]));
        } else if (status === "Canceled") {
          store.dispatch(canceledTask(res.data["data"]));
        } else if (status === "Progress") {
          store.dispatch(progressTask(res.data["data"]));
        } else {
          errorToast("Something went wrong");
        }
      }
    });
  } catch (error) {
    errorToast("Something went wrong");
    store.dispatch(HideLoader());
    return false;
  }
}
export function deleteTaskById(_id) {
  try {
    store.dispatch(ShowLoader());
    let url = baseURL + "/DeleteTask/" + _id;
    return axios.get(url, axiosHeader).then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Task deleted");
        return true;
      } else if (res.status === 401 || res.status === 500) {
        errorToast(
          "Unauthorized: You do not have permission to delete this task."
        );
        return false;
      } else {
        errorToast("Something went wrong");
        return false;
      }
    });
  } catch (error) {
    errorToast("Something went wrong");
    store.dispatch(HideLoader());
    return false;
  }
}
export function SummaryRequest() {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/taskStatusCount";
  axios
    .get(URL, axiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetSummary(res.data["data"]));
      } else {
        errorToast("Something Went Wrong");
      }
    })
    .catch((err) => {
      errorToast("Something Went Wrong");
      store.dispatch(HideLoader());
    });
}
export function UpdateStatusRequest(id, status) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/UpdateTask/" + id + "/" + status;
  return axios
    .get(URL, axiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Status Updated");
        return true;
      } else {
        errorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      errorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
