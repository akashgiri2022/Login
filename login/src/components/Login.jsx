import React from "react";
function Login() {
  return (
    <>
      <div className="app">
        <div className="logo-box">
          <img
            src={require("../image/insta.jpg")}
            alt="logo"
            className="logo"
          />
          <h2>Sign In to Instagram</h2>
          <div className="btn-container">
            <button className="btn">
              <img
                src={require("../image/google.png")}
                alt="logo"
                className="google"
              />
              Sign in with Google
            </button>
            <button className="btn">
              <img
                src={require("../image/ios.jpg")}
                alt="logo"
                className="ios"
              />
              Sign in with Google
            </button>
          </div>
          <h3>______________ or _____________</h3>
          <form>
            <input type="text" placeholder="Phone email or username"/>
            <button>Next</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
