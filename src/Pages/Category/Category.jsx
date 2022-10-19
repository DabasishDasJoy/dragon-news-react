import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummuryCart from "../Shared/NewsSummuryCart/NewsSummuryCart";

const Category = () => {
  const AllNews = useLoaderData();
  return (
    <div>
      <h1>Category: {AllNews.length}</h1>
      {AllNews.map((news) => (
        <NewsSummuryCart key={news._id} news={news}></NewsSummuryCart>
      ))}
    </div>
  );
};

export default Category;
