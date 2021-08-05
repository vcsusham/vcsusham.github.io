import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

export default class Button extends PureComponent {
  render() {
    const { onClickHandler, isDisabled, btnText, classNamesStr, type, size, btnType, id } = this.props;
    const typeClass = `is-${type}`;
    const sizeClass = `is-${size}`;
    const catClassNamesStr = `${s.btn} ${classNamesStr} ${s[typeClass]} ${s[sizeClass]}`;
    const cssClasses = isDisabled ? `${s['is-disabled']} ${catClassNamesStr}` : `${catClassNamesStr}`;
    return (
      <button
        onClick={onClickHandler}
        disabled={isDisabled}
        className={cssClasses}
        type={btnType}
        id={id}
      >{btnText}
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired
};

Button.defaultProps = {
  classNamesStr: '', // BY default, Button will have primary btn css
  isDisabled: false,
  type: 'primary',
  size: 'large',
  btnType: 'button'
};