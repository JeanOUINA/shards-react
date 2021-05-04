import React from 'react'
import classNames from 'classnames'

const Row = (props) => {
  const {
    noGutters,
    form,
    className,
    tag: Tag,
    ...attrs
  } = props

  const classes = classNames(
    className,
    noGutters ? 'no-gutters' : null,
    form ? 'form-row' : 'row'
  )

  return (<Tag {...attrs} className={classes} />)
}

Row.defaultProps = {
  tag: 'div'
}

export default Row
