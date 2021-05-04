import React from "react";

import classNames from "classnames";

const CardSubtitle = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-subtitle", "text-muted");

  return <Tag {...attrs} className={classes} />;
};

CardSubtitle.defaultProps = {
  tag: "h6"
};

export default CardSubtitle;
