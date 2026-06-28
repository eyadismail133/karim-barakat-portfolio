import { useState, useEffect, useCallback, useRef } from "react";
import Card from "./Card";
import "./carousel.css";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const isPaused = useRef(false);

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
      if (!isPaused.current) {
        setCurrent((prev) => (prev + 1) % items.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
      >
        <button className="carousel-btn left" onClick={goPrev} aria-label="Previous">
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

        <button className="carousel-btn right" onClick={goNext} aria-label="Next">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot${index === current ? " active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
