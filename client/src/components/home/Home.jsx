import { useEffect } from "react";

import CarouselHome from "../carousel-home/CarouselHome";
import CarQuickView from "../car-quick-view/CarQuickView";
import Path from "../../utils/paths";

import "./home.css";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Path.Home]);

    return (
        <section className="home">

            {/* <div className="content">
                <h2>Welcome To</h2>
                <h3>The Car World</h3>
                <h4>Personalize Your Dream Car</h4>
            </div> */}

            <div className="carousel">
                <CarouselHome />
            </div>

            <CarQuickView />
        </section>
    );
};