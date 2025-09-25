import React, { useState } from 'react';
import './PreOrderSection.css';
import googleIcon from '../assets/google.png';
const AppleIcon = () => {
    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 12.4316 15.9863"
    width="18"
    height="18"
    fill="currentColor"
  >
    <g>
      <rect height={4} opacity={0} width={4} x={0} y={0} />
      <path
        d="M8.92578 3.66211C7.7832 3.66211 6.85547 4.35547 6.25977 4.35547C5.625 4.35547 4.79492 3.66211 3.79883 3.66211C1.91406 3.66211 0 5.26367 0 8.20312C0 10.0391 0.703125 11.9727 1.58203 13.2227C2.33398 14.2773 2.98828 15.127 3.93555 15.127C4.87305 15.127 5.2832 14.5215 6.44531 14.5215C7.62695 14.5215 7.89062 15.127 8.92578 15.127C9.95117 15.127 10.6348 14.1895 11.2793 13.2617C12.002 12.1973 12.3047 11.1621 12.3145 11.1133C12.2559 11.0938 10.293 10.293 10.293 8.04688C10.293 6.10352 11.8359 5.23438 11.9238 5.16602C10.9082 3.70117 9.35547 3.66211 8.92578 3.66211ZM8.38867 2.42188C8.85742 1.85547 9.18945 1.08398 9.18945 0.302734C9.18945 0.195312 9.17969 0.0878906 9.16016 0C8.39844 0.0292969 7.48047 0.507812 6.93359 1.15234C6.50391 1.64062 6.10352 2.42188 6.10352 3.20312C6.10352 3.32031 6.12305 3.4375 6.13281 3.47656C6.18164 3.48633 6.25977 3.49609 6.33789 3.49609C7.02148 3.49609 7.88086 3.03711 8.38867 2.42188Z"
        fill="currentColor"
      />
    </g>
  </svg>
    );
  };
const ArrowIcon = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
  >
    <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="black" />
  </svg>
  );
};
function PreOrderSection() {
  const [email, setEmail] = useState('');

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
    console.log('Continue with Google');
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign in logic
    console.log('Continue with Apple');
  };

  const handleEmailContinue = () => {
    // Handle email continue logic
    console.log('Continue with email:', email);
  };

  const handleCancelOrder = () => {
    // Handle cancel order logic
    console.log('Cancel Order');
  };

  const handleReturnPolicy = () => {
    // Handle return policy logic
    console.log('Return Policy');
  };

  return (
    <div className="preorder-section">
      <div className="preorder-container">
        <h2 className="preorder-title">Pre-Order ATLAS for $99</h2>
        
        <div className="preorder-content">
          {/* Left Side - Shipping Info */}
          <div className="preorder-left">
            <div className="shipping-info">
              <h3 className="shipping-title">Shipping in December 2025</h3>
              <div className="refund-info">
                <p>Fully refundable until product ships</p>
                <div className="policy-buttons">
                  <button className="policy-btn" onClick={handleCancelOrder}>
                    Cancel Order <span className='privacy-arrow-icon'><ArrowIcon  /></span>
                  </button>
                  <button className="policy-btn" onClick={handleReturnPolicy}>
                    Return Policy <span className='privacy-arrow-icon'><ArrowIcon  /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Form */}
          <div className="preorder-right">
            <div className="order-form">
              <button className="google-btn" onClick={handleGoogleSignIn}>
                <img src={googleIcon} style={{marginLeft:'10px'}}  alt="Google" />
                Continue with Google
              </button>
              
              <button className="apple-btn" onClick={handleAppleSignIn}>
                <AppleIcon />
                Continue with Apple
              </button>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="email-section">
                <label htmlFor="email">Email address*</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>

              <button className="continue-btn" onClick={handleEmailContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreOrderSection;
