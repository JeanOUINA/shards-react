import React from "react";

import classNames from "classnames";

/**
 * The `FormSelect` component is a wrapper over Bootstrap's [custom select component](https://getbootstrap.com/docs/4.1/components/forms/#select-menu).
 */
class FormSelect extends React.Component {
  constructor(props) {
    super(props);

    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  render() {
    const {
      className,
      children,
      size,
      valid,
      invalid,
      innerRef,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "form-control",
      "custom-select",
      valid && "is-valid",
      invalid && "is-invalid",
      size && `form-control-${size}`,
      size && `custom-select-${size}`
    );

    return (
      <select {...attrs} className={classes} ref={innerRef}>
        {children}
      </select>
    );
  }
}

export default FormSelect;
