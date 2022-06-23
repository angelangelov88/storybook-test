import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Badge(props) {
  const {
    children,
    className,
    size,
    color,
    LeadingIcon,
    TrailingIcon,
    rounded,
    iconOnly,
  } = props;

  const classes = classNames(
    'flex justify-center items-center font-ibm',
    size === 'sm' && 'w-fit h-5 px-1.5 py-0.5 text-xs',
    size === 'lg' && 'w-fit h-6 px-2 py-0.5 text-sm ',
    color === 'gray' && 'bg-gray-60',
    color === 'primary' && 'bg-primary-60',
    color === 'purple' && 'bg-purple-60',
    color === 'blue' && 'bg-blue-60',
    color === 'lightblue' && 'bg-lightblue-70',
    color === 'cyan' && 'bg-cyan-70',
    color === 'teal' && 'bg-teal-70',
    color === 'green' && 'bg-green-70',
    color === 'yellow' && 'bg-yellow-60',
    color === 'red' && 'bg-red-60',
    rounded === 'sm' && 'rounded',
    rounded === 'full' && 'rounded-full',
    (((!LeadingIcon && !TrailingIcon) || (iconOnly)) && size === 'lg') && 'w-6 h-6 px-0',
    (((!LeadingIcon && !TrailingIcon) || (iconOnly)) && size === 'sm') && 'w-5 h-5 px-0',
    className,
  );

  const iconClasses = classNames(
    'text-white block',
    size === 'sm' && 'w-4 h-4',
    size === 'lg' && 'w-5 h-5',
  );

  const textClasses = classNames(
    'text-white font-medium',
    size === 'sm' && 'px-0.5',
    size === 'lg' && 'px-1',
  );

  return (
    <div className={classes}>
      {LeadingIcon && <LeadingIcon className={iconClasses} />}
      {!iconOnly && <div className={textClasses}>{children}</div>}
      {TrailingIcon && <TrailingIcon className={iconClasses} />}
    </div>
  );
}

Badge.defaultProps = {
  className: undefined,
  children: undefined,
  LeadingIcon: undefined,
  TrailingIcon: undefined,
  size: 'lg',
  color: 'primary',
  rounded: 'full',
  iconOnly: false,
};

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf([
    'gray',
    'primary',
    'purple',
    'blue',
    'lightblue',
    'cyan',
    'teal',
    'green',
    'yellow',
    'red',
  ]),
  LeadingIcon: PropTypes.elementType,
  TrailingIcon: PropTypes.elementType,
  rounded: PropTypes.oneOf(['none', 'sm', 'full']),
  iconOnly: PropTypes.bool,
};

export default Badge;
export { Badge };
