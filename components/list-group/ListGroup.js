import React from "react";

import classNames from "classnames";

/**
 * List groups allow you to display series of content.
 */
const ListGroup = props => {
  const { className, tag: Tag, flush, small, ...attrs } = props;
  const classes = classNames(
    className,
    "list-group",
    small && "list-group-sm",
    flush && "list-group-flush"
  );

  return <Tag {...attrs} className={classes} />;
};

ListGroup.defaultProps = {
  tag: "ul"
};

export default ListGroup;
