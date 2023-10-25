import { Image } from "antd";
import { PropTypes } from "prop-types";

function VerticalCards({ img, date, postTitle, postText }) {
  return (
    <div className="slider__items">
      <div className="items__img">
        <Image src={img} />
      </div>
      <div className="items__date__printed">
        <p>{date}</p>
      </div>
      <div className="items__title">
        <h2>{postTitle}</h2>
      </div>
      <div className="items__subtitle">
        <h3>{postText}</h3>
      </div>
    </div>
  );
}

VerticalCards.propTypes = {
  img: PropTypes.string,
  date: PropTypes.string,
  postTitle: PropTypes.string,
  postText: PropTypes.string,
};

export default VerticalCards;
