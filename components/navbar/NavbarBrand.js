import React from "react";

import classNames from "classnames";

const NavbarBrand = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-brand");

  return <Tag {...attrs} className={classes} />;
};

NavbarBrand.defaultProps = {
  tag: "a"
};

export default NavbarBrand;
