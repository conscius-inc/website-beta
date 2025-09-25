import React, { useState, useEffect } from 'react';
import './About.css';
import DailyLifeContent from './DailyLifeContent';
import HealthContent from './HealthContent';
import MoneyContent from './MoneyContent';
import HomeContent from './HomeContent';
import NewsContent from './NewsContent';

function About() {
    const [activeTab, setActiveTab] = useState('Daily Life');

    const tabs = ['Daily Life', 'Health', 'Money & Investments', 'Home', 'News'];

    const handleTabClick = (newTab) => {
        if (newTab === activeTab) return;
        setActiveTab(newTab);
    };

    const getTabIndex = (tabName) => {
        return tabs.indexOf(tabName);
    };

    const getTransformValue = () => {
        const activeIndex = getTabIndex(activeTab);
        return `translateX(-${activeIndex * 20}%)`; // Move by 20% for each tab
    };

    return (
        <div className="about-container">
            <div className="about-title">
                About ATLAS
            </div>
            <div className="about-content">
                <div className="left-column">
                    <div className="main-headline">
                        <div className="headline-line">Intelligence</div>
                        <div className="headline-line">for your</div>
                        <div className="headline-line italic">digital life</div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="description">
                        An AI that truly works for you, without prompting, and it never stops working.
                    </div>
                    <button className="how-it-works-btn">
                        How it Works
                    </button>
                </div>
            </div>
            
            {/* Navigation Bar */}
            <div className="navigation-section">
                <div className="nav-container">
                    <div className="nav-tabs">
                        {tabs.map(tab => (
                            <div 
                                key={tab}
                                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div className="nav-separator"></div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content-container">
                <div className="tab-content-wrapper" style={{ transform: getTransformValue() }}>
                    <div className="tab-content-item">
                        <DailyLifeContent />
                    </div>
                    <div className="tab-content-item">
                        <HealthContent />
                    </div>
                    <div className="tab-content-item">
                        <MoneyContent />
                    </div>
                    <div className="tab-content-item">
                        <HomeContent />
                    </div>
                    <div className="tab-content-item">
                        <NewsContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;