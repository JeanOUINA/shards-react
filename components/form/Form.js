import React from "react";

import classNames from "classnames";

/**
 * Examples and usage guidelines for form controls.
 */
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
    this.submit = this.submit.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  submit() {
    if (this.ref) {
      this.ref.submit();
    }
  }

  render() {
    const { className, tag: Tag, inline, innerRef, ...attrs } = this.props;
    const classes = classNames(className, inline && "form-inline");

    return <Tag {...attrs} ref={innerRef} className={classes} />;
  }
}

Form.defaultProps = {
  tag: "form"
};

export default Form;
