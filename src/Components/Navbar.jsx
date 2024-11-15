import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userProfile from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between">
      <div>{user && user.email}</div>
      <div className="text-lg space-x-5">
        <Link to="/">Home</Link>
        <Link to="">About</Link>
        <Link to="">Career</Link>
      </div>
      <div className="flex items-center space-x-4">
        {user && user?.email ? (
          <div>
            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>
        ) : (
          <img className="w-10 h-10" src={userProfile} alt="" />
        )}

        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral btn-sm">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
