import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./LoginSignUp.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import FaceIcon from "@material-ui/icons/Face";
// import Profile from "../../images/Profile.png";

// import { useDispatch, useSelector } from "react-redux";
// import {clearErrors, login, register} from "../../Actions/userActions";

const LoginSignUp = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const location = useLocation();
  // const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
  // const { name, email, password } = user;

  const name="";
  const email="";
  const password="";
  const loginSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(loginEmail, loginPassword));
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    // dispatch(register(myForm));
  }
  const registerDataChange = async (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    // if (error) {
    //   dispatch(clearErrors());
    // }
    // if (isAuthenticated) {
    //   navigate("/");
    // }
  }, []);
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.remove("shiftToNeutral");
      switcherTab.current.classList.add("shiftToRight");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>Login</p>
                  <p onClick={(e) => switchTabs(e, "register")}>Register</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder='Email'
                    required value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <input
                    type='password'
                    placeholder='Password'
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)} />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className='loginBtn' />
              </form>
              <form className='signUpForm' ref={registerTab} encType='multipart/form-data' onSubmit={registerSubmit}>
                <div className="signUpName">
                  <input
                    type="text"
                    placeholder='Name'
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <input
                    type="email"
                    placeholder='Email'
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder='Password'
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="signUpBtn" />
              </form>
            </div>
          </div>
    </Fragment>
  )
}

export default LoginSignUp
