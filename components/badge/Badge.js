import React from "react";
import classNames from "classnames";

/**
 * Badges are really great for labels and count values.
 */
const Badge = props => {
  let { tag: Tag, className, theme, pill, outline, ...attrs } = props;

  const classes = classNames(
    className,
    "badge",
    theme && !outline && `badge-${theme}`,
    outline && `badge-outline-${theme}`,
    pill && "badge-pill"
  );

  Tag = attrs.href && Tag === "span" ? "a" : Tag;

  return <Tag {...attrs} className={classes} />;
};

Badge.defaultProps = {
  theme: "primary",
  pill: false,
  outline: false,
  tag: "span"
};

export default Badge;
