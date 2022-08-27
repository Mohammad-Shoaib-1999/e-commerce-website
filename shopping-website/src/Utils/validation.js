function usernameValidaion(username) {
  if (username === "") {
    return {
      message: "Please enter your Name",
      result: false,
    };
  } else {
    return {
      message: "Successful",
      result: true,
    };
  }
}

function mobileValidation(mobile) {
  if (mobile === "" && mobile != 10) {
    return {
      message: "Please enter your Mobile Number",
      result: false,
    };
  } else {
    return {
      message: "Successful",
      result: true,
    };
  }
}

function emailValidation(email) {
  if (email === "" && !email.includes("@")) {
    return {
      message: "Please enter your Email",
      result: false,
    };
  } else {
    return {
      message: "Successful",
      result: true,
    };
  }
}

function passwordValidation(password) {
  if (password === "" && password.length <= 5) {
    return {
      message: "Please enter your Password",
      result: false,
    };
  } else {
    return {
      message: "Successful",
      result: true,
    };
  }
}

export {
  usernameValidaion,
  mobileValidation,
  emailValidation,
  passwordValidation,
};
