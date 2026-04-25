import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="work-card">
      <img className="work-card-image" src={image} alt={title} />
      <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
