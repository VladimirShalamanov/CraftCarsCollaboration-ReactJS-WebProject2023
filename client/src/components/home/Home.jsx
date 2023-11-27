import CarouselHome from "../carousel-home/CarouselHome";
import "./home.css";

export default function Home() {
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
        </section>
    );
};