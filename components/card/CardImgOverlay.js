import React from "react";

import classNames from "classnames";

const CardImgOverlay = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-img-overlay");

  return <Tag {...attrs} className={classes} />;
};

CardImgOverlay.defaultProps = {
  tag: "div"
};

export default CardImgOverlay;
