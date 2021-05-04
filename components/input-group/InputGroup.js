import React from "react";

import classNames from "classnames";

/**
 * Using the `InputGroup` component you can easily extend form controls by adding various elements such as text, buttons and button groups.
 */
const InputGroup = props => {
  const { className, tag: Tag, size, seamless, ...attrs } = props;
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  );

  return <Tag {...attrs} className={classes} />;
};

InputGroup.defaultProps = {
  tag: "div"
};

export default InputGroup;
