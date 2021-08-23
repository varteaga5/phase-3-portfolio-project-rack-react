import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";

function Home() {
  render() {
    return (
      <>
        <h1>
          <Badge variant="light">Welcome to my Phase 3 Project!</Badge>
        </h1>
        <br />
        <div className="d-flex justify-content-center">
          <Card style={{ maxWidth: "400px" }}>
            This is a short and sweet app, add your favorite street foods and choose a category from American, Mexican, Asian, and other. You can sort your favorite foods by category and if you have a change of taste you can delete a food
            <br />
          </Card>
        </div>
      </>
    );
  }
}

export default Home;
