import { useState, useEffect } from "react";
import Card from "./Card";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevIndex = current === 0 ? items.length - 1 : current - 1;

  const nextIndex = current === items.length - 1 ? 0 : current + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
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
    </div>
  );
};

export default Carousel;
