import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Worked with clients to understand their requirements and develop
                software solutions that met their needs and ensured timely
                delivery resulting in a 5-star rating and Level 2 Seller status.
                Utilized a range of technologies including Node.JS, React.JS
                Java, JavaScript, C++, MongoDB, MySQL, PostgreSQL, AWS S3
                Bucket, Google API's etc.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>HTML CSS JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>Game Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="text" />
                  <h5>Problem Solving</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="text" />
    </section>
  );
}
