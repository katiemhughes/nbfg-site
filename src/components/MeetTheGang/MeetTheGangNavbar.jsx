import React from 'react';
import { NavLink } from 'react-router-dom';

function MeetTheGangNavbar({ handleClick, isSubnavOpen, toggleSubnav }) {
  return (
    <>
      {isSubnavOpen && <button type="button" className="sublinks__cta" onClick={toggleSubnav}>Back</button>}
      <ul className={`sublinks ${isSubnavOpen ? 'open' : 'closed'}`} id="gang-sublinks">
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../moll"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Moll
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../maracuya"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Maracuya
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../daisu"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            DaiSu
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../thtgrl"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Tht Grl
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../eggontoast"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Egg On Toast
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
            to="../martha"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Martha
          </NavLink>
        </li>
        <li className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}>
          <NavLink
            className={`sublinks__link ${isSubnavOpen ? 'open' : 'closed'}`}
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
