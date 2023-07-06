import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { read } from "selenium-webdriver/io";


export const ProjectCard = ({ title, description, imgUrl,demo,readMe }) => {
  return (
    <Col size={12} sm={6} md={4}>
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
         

        </div>
      </div>
    </Col>
  )
}
