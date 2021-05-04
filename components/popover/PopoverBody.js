import React from "react";

import classNames from "classnames";

const PopoverBody = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "popover-body");

  return <Tag {...attrs} className={classes} />;
};

PopoverBody.defaultProps = {
  tag: "div"
};

export default PopoverBody;
