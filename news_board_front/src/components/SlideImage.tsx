import React from "react";
import { Carousel } from "react-bootstrap";
import picture1 from "../static/pictures/slide1.jpg";
import picture2 from "../static/pictures/slide2.jpg";
import picture3 from "../static/pictures/slide3.jpg";

const SlideComponent : React.FC = () => {
    return (
        <Carousel style={{width: "30%", marginTop: "150px", marginBottom: "150px"}}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture1}
                alt="First slide"
                style={{ display: "flex"}}
            />
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture2}
                alt="Second slide"
                style={{display: "flex"}}
            />
        
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture3}
                alt="Third slide"
                style={{ display: "flex"}}
            />
        
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideComponent