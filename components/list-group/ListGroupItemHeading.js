import React from "react";

import classNames from "classnames";

const ListGroupItemHeading = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "list-group-item-heading");

  return <Tag {...attrs} className={classes} />;
};

ListGroupItemHeading.defaultProps = {
  tag: "h5"
};

export default ListGroupItemHeading;
