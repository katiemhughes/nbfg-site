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
    privacyPolicyDescription,
    privacyPolicyImage,
    privacyPolicyImageAlt,
    privacyPolicyButtonText,
  } = privacyPolicy;

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <div className="not-found__image-content">
        <img className="not-found__image" src={privacyPolicyImage} alt={privacyPolicyImageAlt} loading="lazy" />
      </div>
      <p data-testid="description" className="not-found__description" dangerouslySetInnerHTML={{ __html: privacyPolicyDescription }} />
      <button className="not-found__button" type="button" onClick={goToHome}>{privacyPolicyButtonText}</button>
    </div>
  );
}

export default PrivacyPolicy;
