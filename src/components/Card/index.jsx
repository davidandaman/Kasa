import PropTypes from "prop-types";
import DefaultPicture from "../../assets/images/accommodation-20-1.jpg";

function Card({ label, title, picture }) {
  return (
    <div className="show-card">
      <img src={picture} alt={title} />
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  picture: DefaultPicture,
};

export default Card;
