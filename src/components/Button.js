import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children,
    outline,
    variant,
    size,
    rounded,
    tabIndex,
    type,
    disabled,
    onClick,
    className,
    ariaLabel,
  } = props;

  const classes = classNames(
    'font-ibm inline-flex items-center font-medium capitalize whitespace-nowrap justify-center',
    'focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-primary-30',
    variant === 'primary' && 'disabled:text-primary-20 text-white hover:bg-primary-blue active:bg-primary-dark disabled:bg-primary-10 bg-primary-light shadow',
    variant === 'secondary' && 'disabled:text-gray-40 active:text-gray-100 text-gray-90 hover:bg-gray-10 active:bg-gray-20 disabled:bg-gray-10 bg-white shadow border-gray-50',
    variant === 'tertiary' && 'disabled:text-primary-30 hover:text-primary-blue text-primary-light hover:bg-primary-10 active:bg-primary-20 disabled:bg-white bg-white disabled:border-primary-20',
    variant === 'primary' && outline === true && 'border border-primary-dark disabled:border-primary-20',
    variant === 'secondary' && outline === true && 'border border-gray-50 disabled:border-gray-40',
    variant === 'tertiary' && outline === true && 'border border-primary-10 disabled:border-primary-20',
    size === 'base' && '',
    size === 'sm' && 'text-sm py-2 px-4',
    size === 'md' && 'text-lg py-2.5 px-5',
    size === 'lg' && 'text-xl py-3 px-6',
    size === 'icon' && 'p-2',
    rounded === 'none' && 'rounded-none',
    rounded === 'sm' && 'rounded-sm',
    rounded === 'md' && 'rounded-md',
    rounded === 'lg' && 'rounded-lg',
    rounded === 'full' && 'rounded-full p-2',
    disabled && 'disabled:cursor-default',
    className,
  );

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      className={classes}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: undefined,
  outline: false,
  variant: 'primary',
  size: 'sm',
  rounded: 'full',
  type: 'button',
  disabled: false,
  tabIndex: undefined,
  onClick: undefined,
  className: undefined,
  ariaLabel: undefined,
};

Button.propTypes = {
  children: PropTypes.node,
  outline: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['base', 'sm', 'md', 'lg', 'icon']), // @todo base
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;
export { Button };
