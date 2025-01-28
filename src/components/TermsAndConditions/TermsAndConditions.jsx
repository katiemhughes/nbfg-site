import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';

function TermsAndConditions() {
  const { isTermsAndConditionsLoading, termsAndConditions } = useContext(Context);
  const navigate = useNavigate();

  if (isTermsAndConditionsLoading) {
    return <Loader />;
  }

  const {
    termsAndConditionsTitle,
    termsAndConditionsDescription,
    termsAndConditionsButtonText,
  } = termsAndConditions;

  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">{termsAndConditionsTitle}</h1>
      <p data-testid="description" className="privacy-policy__description" dangerouslySetInnerHTML={{ __html: termsAndConditionsDescription }} />
      <button className="privacy-policy__button" type="button" onClick={goToHome}>{termsAndConditionsButtonText}</button>
    </div>
  );
}

export default TermsAndConditions;
