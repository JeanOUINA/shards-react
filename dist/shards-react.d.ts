// Type definitions for shards-react 1.0.3
// Definitions by: Jan Rahtkens <https://github.com/BendaCoding>
// TypeScript Version: 3.6

declare const React = import('react');

type Tag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type InnerRef = React.RefObject<any>;

type Size = 'lg' | 'sm';

type Theme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

type Target = any;

type Column =
  | boolean
  | number
  | string
  | {
      offset?: number | string;
      size?: boolean | number | string;
      order?: number | string;
    };

type InputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'range'
  | 'color'
  | 'date'
  | 'time'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'file';

interface BaseProps {
  /**
   * The class name.
   */
  className?: string;
  /**
   * The component tag type.
   */
  tag?: Tag;
  style?: React.CSSProperties;
}

interface AlertProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether it is pill, or not.
   */
  pill?: boolean;
  /**
   * Whether it is squared, or not.
   */
  squared?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it should be displayed as a block (full-width), or not.
   */
  block?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The inner ref.
   * @type {[type]}
   */
  innerRef?: InnerRef;
}

declare const Alert: React.ComponentType<AlertProps>;

interface BadgeProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it should be outlined, or not.
   */
  outline?: boolean;
  /**
   * Whether it should be a pill, or not.
   */
  pill?: boolean;
}

declare const Badge: React.ComponentType<BadgeProps>;

interface BreadcrumbProps extends BaseProps {
  /**
   * The breadcrumb list class name.
   */
  listClassName?: string;
  /**
   * The aria label value.
   */
  'aria-label'?: string;
  /**
   * The breadcrumb list tag.
   */
  listTag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

declare const Breadcrumb: React.ComponentType<BreadcrumbProps>;

interface BreadcrumbItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
}

declare const BreadcrumbItem: React.ComponentType<BreadcrumbItemProps>;

interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The size.
   */
  size?: Size | 'gedam';
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether it is pill, or not.
   */
  pill?: boolean;
  /**
   * Whether it is squared, or not.
   */
  squared?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it should be displayed as a block (full-width), or not.
   */
  block?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const Button: React.ComponentType<ButtonProps>;

interface ButtonGroupProps {
  /**
   * The class name.
   */
  className?: string;
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is vertical, or not.
   */
  vertical?: boolean;
}

declare const ButtonGroup: React.ComponentType<ButtonGroupProps>;

interface ButtonToolbarProps {
  /**
   * The class name.
   */
  className?: string;
}

declare const ButtonToolbar: React.ComponentType<ButtonToolbarProps>;

interface CardProps extends BaseProps {
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is outline, or not.
   */
  outline?: boolean;
  /**
   * Whether the card is small, or not.
   */
  small?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const Card: React.ComponentType<CardProps>;

interface CardBodyProps extends BaseProps {}

declare const CardBody: React.ComponentType<CardBodyProps>;

interface CardColumnsProps extends BaseProps {}

declare const CardColumns: React.ComponentType<CardColumnsProps>;

interface CardDeckProps extends BaseProps {}

declare const CardDeck: React.ComponentType<CardDeckProps>;

interface CardFooterProps extends BaseProps {}

declare const CardFooter: React.ComponentType<CardFooterProps>;

interface CardGroupProps extends BaseProps {}

declare const CardGroup: React.ComponentType<CardGroupProps>;

interface CardHeaderProps extends BaseProps {}

declare const CardHeader: React.ComponentType<CardHeaderProps>;

interface CardImgProps extends BaseProps {
  /**
   * Whether the image is positioned at the top of the card, or not.
   */
  top?: boolean;
  /**
   * Whether the image is positioned at the bottom of the card, or not.
   */
  bottom?: boolean;
}

declare const CardImg: React.ComponentType<CardImgProps>;

interface CardImgOverlayProps extends BaseProps {}

declare const CardImgOverlay: React.ComponentType<CardImgOverlayProps>;

interface CardLinkProps extends BaseProps {
  innerRef?: InnerRef;
}

declare const CardLink: React.ComponentType<CardLinkProps>;

interface CardSubtitleProps extends BaseProps {}

declare const CardSubtitle: React.ComponentType<CardSubtitleProps>;

interface CardTextProps extends BaseProps {}

declare const CardText: React.ComponentType<CardTextProps>;

interface CardTitleProps extends BaseProps {}

declare const CardTitle: React.ComponentType<CardTitleProps>;

interface CollapseProps extends BaseProps {
  /**
   * Whether it is open, or not.
   */
  open?: boolean;
  /**
   * Whether it is located inside a navbar, or not.
   */
  navbar?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const Collapse: React.ComponentType<CollapseProps>;
// TODO: add css transition group props

interface ColProps extends BaseProps {
  /**
   * Col number or config object for xs viewports.
   */
  xs?: Column;
  /**
   * Col number or config object for sm viewports.
   */
  sm?: Column;
  /**
   * Col number or config object for md viewports.
   */
  md?: Column;
  /**
   * Col number or config object for lg viewports.
   */
  lg?: Column;
  /**
   * Col number or config object for xl viewports.
   */
  xl?: Column;
  /**
   * The available breakpoints.
   */
  breakpoints?: Array<any>;
}

declare const Col: React.ComponentType<ColProps>;

interface ContainerProps extends BaseProps {
  /**
   * Whether it is fluid, or not.
   */
  fluid?: boolean;
}

declare const Container: React.ComponentType<ContainerProps>;

interface RowProps extends BaseProps {
  /**
   * Whether it has gutters, or not.
   */
  noGutters?: boolean;
  /**
   * Whether it is located inside a form, or not.
   */
  form?: boolean;
}

declare const Row: React.ComponentType<RowProps>;

declare const DatePicker: React.ComponentType<any>;

declare const Dropdown: React.ComponentType<any>;

interface DropdownItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * Whether it is a divider, or not.
   */
  divider?: boolean;
  /**
   * Whether it is a dropdown header item, or not.
   */
  header?: boolean;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * Whether it should toggle the dropdown, or not.
   */
  toggle?: boolean;
}

declare const DropdownItem: React.ComponentType<DropdownItemProps>;

interface DropdownMenuProps extends BaseProps {
  /**
   * Whether it is positioned on the right side, or not.
   */
  right?: boolean;
  /**
   * Whether it should flip, or not.
   */
  flip?: boolean;
  /**
   * Whether the dropdown is small, or not.
   */
  small?: boolean;
  /**
   * The modifiers config object.
   */
  modifiers?: any;
  /**
   * Whether it should persist, or not.
   */
  persist?: boolean;
}

declare const DropdownMenu: React.ComponentType<DropdownMenuProps>;

interface DropdownToggleProps extends BaseProps {
  /**
   * Whether it should display a caret, or not.
   */
  caret?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * The aria-haspopup attribute.
   */
  'aria-haspopup'?: boolean;
  /**
   * Whether it is split, or not.
   */
  split?: boolean;
  /**
   * Whether it is located inside a nav, or not.
   */
  nav?: boolean;
  /**
   * The component's tag type.
   */
  tag?: Tag;
}

declare const DropdownToggle: React.ComponentType<DropdownToggleProps>;

interface FadeProps extends BaseProps {
  baseClass?: string;
  baseClassActive?: string;
  innerRef?: InnerRef;
} // TODO: Transition Props

declare const Fade: React.ComponentType<FadeProps>;

type FormBaseProps = React.FormHTMLAttributes<HTMLFormElement>;

interface FormProps extends BaseProps, FormBaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const Form: React.ComponentType<FormProps>;

interface FormFeedbackProps extends BaseProps {
  /**
   * Whether the feedback is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether the feedback should be displayed as tooltip.
   */
  tooltip?: boolean;
}

declare const FormFeedback: React.ComponentType<FormFeedbackProps>;

interface FormCheckboxProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * Whether it is a toggle button, or not.
   */
  toggle?: boolean;
  /**
   * Whether it is small (toggle), or not.
   */
  small?: boolean;
  /**
   * The onChange handler.
   */
  onChange?: (...args) => any;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const FormCheckbox: React.ComponentType<FormCheckboxProps>;

interface FormGroupProps extends BaseProps {
  /**
   * Whether it is a row, or not.
   */
  row?: boolean;
  /**
   * Whether it is a form check, or not.
   */
  check?: boolean;
  /**
   * Whether it is displayed inline (form check) or not.
   */
  inline?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
}

declare const FormGroup: React.ComponentType<FormGroupProps>;

interface FormInputBaseProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * The input type.
   */
  type?: InputTypes;
  /**
   * Whether it is plaintext, or not.
   */
  plaintext?: boolean;
  /**
   * The input's size.
   */
  size?: Size;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type FormInputProps = FormInputBaseProps &
  Omit<InputProps, keyof FormInputBaseProps>;

declare const FormInput: React.ComponentType<FormInputProps>;

interface FormRadioProps extends BaseProps {
  /**
   * Whether it is inline, or not.
   */
  inline?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * The function that should run on change.
   */
  onChange?: (...args) => any;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const FormRadio: React.ComponentType<FormRadioProps>;

interface FormSelectProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const FormSelect: React.ComponentType<FormSelectProps>;

interface FormTextareaBaseProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it should be displayed as plain text, or not.
   */
  plaintext?: boolean;
  /**
   * Whether it is valid, or not.
   */
  valid?: boolean;
  /**
   * Whether it is invalid, or not.
   */
  invalid?: boolean;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;
type FormTextareaProps = FormTextareaBaseProps &
  Omit<TextareaProps, keyof FormTextareaBaseProps>;

declare const FormTextarea: React.ComponentType<FormTextareaProps>;

interface InputGroupProps extends BaseProps {
  /**
   * The size.
   */
  size?: Size;
  /**
   * Whether it is seamless, or not.
   */
  seamless?: boolean;
}

declare const InputGroup: React.ComponentType<InputGroupProps>;

interface InputGroupAddonProps extends BaseProps {
  /**
   * The addon type.
   */
  type: 'prepend' | 'append';
}

declare const InputGroupAddon: React.ComponentType<InputGroupAddonProps>;

interface InputGroupTextProps extends BaseProps {}

declare const InputGroupText: React.ComponentType<InputGroupTextProps>;

interface ListGroupProps extends BaseProps {
  /**
   * Whether the list group should be flushed, or not.
   */
  flush?: boolean;
  /**
   * Whether the list group is small, or not.
   */
  small?: boolean;
}

declare const ListGroup: React.ComponentType<ListGroupProps>;

interface ListGroupItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * Whether it is an action item, or not.
   */
  action?: boolean;
}

declare const ListGroupItem: React.ComponentType<ListGroupItemProps>;

interface ListGroupItemHeadingProps extends BaseProps {}

declare const ListGroupItemHeading: React.ComponentType<
  ListGroupItemHeadingProps
>;

interface ListGroupItemTextProps extends BaseProps {}

declare const ListGroupItemText: React.ComponentType<
  ListGroupItemTextProps
>;

interface ModalProps extends BaseProps {
  /**
   * The id.
   */
  id?: string;
  /**
   * Whether it is open, or not.
   */
  open?: boolean;
  /**
   * Whether it should fade, or not.
   */
  fade?: boolean;
  /**
   * Whether it should display a backdrop, or not.
   */
  backdrop?: boolean;
  /**
   * The function that should be triggered when the modal is shown.
   */
  showModal?: (...args) => any;
  /**
   * The function that should be triggered when the modal is set to hide.
   */
  hideModal?: (...args) => any;
  /**
   * The function that should be triggered when the modal is finally hidden.
   */
  hiddenModal?: (...args) => any;
  /**
   * Whether it should be centered, or not.
   */
  centered?: boolean;
  /**
   * The class name for the backdrop element.
   */
  backdropClassName?: string;
  /**
   * The toggle function.
   */
  toggle?: (...args) => any;
  /**
   * The class name for the modal.
   */
  modalClassName?: string;
  /**
   *
   */
  animation?: boolean;
  /**
   * The position.
   */
  position?: string;
  /**
   * The size.
   */
  size?: string;
  /**
   * The tab index.
   */
  tabIndex?: string;
  /**
   * The class name for the modal content.
   */
  modalContentClassName?: string;
  /**
   * The role attribute for the modal.
   */
  role?: string;
}

declare const Modal: React.ComponentType<ModalProps>;

interface ModalBodyProps {
  className?: string;
}

declare const ModalBody: React.ComponentType<ModalBodyProps>;

interface ModalFooterProps {
  className?: string;
}

declare const ModalFooter: React.ComponentType<ModalFooterProps>;

interface ModalHeaderProps extends BaseProps {
  /**
   * The toggle function.
   */
  toggle?: (...args) => any;
  /**
   * The close button's aria label.
   */
  closeAriaLabel?: string;
  /**
   * The class for the modal title.
   */
  titleClass?: string;
}

declare const ModalHeader: React.ComponentType<ModalHeaderProps>;

interface NavProps extends BaseProps {
  /**
   * Whether it is located inside a Navbar, or not.
   */
  navbar?: boolean;
  /**
   * Justify content horizontally.
   */
  horizontal?: string;
  /**
   * Whether it should be displayed as tabs, or not.
   */
  tabs?: boolean;
  /**
   * Whether it is located inside a card, or not.
   */
  card?: boolean;
  /**
   * Whether it should be displayed as pills, or not.
   */
  pills?: boolean;
  /**
   * Whether it is justified, or not.
   */
  justified?: boolean;
  /**
   * Whether it should fill the entire space, or not.
   */
  fill?: boolean;
  /**
   * Whether it is vertical, or not.
   */
  vertical?: boolean | string;
}

declare const Nav: React.ComponentType<NavProps>;

interface NavItemProps extends BaseProps {
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
}

declare const NavItem: React.ComponentType<NavItemProps>;

interface NavLinkProps extends BaseProps {
  /**
   * Whether it is disabled, or not.
   */
  disabled?: boolean;
  /**
   * Whether it is active, or not.
   */
  active?: boolean;
  /**
   * The class name.
   */
  className?: string;
  /**
   * The function that should be triggered on click.
   */
  onClick?: (...args) => any;
  /**
   * The href attribute value.
   */
  href?: any;
  /**
   * The inner ref.
   */
  innerRef?: InnerRef;
}

declare const NavLink: React.ComponentType<NavLinkProps>;

interface NavbarProps extends BaseProps {
  /**
   * Whether it is full, or not.
   */
  full?: boolean;
  /**
   * Whether it is fixed, or not.
   */
  fixed?: string;
  /**
   * Whether it is sticky, or not.
   */
  sticky?: string;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The role attribute.
   */
  role?: string;
  /**
   * The navbar type.
   */
  type?: 'dark' | 'light';
  /**
   * Whether it should expand, or not.
   */
  expand?: boolean | string;
}

declare const Navbar: React.ComponentType<NavbarProps>;

interface NavbarBrandProps extends BaseProps {}

declare const NavbarBrand: React.ComponentType<NavbarBrandProps>;

interface NavbarTogglerProps extends BaseProps {
  /**
   * The component's tag type.
   */
  type?: string;
}

declare const NavbarToggler: React.ComponentType<NavbarTogglerProps>;

interface PopoverProps extends BaseProps {
  /**
   * The target element.
   */
  target: Target;

  /**
   * The popover container.
   */
  container?: Target;

  /**
   * Popper modifiers object.
   */
  modifiers?: any;

  /**
   * Whether the popover is open, or not.
   */
  open?: boolean;

  /**
   * The inner class name.
   */
  innerClassName?: string;

  /**
   * Whether the popover is disabled, or not.
   */
  disabled?: boolean;

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow?: boolean;

  /**
   * The arrow class name.
   */
  arrowClassName?: string;

  /**
   * The boundaries element for the Popover instance.
   */
  boundariesElement?: any;

  /**
   * The popover placement.
   */
  placement?: string;

  /**
   * The placement prefix.
   */
  placementPrefix?: string;

  /**
   * The popover offset.
   */
  offset?: string | number;

  /**
   * The toggle function.
   */
  toggle: (...args) => any;

  /**
   * The show/hide delay in ms.
   */
  delay?: number | { show?: number; hide?: number };
}

declare const Popover: React.ComponentType<PopoverProps>;

interface PopoverBodyProps extends BaseProps {}

declare const PopoverBody: React.ComponentType<PopoverBodyProps>;

interface PopoverHeaderProps extends BaseProps {}

declare const PopoverHeader: React.ComponentType<PopoverHeaderProps>;

interface ProgressProps extends BaseProps {
  /**
   * Whether it is a bar, or not.
   */
  bar?: boolean;
  /**
   * Whether there are multiple progress bars nested, or not.
   */
  multi?: boolean;
  /**
   * Whether it is animated, or not.
   */
  animated?: boolean;
  /**
   * Whether it is striped, or not.
   */
  striped?: boolean;
  /**
   * The theme color.
   */
  theme?: Theme;
  /**
   * The class name for the bar element.
   */
  barClassName?: string;
  /**
   * The value.
   */
  value?: string | number;
  /**
   * The max value.
   */
  max?: string | number;
}

declare const Progress: React.ComponentType<ProgressProps>;

interface SliderProps {
  className?: string;
  theme?: Theme;
  animate?: boolean;
  behaviour?: string;
  cssPrefix?: string;
  disabled?: boolean;
  limit?: number;
  margin?: number;
  onChange?: (...args) => any;
  onEnd?: (...args) => any;
  onSet?: (...args) => any;
  onSlide?: (...args) => any;
  onStart?: (...args) => any;
  onUpdate?: (...args) => any;
  pips?: any;
  range: any;
  start: number[];
  step?: number;
  direction?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  connect?: boolean[] | boolean;
  tooltips?: boolean | Array<{ to: (...any) => any }>;
}

declare const Slider: React.ComponentType<SliderProps>;

interface TooltipProps extends BaseProps {
  /**
   * The target element.
   */
  target: Target;

  /**
   * The tooltip container.
   */
  container?: Target;

  /**
   * The trigger(s) (click, hover, focus).
   */
  trigger?: string;

  /**
   * Whether the tooltip is open, or not.
   */
  open?: boolean;

  /**
   * Whether the tooltip is disabled, or not.
   */
  disabled?: boolean;

  /**
   * The tooltip class name.
   */
  className?: string;

  /**
   * The arrow class name.
   */
  arrowClassName?: string;

  /**
   * The tooltip inner class name.
   */
  innerClassName?: string;

  /**
   * The tooltip offset.
   */
  offset?: string | number;

  /**
   * The show/hide delay in ms.
   */
  delay?: number | { show?: number; hide?: number };

  /**
   * The boundaries element for the tooltip instance.
   */
  boundariesElement?: string | JSX.Element;

  /**
   * The tooltip placement.
   */
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
    | 'auto-start'
    | 'auto'
    | 'auto-end';

  /**
   * The placement prefix.
   */
  placementPrefix?: string;

  /**
   * Whether to hide the arrow, or not.
   */
  noArrow?: boolean;

  /**
   * The toggle function.
   */
  toggle: (...args) => any;

  /**
   * Popper modifiers object.
   */
  modifiers?: any;

  /**
   * Whether the tooltip should auto-hide, or not.
   */
  autohide?: boolean;
}

declare const Tooltip: React.ComponentType<TooltipProps>;

export { Alert, Badge, Breadcrumb, BreadcrumbItem, BreadcrumbItemProps, Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Col, Collapse, Container, DatePicker, Dropdown, DropdownItem, DropdownMenu, DropdownMenuProps, DropdownToggle, DropdownToggleProps, Fade, FadeProps, Form, FormCheckbox, FormCheckboxProps, FormFeedback, FormFeedbackProps, FormGroup, FormGroupProps, FormInput, FormInputBaseProps, FormProps, FormRadio, FormRadioProps, FormSelect, FormSelectProps, FormTextarea, FormTextareaBaseProps, InputGroup, InputGroupAddon, InputGroupAddonProps, InputGroupProps, InputGroupText, InputGroupTextProps, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemHeadingProps, ListGroupItemProps, ListGroupItemText, ListGroupItemTextProps, ListGroupProps, Modal, ModalBody, ModalBodyProps, ModalFooter, ModalFooterProps, ModalHeader, ModalHeaderProps, ModalProps, Nav, NavItem, NavItemProps, NavLink, NavLinkProps, NavProps, Navbar, NavbarBrand, NavbarBrandProps, NavbarProps, NavbarToggler, NavbarTogglerProps, Popover, PopoverBody, PopoverBodyProps, PopoverHeader, PopoverHeaderProps, PopoverProps, Progress, ProgressProps, Row, Slider, SliderProps, Tooltip, TooltipProps };
