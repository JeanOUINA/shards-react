import React from "react";

import classNames from "classnames";
import shortid from "shortid";

/**
 * The `FormCheckbox` component is a wrapper over Bootstrap's [custom checkbox component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
 */
class FormCheckbox extends React.Component {
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
      inline,
      valid,
      invalid,
      innerRef,
      toggle,
      small,
      id: _id,
      ...attrs
    } = this.props;

    const labelClasses = classNames(
      className,
      "custom-control",
      !toggle ? "custom-checkbox" : "custom-toggle",
      toggle && small && "custom-toggle-sm",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const inputClasses = classNames(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    );

    const id = _id || `dr-checkbox-${shortid.generate()}`;

    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="checkbox"
          className={inputClasses}
        />
        <label id={id} className="custom-control-label" aria-hidden="true" onClick={this.props.onChange} />
        <span className="custom-control-description">{children}</span>
      </label>
    );
  }
}

FormCheckbox.defaultProps = {
  onChange: () => {}
}

export default FormCheckbox;
