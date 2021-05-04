import React from "react";

import classNames from "classnames";

/**
 * Button toolbars allow you to group a series of button or input groups on a single line.
 */
const ButtonToolbar = props => {
  const { className, ...attrs } = props;
  const classes = classNames(className, "btn-toolbar");

  return <div className={classes} {...attrs} />;
};

export default ButtonToolbar;
