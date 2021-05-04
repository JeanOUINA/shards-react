import React from "react";

import classNames from "classnames";

const CardLink = props => {
  const { className, tag: Tag, innerRef, ...attrs } = props;
  const classes = classNames(className, "card-link");

  return <Tag {...attrs} ref={innerRef} className={classes} />;
};

CardLink.defaultProps = {
  tag: "a"
};

export default CardLink;
