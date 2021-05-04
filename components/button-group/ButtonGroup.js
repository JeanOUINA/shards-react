import React from "react";

import classNames from "classnames";

/**
 * Button groups allow you to group buttons together on a single line.
 */
const ButtonGroup = props => {
  const { className, vertical, size, ...attrs } = props;

  const classes = classNames(
    className,
    size && `btn-group-${size}`,
    vertical ? "btn-group-vertical" : "btn-group"
  );

  return <div className={classes} {...attrs} />;
};

export default ButtonGroup;
