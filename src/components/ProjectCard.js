import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo, code }) => {
  return (
    <Col className="proj-card" size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-2">
            <a href={demo} target="_blank">
              <Button variant="light">Demo</Button>
            </a>
          </div>
          <div className="mt-2">
            <a href={code} target="_blank">
              <Button variant="light">Source Code</Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
