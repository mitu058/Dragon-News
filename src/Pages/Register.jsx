import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const {creatNewUser,setUser,updateUserProfile} = useContext(AuthContext)
  const [error,setError] = useState({})
  const navigate = useNavigate()

  const handelSubmit =(e) =>{
    e.preventDefault()
  //  get form data
  const form = new FormData(e.target)
  const name = form.get('name')
  const photo = form.get('photo')
  const email = form.get('email')
  const password = form.get('password')
  if(password.length < 6){
    setError({...error, password:'Password must be at least 6 character or longer'})
  }
  // console.log({name,photo,email,password})

  creatNewUser(email,password)
  .then(result =>{
    const user = result.user
    setUser(user)
    updateUserProfile({displayName: name , photoURL: photo})
    .then(()=>{
      navigate("/")
    })
    .catch(err =>{
      // console.log(err)
    })
  })
  .catch((error) => {
    const errorMessage = error.message
  //  console.log(errorMessage)
  });
  }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-md rounded-none p-8">
          <h2 className="text-2xl font-semibold text-center ">
            Register Your Account
          </h2>
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="Photo_url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              {
                error.password && <p className='text-sm p-2 text-red-500'>{error.password}</p>
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">
           Already have an account?{" "}
            <Link to='/auth/login' className="text-red-400" >
              <u>Login</u>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;