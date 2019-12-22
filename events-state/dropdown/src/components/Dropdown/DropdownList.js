import React, { useCallback, useState } from 'react';

import DropdownItem from './DropdownItem';

const DROPDOWN_ITEMS = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out'
];

const DROPDOWN_LIST_STYLE = {
  width: '100%'
};

function DropdownList() {
  const [activeItem, setActiveItem] = useState('');
  const handleSelect = useCallback(value => setActiveItem(value), [setActiveItem]);

  return (
    <ul
      className="dropdown"
      style={DROPDOWN_LIST_STYLE}
    >
      {DROPDOWN_ITEMS.map(item => (
        <DropdownItem
          key={item}
          isActive={activeItem === item}
          value={item}
          onSelect={handleSelect}
        />
      ))}
    </ul>
  );
}

export default DropdownList;
