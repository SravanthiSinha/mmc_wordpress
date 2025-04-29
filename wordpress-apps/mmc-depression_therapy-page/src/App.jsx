// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Depression_Img from './assets/images/depression.jpg';
import './App.css';

function App() {
  // Depression therapy content
  const signs = [
    'Persistent sadness',
    'Loss of interest',
    'Fatigue',
    'Difficulty concentrating',
    'Sleep problems'
  ];

  const approaches = [
    {
      title: 'Cognitive behavioral therapy (CBT)',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 10v40M18 26l12-12 12 12M18 34l12 12 12-12"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: 'Identify and challenge negative thought patterns that contribute to depression'
    },
    {
      title: 'Behavioral activation',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 40l10-10 5 5 15-15M45 20v10h-10"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      description: 'Gradually increase engagement in positive activities to improve mood and energy'
    },
    {
      title: 'Psychodynamic therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20c5 5 15 5 20 0M20 40c5-5 15-5 20 0M25 30h10"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Explore underlying issues and past experiences that may contribute to depression'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Depression therapy"
        heroImage={Depression_Img}
        heroText="Feeling overwhelmed by sadness and fatigue? Our depression therapy helps you understand your emotions, develop coping strategies, and rediscover joy in life."
        signs={signs}
        signsTitle="Common signs"
        approachTitle="Our healing approach"
        approachText="We create a safe space for you to express your feelings and thoughts while providing evidence-based strategies to help you manage depression symptoms and build resilience."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="Depression can make you feel isolated, but you don't have to face it alone. Our therapists are experienced in helping clients navigate through depression, providing compassionate support while working with you to develop practical tools for managing symptoms and moving toward a more fulfilling life."
      />
    </div>
  );
}

export default App;