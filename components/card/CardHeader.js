import React from "react";

import classNames from "classnames";

const CardHeader = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-header");

  return <Tag {...attrs} className={classes} />;
};

CardHeader.defaultProps = {
  tag: "div"
};

export default CardHeader;
