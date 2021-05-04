import React from "react";

import classNames from "classnames";

const NavItem = props => {
  const { className, active, disabled, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  );

  return <Tag {...attrs} className={classes} />;
};

NavItem.defaultProps = {
  tag: "li"
};

export default NavItem;
