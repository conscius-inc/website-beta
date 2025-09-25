import React from 'react';
import './AtlasIntegrations.css';
import integrationImage from '../assets/integration.png';

function AtlasIntegrations() {
  return (
    <div className="atlas-integrations-section">
      <div className="atlas-integrations-container">
        <h2 className="atlas-integrations-title">ATLAS <span className="atlas-integrations-title-integrations">Integrations</span></h2>
        <div className="atlas-integrations-image-container">
          <img 
            src={integrationImage} 
            alt="ATLAS Integrations" 
            className="atlas-integrations-image"
          />
        </div>
        <div className="atlas-integrations-footer">
          <p className="atlas-integrations-text">
            Integrations are growing, please check <a href="#" className="atlas-integrations-link">this link</a> for full list of integrations
          </p>
        </div>
      </div>
    </div>
  );
}

export default AtlasIntegrations;
