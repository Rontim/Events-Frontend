/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import pic from "../../assets/noiseporn-JNuKyKXLh8U-unsplash.jpg";

const FeaturedEventsCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % events.length);
      setAnimationClass("slide-in-from-right");

      setTimeout(() => {
        setAnimationClass("");
      }, 1000);
    };

    const slideInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, events]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length);
  };

  return (
    <section
      className={`featured-events-carousel ${animationClass} row justify-content-center p-5`}
    >
      <div className={`carousel col`}>
        <div
          className="slide row justify-content-evenly {
"
        >
          <div className={`event-image col-2`}>
            <img
              src={pic}
              alt={events[currentIndex].name}
              style={{ width: "200%" }}
            />
          </div>
          <div className={`event-content col-2  ml-0`}>
            <h2>{events[currentIndex].name}</h2>
            <p>{events[currentIndex].description}</p>
            <a href={`/event/${events[currentIndex].id}`} className="btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="prev-btn">
          Previous
        </button>
        <button onClick={nextSlide} className="next-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default FeaturedEventsCarousel;
