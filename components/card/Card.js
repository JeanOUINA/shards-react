import React from "react";

import classNames from "classnames";

/**
 * Cards provide a flexible content container that you can use to display a variety of content using contextual background colors, headers and footers.
 */
const Card = props => {
  const {
    className,
    innerRef,
    tag: Tag,
    theme,
    outline,
    small,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    "card",
    small && "card-small",
    theme && `${outline ? "border" : "bg"}-${theme}`
  );

  return <Tag {...attrs} className={classes} ref={innerRef} />;
};

Card.defaultProps = {
  tag: "div"
};

export default Card;
