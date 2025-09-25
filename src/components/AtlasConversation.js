import React from 'react';
import './AtlasConversation.css';
import convImage from '../assets/conv.png';

function AtlasConversation() {
  return (
    <div className="atlas-conversation-section">
      <div className="atlas-conversation-container">
        <h2 className="atlas-conversation-title">ATLAS <span className="atlas-conversation-title-conv">Conversations</span></h2>
        <div className="atlas-conversation-image-container">
          <img 
            src={convImage} 
            alt="ATLAS Conversations" 
            className="atlas-conversation-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AtlasConversation;
