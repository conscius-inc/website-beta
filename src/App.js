

import React from 'react';
import MainContent from './components/MainContent';
import About from './components/About';
import VideoSection from './components/VideoSection';
import AtlasConversation from './components/AtlasConversation';
import AtlasIntegrations from './components/AtlasIntegrations';
import PrivacySection from './components/PrivacySection';
import PreOrderSection from './components/PreOrderSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContent />
      <About />
      
      <AtlasConversation />
      <AtlasIntegrations />
      <VideoSection />
      <PrivacySection />
      <PreOrderSection />
    </div>
  );
}

export default App;
