import React from "react";

import classNames from "classnames";

const CardDeck = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-deck");

  return <Tag {...attrs} className={classes} />;
};

CardDeck.defaultProps = {
  tag: "div"
};

export default CardDeck;
