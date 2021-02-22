import React from 'react'
import Prism from 'prism-react-renderer/prism'
import styles from './Emphasis.module.scss';
import classNames from 'classnames';




const Emphasis =({ children, className = '', color = 'primary', ...otherProps }) => {
  const classes =
    classNames(styles['toast'], styles[color]) + ' ' + className || '';

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

export default Emphasis
