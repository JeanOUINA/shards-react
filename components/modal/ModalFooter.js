import React from "react";

import classNames from "classnames";

const ModalFooter = props => {
  const { className, children, ...attrs } = props;
  const classes = classNames("modal-footer", className);

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ModalFooter;
