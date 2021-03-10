import React from "react";
// import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./Read.css";
import { TextareaAutosize } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
function Read() {
  //   const { Id, Is, Ip } = useParams();
  const location = useLocation();
  return (
    <>
      {/* <Card>
        <Card.Header> {location.state.creator}</Card.Header>
        <Card.Body>
          <Card.Title> {location.state.title}</Card.Title>
          <a href="/">click</a>
        </Card.Body>
      </Card> */}
      {/* <TextareaAutosize
        className="mess"
        aria-label="maximum height"
        placeholder="yoo"
      >
        {location.state.message}
      </TextareaAutosize> */}
      {/* <MDEditor.Markdown source={location.state.message} /> */}

      <Card className="card">
        <Card.Header className="header" as="h2">
          {location.state.creator}
        </Card.Header>
        <hr />
        <Card.Body>
          <Card.Title as="h3" className="tit">
            {location.state.title}
          </Card.Title>
          <Card.Text>
            <MDEditor.Markdown source={location.state.message} className="md" />
          </Card.Text>

          <a href="/">
            <Button className="btn">Go Back</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}

export default Read;
