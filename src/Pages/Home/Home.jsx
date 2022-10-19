import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummuryCart from "../Shared/NewsSummuryCart/NewsSummuryCart";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <p>All news: {allNews.length}</p>
      {allNews.map((news) => (
        <NewsSummuryCart news={news} key={news._id}></NewsSummuryCart>
      ))}
    </div>
  );
};

export default Home;
