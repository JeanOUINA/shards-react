import React from "react";

import classNames from "classnames";

const NavbarToggler = props => {
  const { className, children, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-toggler");

  return (
    <Tag {...attrs} className={classes}>
      {children || <span className="navbar-toggler-icon" />}
    </Tag>
  );
};

NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

export default NavbarToggler;
