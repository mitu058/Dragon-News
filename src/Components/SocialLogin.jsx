import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-5">Login With</h2>
            <div className="space-y-3 *:w-full">
                <button className="btn"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn"><FaGithub></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;