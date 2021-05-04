import React from "react";

import classNames from "classnames";

const ListGroupItemText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "list-group-item-text");

  return <Tag {...attrs} className={classes} />;
};

ListGroupItemText.defaultProps = {
  tag: "p"
};

export default ListGroupItemText;
