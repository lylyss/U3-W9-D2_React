import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import scifiBooks from "../json/scifi.json";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(scifiBooks);
    setBooks(scifiBooks);
  }, []);

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} md={4}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Price: ${book.price.toFixed(2)} € </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
