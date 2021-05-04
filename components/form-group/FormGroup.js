import React from "react";

import classNames from "classnames";

/**
 * Form groups allow you to easily add structure to your forms.
 */
const FormGroup = props => {
  const { className, row, disabled, check, inline, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    row && "row",
    check ? "form-check" : "form-group",
    check && inline && "form-check-inline",
    check && disabled && "disabled"
  );

  return <Tag {...attrs} className={classes} />;
};

FormGroup.defaultProps = {
  tag: "div"
};

export default FormGroup;
