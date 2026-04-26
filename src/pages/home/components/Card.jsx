import "./Card.css";

const Card = ({ title, subtitle, image, link }) => {
  return (
    <div className="work-card">
      <img className="work-card-image" src={image} alt={title} />
      <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-subtitle">{subtitle}</p>
        <a
          href={link}
          className="work-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
