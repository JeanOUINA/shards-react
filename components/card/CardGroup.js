import React from "react";

import classNames from "classnames";

const CardGroup = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-group");

  return <Tag {...attrs} className={classes} />;
};

CardGroup.defaultProps = {
  tag: "div"
};

export default CardGroup;
