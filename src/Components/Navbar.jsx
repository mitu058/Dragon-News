import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='text-lg space-x-5'>
                <Link to ='/news'>Home</Link>
                <Link to ='/news'>About</Link>
                <Link to ='/news'>Career</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <img className='w-10 h-10' src={user} alt="" />
                <button className='btn btn-neutral '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;