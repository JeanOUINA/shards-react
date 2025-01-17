import React from "react";

import classNames from "classnames";

const ModalBody = props => {
  const { className, children, ...attrs } = props;
  const classes = classNames("modal-body", className);

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ModalBody;
