import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="my-4">
      <Alert variant="info">
        <Alert.Heading>Welcome to Our Online Library!</Alert.Heading>
        <p>Discover a world of knowledge and stories. Happy reading!</p>
      </Alert>
      <h2>Explore Our Collection</h2>
    </div>
  );
};

export default Welcome;
