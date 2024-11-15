import React from "react";
import { BsShare } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaEye, FaRegBookmark } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-lg mb-8 rounded overflow-hidden shadow-lg border border-gray-200 p-5">
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-700  font-semibold">{news.author.name}</p>
          <p className="text-gray-400 text-sm">
          {news.author?.published_date ? news.author.published_date.split(" ")[0] : "Unknown Date"}
          </p>
        </div>
        <button className="flex space-x-3 ml-auto text-gray-500 hover:text-gray-700">
            <FaRegBookmark></FaRegBookmark>
           <BsShare></BsShare>
          </button>
      </div>
      <h2 className="font-bold text-lg mb-2">{news.title}</h2>
      <img
        className="w-full h-56 object-cover overflow-hidden rounded mb-4"
        src={news.thumbnail_url}
        alt="Thumbnail"
      />
      <p className="text-gray-500 text-sm mb-4">
        {news.details.slice(0, 150)}...{" "}
        <Link to={`/news/${news._id}`} className="text-red-500 font-semibold"> Read More</Link>
      </p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
         <ReactStars>
         count={5}
            value={news.rating.number}
            size={28}
            activeColor="#ffd700"
         </ReactStars>
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
