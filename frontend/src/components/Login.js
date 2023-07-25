import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "../store/user/user.action";
import { useDispatch } from "react-redux";
import UserDataService from "../services/user";

function Login() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    var tokenData = jwt_decode(res.credential);
    var loginData = {
      googleId: tokenData.sub,
      ...tokenData,
    };
    dispatch(setCurrentUser(loginData));
    fetchUser(loginData);
    localStorage.setItem("login", JSON.stringify(loginData));
    console.log("Login Success: currentUser:", loginData);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const fetchUser = (loginData) => {
    let user = {
      userID: loginData.googleId,
    };
    UserDataService.get(loginData.googleId)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          dispatch(setCurrentUser(response.data));
        } else {
          UserDataService.createUser(user)
            .then((response) => {
              dispatch(setCurrentUser(response.data));
            })
            .catch((e) => {
              console.log(e);
            });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <GoogleLogin
        id="login"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
        auto_select={true}
      />
    </div>
  );
}

export default Login;
