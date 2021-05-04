import React from "react";

import classNames from "classnames";

/**
 * The breadcrumb component is great for indicating the current page's location within a navigational hierarchy.
 */
const Breadcrumb = props => {
  const {
    className,
    listClassName,
    children,
    tag: Tag,
    listTag: ListTag,
    "aria-label": label,
    ...attrs
  } = props;

  const classes = classNames(className);

  const listClasses = classNames("breadcrumb", listClassName);

  return (
    <Tag {...attrs} className={classes} aria-label={label}>
      <ListTag className={listClasses}>{children}</ListTag>
    </Tag>
  );
};


Breadcrumb.defaultProps = {
  "aria-label": "breadcrumb",
  tag: "nav",
  listTag: "ol"
};

export default Breadcrumb;
