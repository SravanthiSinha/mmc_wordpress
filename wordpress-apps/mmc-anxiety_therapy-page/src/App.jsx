// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Anxiety_Depression from './assets/images/anxiety.jpg';
import './App.css';

function App() {
  // Anxiety therapy content
  const signs = [
    'Restlessness',
    'Trouble sleeping',
    'Lack of motivation',
    'Overthinking',
    'Persistent sadness',
    'Insomnia'
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
      description: 'A structured approach to identify and change negative thought patterns'
    },
    {
      title: 'Mindfulness-based therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
          <path d="M30 45v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Learn to stay present and develop awareness of thoughts and feelings'
    },
    {
      title: 'Trauma-informed care',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 20v20M20 30h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      ),
      description: 'Specialized support that recognizes the impact of past experiences'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Anxiety Therapy"
        heroImage={Anxiety_Depression}
        heroText="Do you feel stuck in a cycle of worry and racing thoughts? Our therapists help you manage anxiety, reduce stress, and regain a sense of calm and confidence in your life."
        signs={signs}
        signsTitle="Common signs"
        approachTitle="Our treatment approach"
        approachText="We help you develop practical coping strategies, reframe negative thought patterns, and restore a sense of calm and confidence."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="We understand that seeking help for anxiety and depression takes courage. Our therapists provide a safe, non-judgmental space where you can work through your challenges at your own pace and develop the tools needed for long-term emotional well-being."
      />
    </div>
  );
}

export default App;