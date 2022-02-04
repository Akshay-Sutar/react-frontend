import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = () => {
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const body = { username, password };

    const userData = { userId: 123, username: "Akshay Sutar" };
    dispatch(authActions.login(userData));
    navigate("/dashboard");

    // axios
    //   .post(`http://localhost:4000/login`, body, {
    //     withCredentials: true,
    //     credentials: "include",
    //   })
    //   .then((res) => {
    //     const { data } = res;
    //     const userData = { userId: data.user.id, username: data.user.username };
    //     dispatch(authActions.login(userData));
    //     navigate("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.error("err", err);
    //     navigate("/");
    //   });
  };

  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row row-white g-0">
          <div className="col-lg-5">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/02/05/28/portrait-828395_960_720.jpg"
              className="img-fluid"
              alt="lady_with_jewellary"
            ></img>
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">My Store</h1>
            <h4>Sign in to your account</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control my-3 p-4"
                    placeholder="username"
                    type="text"
                    ref={usernameRef}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control my-3 p-4"
                    placeholder="password"
                    type="password"
                    ref={passwordRef}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button
                    className="my-button mt-3 mb-5"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="form-row">
                <div align="center" className="col-lg-7">
                  <Link to="/register">Forgot password</Link>
                </div>
              </div>
              <div className="form-row">
                <div align="center" className="col-lg-7 mb-5">
                  Don't have an account?{" "}
                  <Link to="/register">Register here</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
