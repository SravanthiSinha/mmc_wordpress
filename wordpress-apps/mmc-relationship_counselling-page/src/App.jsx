// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Relationship_Counseling from './assets/images/relationship-counseling.jpg';
import './App.css';

function App() {
  // Relationship therapy content
  const signs = [
    'Communication breakdowns',
    'Trust issues',
    'Feeling emotionally distant',
    'Repeating unhealthy patterns'
  ];

  const approaches = [
    {
      title: 'Gottman method',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M15 30 A15 15 0 0 1 45 30" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M45 30 A15 15 0 0 1 15 30" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="20" r="5" fill="currentColor" />
          <circle cx="20" cy="40" r="5" fill="currentColor" />
          <circle cx="40" cy="40" r="5" fill="currentColor" />
        </svg>
      ),
      description: 'Research-based approach to strengthen relationships through improved communication and understanding'
    },
    {
      title: 'Emotionally focused therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 25h20M20 35h20" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
        </svg>
      ),
      description: 'Focuses on emotional bonds and attachment patterns to create deeper connections'
    },
    {
      title: 'Attachment-based therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="20" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Helps understand and heal relationship patterns based on early attachment experiences'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Relationship therapy"
        heroImage={Relationship_Counseling}
        heroText="Feeling disconnected, misunderstood, or struggling with trust? We help couples improve communication, rebuild emotional closeness, and strengthen their partnership."
        signs={signs}
        signsTitle="Common challenges"
        approachTitle="Our healing approach"
        approachText="Whether you're dealing with frequent conflicts, intimacy concerns, or major life transitions, we provide a safe space to explore, heal, and grow together."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="Our therapists provide a safe, neutral space where both partners can express feelings and needs without judgment, learn effective communication tools, and develop deeper understanding and empathy for each other."
      />
    </div>
  );
}

export default App;