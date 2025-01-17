import React from "react";

import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import omit from "lodash.omit";
import pick from "lodash.pick";

import { TIMEOUT, TRANSITION_KEYS } from "./../constants";

/**
 * The `Fade` component allows you to easily fade in and out content and is powered by [react-transition-group](https://github.com/reactjs/react-transition-group).
 */
const Fade = props => {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    children,
    innerRef,
    ...attrs
  } = props;

  const transitionProps = pick(attrs, TRANSITION_KEYS);
  const childProps = omit(attrs, TRANSITION_KEYS);

  return (
    <Transition {...transitionProps}>
      {status => {
        const isActive = status === "entered";
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive
        );
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );
}

Fade.defaultProps = {
  ...Transition.defaultProps,
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TIMEOUT.FADE,
  appear: true,
  enter: true,
  exit: true,
  in: true
};

export default Fade;
