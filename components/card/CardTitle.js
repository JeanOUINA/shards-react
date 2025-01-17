import React from "react";
import classNames from "classnames";

const CardTitle = props => {
  const { className, tag: Tag, ...attributes } = props;
  const classes = classNames(className, "card-title");

  return <Tag {...attributes} className={classes} />;
};

CardTitle.defaultProps = {
  tag: "h5"
};

export default CardTitle;
