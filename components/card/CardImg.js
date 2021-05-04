import React from "react";

import classNames from "classnames";

const CardImg = props => {
  const { className, top, bottom, tag: Tag, ...attrs } = props;
  let cardImgClass = "";

  if (top) {
    cardImgClass = "card-img-top";
  }

  if (bottom) {
    cardImgClass = "card-img-bottom";
  }

  cardImgClass = classNames(className, cardImgClass);

  return <Tag {...attrs} className={cardImgClass} />;
};

CardImg.defaultProps = {
  tag: "img"
};

export default CardImg;
