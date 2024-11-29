import React from 'react';
import { NavLink } from 'react-router-dom';

function MeetTheGangNavbar({ handleClick, isSubnavOpen, isLinksHidden }) {
  return (
    <ul
      className={`sublinks ${
        isSubnavOpen ? 'open' : 'closed'
      }`}
      id="gang-sublinks"
    >
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../moll"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Moll
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../maracuya"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Maracuya
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../daisu"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          DaiSu
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../thtgrl"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Tht Grl
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../eggontoast"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Egg On Toast
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../martha"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Martha
        </NavLink>
      </li>
      <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}>
        <NavLink
          className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'} ${!isLinksHidden ? 'links-hidden' : ''}`}
          to="../sophie"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          Sophie
        </NavLink>
      </li>
    </ul>
  );
}

export default MeetTheGangNavbar;
