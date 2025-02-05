import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';

function PrivacyPolicy() {
  const { isPrivacyPolicyLoading, privacyPolicy } = useContext(Context);
  const navigate = useNavigate();

  if (isPrivacyPolicyLoading) {
    return <Loader />;
  }

  const {
    privacyPolicyTitle,
    privacyPolicyDescription,
    privacyPolicyButtonText,
  } = privacyPolicy;

  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">{privacyPolicyTitle}</h1>
      <p data-testid="description" className="privacy-policy__description" dangerouslySetInnerHTML={{ __html: privacyPolicyDescription }} />
      <button className="privacy-policy__button" type="button" onClick={goToHome}>{privacyPolicyButtonText}</button>
    </div>
  );
}

export default PrivacyPolicy;
