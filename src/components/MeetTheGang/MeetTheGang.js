import React, { useContext } from 'react';
import Loader from '../Loader/Loader';
import { Context } from '../../Context/Context';

const MeetTheGang = () => {
    const { gang, isGangLoading } = useContext(Context);

    if (isGangLoading) {
        return <Loader />
    }

  return (
    <section className='gang' id='gang'>
        <h1>Moll</h1>
    </section>
  )
}

export default MeetTheGang;
