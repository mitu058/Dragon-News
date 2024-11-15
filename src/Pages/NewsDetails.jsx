import React from "react";
import Header from "../Components/Header";
import RightNavbar from "../layout-components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  // console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-lg font-semibold mb-4">Dragon News</h2>
          <div className="card bg-base-100 p-4 border-2 my-10">
            <figure className="p-4 w-full">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white hover:bg-[#D72050]">All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
