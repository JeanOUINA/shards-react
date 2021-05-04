import React from "react";

import classNames from "classnames";
import toNumber from "lodash.tonumber";

/**
 * You can use the `Progress` component to display simple or complex progress bars.
 */
const Progress = props => {
  const {
    children,
    className,
    barClassName,
    value,
    max,
    animated,
    striped,
    theme,
    bar,
    multi,
    tag: Tag,
    ...attrs
  } = props;

  const percent = (toNumber(value) / toNumber(max)) * 100;
  const progressClasses = classNames(className, "progress");
  const progressBarClasses = classNames(
    "progress-bar",
    bar ? className || barClassName : barClassName,
    animated && "progress-bar-animated",
    theme && `bg-${theme}`,
    (striped || animated) && "progress-bar-striped"
  );

  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      {children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attrs} className={progressClasses}>
      {ProgressBar}
    </Tag>
  );
};

Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100,
  theme: "primary"
};

export default Progress;
