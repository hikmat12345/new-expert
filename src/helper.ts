<<<<<<< HEAD
export const   LoadAction= async(obj:object)=> {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token); // Store token in localStorage
      return token;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
=======
import axios from "axios";
export const LoadAction = async (mobileNumber: number) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      countryId: 1,
      deviceId: navigator.userAgent,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignInLoading = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignIn = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const UploadImage = async (
  userId?: any,
  fileInput?: any,
  environment?: string
) => {
  try {
    const form = new FormData();
    form.append("AllFilesToUpload", fileInput);

    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserImage?UserId=${userId}&environment=${environment}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: form,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerificationAction = async (
  userId: any,
  userOTP: string | number,
  type: number | string
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      userOTP: userOTP,
      type: type,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/verifyMobileOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const EmailVerificationAction = async (
  userId: any,
  userOTP: string | number,
  type: number | string
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      userOTP: userOTP,
      type: type,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/verifyEmailOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const ResendAction = async (userId: any, IsEmailOTP?: boolean) => {
  try {
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/${
        IsEmailOTP === true ? "resendEmailOtp" : "ResendMobileOtp"
      }?UserId=${userId}&Type=1`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const PersonalVerifcationAction = async ({
  userId,
  firstName,
  lastName,
  genderId,
  imagePath,
  modifiedBy,
}: {
  userId: number;
  firstName: string;
  lastName: string;
  genderId: number;
  imagePath: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      genderId: genderId,
      imagePath: imagePath,
      modifiedBy: modifiedBy || 0,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserProfile",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const PasswordAction = async (
  userId: any,
  password: string,
  isRest?: boolean
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      password: password,
    });

    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/${
        isRest == true ? "resetUserPassword" : "addUserPassword"
      }`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ForgetPasswordAction = async (mobileNumber: any) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/forgetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const AddUserEmailAction = async ({
  userId,
  text,
  modifiedBy,
}: {
  userId: number;
  text: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      text: text,
      type: 1,
      modifiedBy: modifiedBy,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserEmails",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const ForgotPasswordAction = async (mobileNumber: number) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      countryId: 1,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
>>>>>>> 3c4337664ca5ddb322f1a629e3c21ce6cde5287d
