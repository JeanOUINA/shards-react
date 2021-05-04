import React from "react";

import classNames from "classnames";

const CardColumns = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-columns");

  return <Tag {...attrs} className={classes} />;
};

CardColumns.defaultProps = {
  tag: "div"
};

export default CardColumns;
