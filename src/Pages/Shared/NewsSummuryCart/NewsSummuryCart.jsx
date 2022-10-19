import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummuryCart = ({ news }) => {
  const {
    _id,
    title,
    image_url,
    details,
    author: { name, img, published_date },
    rating: { number },
    total_view,
  } = news;

  console.log(
    "🚀 ~ file: NewsSummuryCart.jsx ~ line 5 ~ NewsSummuryCart ~ news",
    news
  );

  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <Image
            roundedCircle
            src={img}
            style={{ width: "50px", height: "50px" }}
          ></Image>
          <div className="d-flex flex-column">
            <p className="m-0">{name ? name : "No data found!"}</p>
            <p className="m-0">
              {published_date ? published_date : "No data found!"}
            </p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`} className="text-decoration-none">
                Read More
              </Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-align-items-center">
        <p className="d-flex align-items-center gap-2">
          <FaStar></FaStar>
          {number}
        </p>
        <p className="d-flex align-items-center gap-2">
          <FaEye></FaEye> {total_view}
        </p>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummuryCart;
