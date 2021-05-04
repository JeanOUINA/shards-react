import React from "react";

import classNames from "classnames";

const FormFeedback = props => {
  const { className, valid, tooltip, tag: Tag, ...attrs } = props;
  const validMode = tooltip ? "tooltip" : "feedback";

  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  );

  return <Tag {...attrs} className={classes} />;
};

FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
};

export default FormFeedback;
