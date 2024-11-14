
import { FaFacebook, FaInstagram,  } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-5">Find us</h2>
      <div className="join flex *:bg-base-100 join-vertical">
        <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
