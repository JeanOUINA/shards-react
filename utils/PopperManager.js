import React from 'react'
import ReactDOM from 'react-dom'
import { Popper } from 'react-popper'
import classNames from 'classnames'

import { getTarget } from '../components/utils'

class PopperManager extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlacementChange = this.handlePlacementChange.bind(this)
    this.setTargetNode = this.setTargetNode.bind(this)
    this.getReferenceElement = this.getReferenceElement.bind(this)

    this._element = null
    this.state = {
      placement: null
    }
  }

  componentDidUpdate() {
    if (
      this._element &&
      this._element.childNodes &&
      this._element.childNodes[0] &&
      this._element.childNodes[0].focus
    ) {
      this._element.childNodes[0].focus()
    }
  }

  setTargetNode(node) {
    this.targetNode = node
  }

  getReferenceElement() {
    return this.targetNode
  }

  getContainerNode() {
    return getTarget(this.props.container)
  }

  handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement })
    }
    return data
  }

  renderChildren() {
    const {
      children,
      open,
      target,
      offset,
      placementPrefix,
      noArrow,
      arrowClassName,
      className,
      container,
      modifiers,
      boundariesElement,
      flip,
      fallbackPlacement,
      tag,
      ...attrs
    } = this.props

    const _placement = this.state.placement || attrs.placement

    const _className = classNames(
      className,
      placementPrefix ? `${placementPrefix}-${_placement}` : _placement
    )

    const _arrowClassName = classNames(
      'arrow',
      arrowClassName
    )

    const _modifiers = {
      offset: {
        offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement
      },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      },
      ...modifiers
    }

    return (
      <Popper referenceElement={this.getReferenceElement()}
        modifiers={_modifiers}
        placement={_placement}
        {...attrs}>
        {({ ref, style, placement, arrowProps }) => (
          <div ref={ref} className={_className} style={style} data-placement={placement}>
            {children}
            {!noArrow && <div ref={arrowProps.ref} style={arrowProps.style} className={_arrowClassName} />}
          </div>
        )}
      </Popper>
    )
  }

  render() {
    const {
      target,
      open,
      container
    } = this.props

    this.setTargetNode(getTarget(target))

    if (!open) {
      return null
    }

    if (container === 'inline') {
      return this.renderChildren()
    }

    const containerNode = this.getContainerNode()

    return ReactDOM.createPortal((
      <div>{this.renderChildren()}</div>
    ), containerNode)
  }
}

PopperManager.defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  arrow: true,
  open: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: Object.create(null)
}

export default PopperManager
