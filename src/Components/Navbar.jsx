import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userProfile from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-between'>
            <div>{user && user.name}</div>
            <div className='text-lg space-x-5'>
                <Link to ='/news'>Home</Link>
                <Link to ='/news'>About</Link>
                <Link to ='/news'>Career</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <img className='w-10 h-10' src={userProfile} alt="" />
                <Link to="/auth/login" className='btn btn-neutral btn-sm'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;