import React from "react";
import classNames from "classnames";

import Fade from "../fade";

/**
 * The alert component can be used to display contextual user messages.
 */
const Alert = props => {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    tag: Tag,
    theme,
    open,
    dismissible,
    children,
    transition,
    fade,
    ...attrs
  } = props;

  const classes = classNames(
    className,
    "alert",
    `alert-${theme}`,
    dismissible && "alert-dismissible"
  );

  const closeClasses = classNames("close", closeClassName);

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : "",
    timeout: fade ? transition.timeout : 0
  };

  return (
    <Fade
      {...attrs}
      {...alertTransition}
      tag={Tag}
      className={classes}
      in={open}
      role="alert"
    >
      {dismissible ? (
        <button
          type="button"
          className={closeClasses}
          aria-label={closeAriaLabel}
          onClick={dismissible}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      ) : null}
      {children}
    </Fade>
  );
};

Alert.defaultProps = {
  theme: "primary",
  open: true,
  tag: "div",
  closeAriaLabel: "Close",
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true
  }
};

export default Alert;
