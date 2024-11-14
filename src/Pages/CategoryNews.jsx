import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const news = useLoaderData();
  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <p className="text-gray-400 text-sm mb-5">
        {news.data.length} News Found On This Caategory
      </p>
      <div>
        {news.data.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
