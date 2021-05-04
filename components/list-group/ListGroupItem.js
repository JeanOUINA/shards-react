import React from "react";

import classNames from "classnames";

const ListGroupItem = props => {
  const {
    className,
    tag: Tag,
    active,
    action,
    disabled,
    theme,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    active && "active",
    disabled && "disabled",
    action && "list-group-item-action",
    theme && `list-group-item-${theme}`,
    "list-group-item"
  );

  if (disabled) {
    attrs.onClick = e => {
      e.preventDefault();
    };
  }

  return <Tag {...attrs} className={classes} />;
};

ListGroupItem.defaultProps = {
  tag: "li"
};

export default ListGroupItem;
