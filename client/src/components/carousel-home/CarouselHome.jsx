import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./CarouselHome.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const VideoCarousel = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    // const videoProps = [
    //     {
    //         id: 1,
    //         title: "Video 1",
    //         src: vid1,
    //     },
    //     {
    //         id: 2,
    //         title: "Video 2",
    //         src: vid2,
    //     }
    // ];

    return (
        // <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel>
            <Carousel.Item interval={5000}>
                <img src={img1} alt="1" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={img2} alt="2" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img src={img3} alt="3" />
            </Carousel.Item>
        </Carousel>
    );
};

export default VideoCarousel;