import { React } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-bootstrap/Carousel";

import Path from "../../utils/paths";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

import "./carouselHome.css";

export default function CarouselHome() {
    const c1 = {
        id: 1,
        interval: 5000,
        img: img1,
        title: "See our best selling car - Nissan R35 GTR",
        carId: "a5f74b67-aeae-4335-8cd3-dff4c689agtr",
    };

    const c2 = {
        id: 2,
        interval: 5000,
        img: img2,
        title: "You've always wanted a big family car. Look at this Mercedes!",
        carId: "a5f74b67-aeae-4335-8cd3-dff4c6898834",
    };

    const c3 = {
        id: 3,
        interval: 5000,
        img: img3,
        title: "You want a vintage car for your collection - we have it.",
        carId: "a5f74b67-aeae-4335-8cd3-dff4c68988op",
    }



    return (
        <Carousel pause={false} fade >
            <Carousel.Item interval={c1.interval}>
                <img src={c1.img} />
                <Carousel.Caption>
                    <h1>{c1.title}</h1>
                    <Link to={`${Path.CarList}/${c1.carId}`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={c2.interval}>
                <img src={c2.img} alt={c2.id} />
                <Carousel.Caption>
                    <h1>{c2.title}</h1>
                    <Link to={`${Path.CarList}/${c2.carId}`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={c3.interval}>
                <img src={c3.img} />
                <Carousel.Caption>
                    <h1>{c3.title}</h1>
                    <Link to={`${Path.CarList}/${c3.carId}`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

// export default CarouselHome;
// Example

/* <Carousel.Item interval={5000}>
    <img src={img1} alt="1" />
    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Link to={`${Path.CarList}/a5f74b67-aeae-4335-8cd3-dff4c689agtr`}>Button</Link>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={5000}>
    <img src={img2} alt="2" />
    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={5000}>
    <img src={img3} alt="3" />
</Carousel.Item> */