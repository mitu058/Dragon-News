import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
const {userLogin,setUser} = useContext(AuthContext)
const [error,setError] = useState({})
const location = useLocation()
const navigate = useNavigate()
console.log(location)
const handelLogin = (e) =>{
  e.preventDefault()
  const form = e.target
  const email = form.email.value
  const password = form.password.value
  console.log({email,password})

  userLogin(email,password)
  .then(result =>{
    const user = result.user
    setUser(user)
   navigate(location?.state ? location.state : '/')
  })
  .catch((err) => {
  setError({...error, login: err.code})
  });

}

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md rounded-none p-8">
        <h2 className="text-2xl font-semibold text-center ">
          Login Your Account
        </h2>
        <form onSubmit={handelLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error.login && <label className="label text-sm text-red-500">{error.login}</label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't have an account?{" "}
          <Link className="text-red-400" to='/auth/register'>
            <u>Register</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
