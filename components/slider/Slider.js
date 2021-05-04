import React from "react";

import classNames from "classnames";
import nouislider from "nouislider";

/**
 * The slider component is powered behind the scenes by the [NoUiSlider](https://refreshless.com/nouislider/) library.
 */
class Slider extends React.Component {
  componentDidMount() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }

    this.createSlider();
  }

  componentDidUpdate() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }

    this.slider.destroy();
    this.createSlider();
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  createSlider() {
    var slider = (this.slider = nouislider.create(this.sliderContainer, {
      ...this.props
    }));

    if (this.props.onUpdate) {
      slider.on("update", this.props.onUpdate);
    }

    if (this.props.onChange) {
      slider.on("change", this.props.onChange);
    }

    if (this.props.onSlide) {
      slider.on("slide", this.props.onSlide);
    }

    if (this.props.onStart) {
      slider.on("start", this.props.onStart);
    }

    if (this.props.onEnd) {
      slider.on("end", this.props.onEnd);
    }

    if (this.props.onSet) {
      slider.on("set", this.props.onSet);
    }
  }

  render() {
    const { className, theme } = this.props;
    const classes = classNames(className, theme && `slider-${theme}`);

    return (
      <div
        className={classes}
        ref={slider => {
          this.sliderContainer = slider;
        }}
      />
    );
  }
}

export default Slider;
