// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Womens_Therapy from './assets/images/womens-therapy.jpg';
import './App.css';

function App() {
  // Women's therapy content
  const signs = [
    'Role overwhelm',
    'People-pleasing',
    'Self-criticism',
    'Relationship stress',
    'Identity questions'
  ];

  const approaches = [
    {
      title: 'Identity & life transitions',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 30c0-5.523 4.477-10 10-10s10 4.477 10 10M18 42c2-5 7-8 12-8s10 3 12 8"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: 'Support through major life changes and exploration of authentic self-identity'
    },
    {
      title: 'Relationship dynamics',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="20" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 25h0M25 40a15 15 0 0110 0"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Navigate partnerships, friendships, family roles, and create healthy boundaries'
    },
    {
      title: 'Self-care & empowerment',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M22 28l5 5 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 40v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Develop practical strategies for self-compassion and confidence in your choices'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Therapy for women"
        heroImage={Womens_Therapy}
        heroText="Navigating societal pressures and life transitions? Our therapists help women cultivate self-compassion, explore their identities, and find empowerment in their unique journeys."
        signs={signs}
        signsTitle="Common challenges"
        approachTitle="Our therapeutic approach"
        approachText="We provide a safe, validating space for women to explore their mental health, relationships, and personal growth. Our therapists understand the unique challenges women face and help you move toward authentic self-expression and empowerment."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="Women often balance multiple roles and responsibilities while navigating societal expectations. Our therapists create a space where you can prioritize your own well-being, explore your authentic identity, and develop strategies for setting boundaries and nurturing your mental health."
      />
    </div>
  );
}

export default App;