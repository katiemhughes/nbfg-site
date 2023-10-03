import React from 'react';
import { Link } from 'react-router-dom';

const MeetTheGangRouter = ({ isSubnavOpen, toggleSubnav }) => {
  console.log('isSubnavOpen', isSubnavOpen);
  console.log('toggleSubnav', toggleSubnav);
  return (
    <>
    {isSubnavOpen && <button className="sublinks__cta" onClick={toggleSubnav}>Back</button>}
      <ul className={isSubnavOpen ? "sublinks--active" : "sublinks"} id="gang-sublinks">
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../moll"
          >
            Moll
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../maracuya"
          >
            Maracuya
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../daisu"
          >
            DaiSu
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../thtgrl"
          >
            Tht Grl
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../eggontoast"
          >
            Egg On Toast
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
            className="sublinks__link--config"
            to="../martha"
          >
            Martha
          </Link>
        </li>
        <li className="sublinks__link">
          <Link 
          className="sublinks__link--config"
          to="../sophie"
          >
            Sophie
          </Link>
        </li>
    </ul>
    </>
  )
}

export default MeetTheGangRouter;
