import React from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  {
    link: '/',
    title: 'Главная'
  },
  {
    link: '/drift',
    title: 'Дрифт-такси'
  },
  {
    link: '/timeattack',
    title: 'Time Attack'
  },
  {
    link: '/forza',
    title: 'Forza Karting'
  }
];

function Menu() {
  return (
    <div>
      <nav class="menu">
        {LINKS.map(link => (
          <NavLink
            activeClassName="menu__item-active"
            className="menu__item"
            to={link.link}
            exact={link.link === '/'}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Menu;
