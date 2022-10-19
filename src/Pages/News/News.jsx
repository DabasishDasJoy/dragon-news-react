import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { details, image_url, title, category_id } = useLoaderData();

  return (
    <Card className="mt-2">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">View all in this category</Button>
        </Link>{" "}
      </Card.Body>
    </Card>
  );
};

export default News;
