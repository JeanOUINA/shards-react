import React from "react";

import classNames from "classnames";

const CardText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-text");

  return <Tag {...attrs} className={classes} />;
};

CardText.defaultProps = {
  tag: "p"
};

export default CardText;
