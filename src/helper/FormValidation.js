let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
import cogoToast from "cogo-toast";
class FormValidation {
  isEmpty(value) {
    return value.length === 0;
  }
  isMobile(value) {
    return MobileRegx.test(value);
  }
  isEmail(value) {
    return !EmailRegx.test(value);
  }
  errorToast(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessToast(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
  // getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.error = (error) => reject(error);
  //   });
  // }
}

export const {
  isEmpty,
  isMobile,
  isEmail,
  errorToast,
  SuccessToast,
  // getBase64,
} = new FormValidation();
