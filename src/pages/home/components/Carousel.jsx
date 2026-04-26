import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevIndex = current === 0 ? items.length - 1 : current - 1;

  const nextIndex = current === items.length - 1 ? 0 : current + 1;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [items.length, goNext, goPrev]);

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={goPrev}>
        ‹
      </button>
      {items.map((item, index) => {
        let position = "hidden";

        if (index === current) position = "active";
        else if (index === prevIndex) position = "prev";
        else if (index === nextIndex) position = "next";

        return (
          <div key={index} className={`carousel-slide ${position}`}>
            <Card {...item} />
          </div>
        );
      })}
      <button className="carousel-btn right" onClick={goNext}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
