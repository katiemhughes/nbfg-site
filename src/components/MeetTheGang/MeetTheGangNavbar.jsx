import React from 'react';
import { NavLink } from 'react-router-dom';

function MeetTheGangNavbar({ handleClick, isSubnavOpen, toggleSubnav }) {
  // console.log('isSubnavOpen', isSubnavOpen);
  // console.log('toggleSubnav', toggleSubnav);
  return (
    <>
      {isSubnavOpen && <button type="button" className="sublinks__cta" onClick={toggleSubnav}>Back</button>}
      <ul className={isSubnavOpen ? 'sublinks--active' : 'sublinks'} id="gang-sublinks">
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../moll"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Moll
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../maracuya"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Maracuya
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../daisu"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            DaiSu
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../thtgrl"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Tht Grl
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../eggontoast"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Egg On Toast
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../martha"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Martha
          </NavLink>
        </li>
        <li className={isSubnavOpen ? 'sublinks__link--active' : 'sublinks__link'}>
          <NavLink
            className="sublinks__link"
            to="../sophie"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Sophie
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MeetTheGangNavbar;
