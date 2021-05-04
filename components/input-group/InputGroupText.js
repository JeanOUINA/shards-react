import React from "react";

import classNames from "classnames";

const InputGroupText = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "input-group-text");

  return <Tag {...attrs} className={classes} />;
};

InputGroupText.defaultProps = {
  tag: "span"
};

export default InputGroupText;
