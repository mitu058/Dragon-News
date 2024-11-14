import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="p-3 bg-gray-100 flex gap-4">
        <button className="bg-[#D72050] px-3 py-1 text-white">Latest</button>
        <Marquee className="gap-10" pauseOnHover={true}>
          <Link to='/news'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, debitis?
          </Link>
          <Link to='/news'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, debitis?
          </Link>
          <Link to='/news'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, debitis?
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
