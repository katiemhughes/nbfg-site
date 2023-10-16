import React from 'react';
import { NavLink } from 'react-router-dom';

function MeetTheGangNavbar({ handleClick, isSubnavOpen, toggleSubnav }) {
  // console.log('isSubnavOpen', isSubnavOpen);
  // console.log('toggleSubnav', toggleSubnav);
  return (
    <>
      {isSubnavOpen && <button type="button" className="sublinks__cta" onClick={toggleSubnav}>Back</button>}
      <ul className={isSubnavOpen ? 'sublinks--active' : 'sublinks'} id="gang-sublinks">
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../moll"
          >
            Moll
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../maracuya"
          >
            Maracuya
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../daisu"
          >
            DaiSu
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../thtgrl"
          >
            Tht Grl
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../eggontoast"
          >
            Egg On Toast
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../martha"
          >
            Martha
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'} onClick={handleClick}>
          <NavLink
            className="sublinks__link--config"
            to="../sophie"
          >
            Sophie
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MeetTheGangNavbar;
