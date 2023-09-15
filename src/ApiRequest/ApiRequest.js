import axios from "axios";
import { SuccessToast, errorToast } from "../helper/FormValidation";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/slice/settings/settingsSlice";
import { setToken, setUserDetails } from "../helper/appHelper";
let baseURL = "http://localhost:5000/api/v1";

export function LoginRequest(email, password) {
  let URL = baseURL + "/login";
  let PostBody = { email: email, password: password };
  return axios
    .post(URL, PostBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
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
