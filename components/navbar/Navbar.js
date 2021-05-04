import React from "react";

import classNames from "classnames";

/**
 * Using the `Navbar` component you can create powerful and responsive navigation headers.
 */
const Navbar = props => {
  const {
    className,
    expand,
    fixed,
    sticky,
    theme,
    type,
    tag: Tag,
    ...attrs
  } = props;

  let expandClass;

  if (expand === false) {
    expandClass = false;
  } else if (expand === true || expand === "xs") {
    expandClass = "navbar-expand";
  } else if (typeof expand === "string") {
    expandClass = `navbar-expand-${expand}`;
  }

  const classes = classNames(
    className,
    "navbar",
    expandClass,
    type === "light" && "navbar-light",
    type === "dark" && "navbar-dark",
    theme && `bg-${theme}`,
    fixed && `fixed-${fixed}`,
    sticky && `sticky-${sticky}`
  );

  return <Tag {...attrs} className={classes} />;
};

Navbar.defaultProps = {
  tag: "nav",
  expand: false
};

export default Navbar;
