import React from "react";

import classNames from "classnames";

const CardBody = props => {
  const { className, tag: Tag, children, ...attrs } = props;
  const classes = classNames(className, "card-body");

  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};

CardBody.defaultProps = {
  tag: "div"
};

export default CardBody;
