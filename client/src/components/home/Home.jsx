import { useEffect } from "react";

import CarouselHome from "../carousel-home/CarouselHome";
import CarQuickView from "../car-quick-view/CarQuickView";
import PostQuickView from "../post-quick-view/PostQuickView";
import Path from "../../utils/paths";

import "./home.css";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Path.Home]);

    return (
        <section className="home">

            <CarouselHome />

            <CarQuickView />

            <PostQuickView />

        </section>
    );
};