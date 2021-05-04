import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Manager } from 'react-popper';
import omit from 'lodash.omit';

import { DropdownContext } from './DropdownContext';
import { EVENTS, KEYCODES } from './../constants';

/**
 * You can use dropdowns to display accessible contextual overlays for displaying lists of links and more.
 */
export const Dropdown = ({
  className,
  children,
  dropup,
  open,
  group,
  size,
  nav,
  setActiveFromChild,
  active,
  addonType,
  ...attrs
}) => {
  const ref = useRef();
  const toggle = e => {
    if (attrs.disabled) {
       return e && e.preventDefault();
     }
     
    return attrs.toggle(e);
  };
  useEffect(() => {
    const handleDocumentClick = e => {
      if (
        e &&
        (e.which === 3 || (e.type === 'keyup' && e.which !== KEYCODES.TAB))
      )
        return;

      if (
        ref.current &&
        ref.current.contains(e.target) &&
        ref.current !== e.target &&
        (e.type !== 'keyup' || e.which === KEYCODES.TAB)
      ) {
        return;
      }

      toggle(e);
    };

    if (open) {
      EVENTS.CLICK.forEach(e =>
        document.addEventListener(e, handleDocumentClick, true)
      );
    }
      
    return () => EVENTS.CLICK.forEach(e =>
      document.removeEventListener(e, handleDocumentClick, true)
    );
}, [open, ref]);

let subItemIsActive = false;
if (setActiveFromChild) {
  React.Children.map(
    children[ 1 ].props.children,
    dropdownItem => {
      if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
    }
  );
}

  const direction =
    attrs.direction === 'down' && dropup ? 'up' : attrs.direction;
  attrs.tag = attrs.tag || (nav ? 'li' : 'div');

  return (
    <DropdownContext.Provider value={{toggle, open, direction, nav}}>
      <Manager {...omit(attrs, [
        'toggle',
        'disabled',
        'inNavbar',
        'direction'
      ])}>
        <DropdownContext.Consumer>
          {() => <div className={
            classNames(
              className,
              direction !== 'down' && `drop${direction}`,
              nav && active && 'active',
              setActiveFromChild && subItemIsActive && 'active',
              addonType && `input-group-${addonType}`,
              group && 'btn-group',
              !!size && `btn-group-${size}`,
              !group && !addonType && 'dropdown',
              open && 'show',
              nav && 'nav-item'
            )
          }>{children}</div>}
        </DropdownContext.Consumer>
      </Manager>
    </DropdownContext.Provider>
  );
};

Dropdown.defaultProps = {
  open: false,
  direction: "down",
  nav: false
};

export default Dropdown;
