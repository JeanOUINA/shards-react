import React from "react";

import classNames from "classnames";

/**
 * The `Nav` component allows you to build all types of navigation components.
 */
const Nav = props => {
  const {
    className,
    navbar,
    horizontal,
    vertical,
    tabs,
    card,
    pills,
    justified,
    fill,
    tag: Tag,
    ...attrs
  } = props;

  let verticalClass;

  if (vertical === true || vertical === "xs") {
    verticalClass = "flex-column";
  } else if (vertical === false) {
    verticalClass = false;
  } else if (typeof vertical === "string") {
    verticalClass = `flex-${vertical}-column`;
  }

  const classes = classNames(
    className,
    navbar ? "navbar-nav" : "nav",
    horizontal && `justify-content-${horizontal}`,
    verticalClass,
    tabs && "nav-tabs",
    card && tabs && "card-header-tabs",
    pills && "nav-pills",
    card && pills && "card-header-pills",
    justified && "nav-justified",
    fill && "nav-fill"
  );

  return <Tag {...attrs} className={classes} />;
};

Nav.defaultProps = {
  tag: "ul",
  vertical: false
};

export default Nav;
