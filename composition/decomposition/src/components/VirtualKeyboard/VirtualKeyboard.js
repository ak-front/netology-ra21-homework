import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент "Виртуальная клавиатура". По клику на иконку открывается попап с клавиатурой
 */
function VirtualKeyboard({ onKeyPress }) {
  return (
    <span />
  );
}

VirtualKeyboard.propTypes = {
  /**
   * Обработчик нажатия кнопок виртуальной клавиатуры.
   * Срабатывает в 2х случаях:
   * - если нажали любую клавину на реальной клавиатуре
   * - если нажали мышкой на любую клавишу виртуальной клавиатуры
   */
  onKeyPress: PropTypes.func
};

VirtualKeyboard.defaultProps = {
  onKeyPress: () => null
};

export default VirtualKeyboard

