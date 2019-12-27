import React, { useState } from 'react';
import cn from 'classnames';

import DropdownList from './DropdownList';

function Dropdown() {
  const [isOpen, toggleOpen] = useState(false);
  const handleButtonClick = () => {
    toggleOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div className={cn('dropdown-wrapper', isOpen && 'open')}>
      <button
        className="btn"
        onClick={handleButtonClick}
      >
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList />
    </div>
  );
}

export default Dropdown;
