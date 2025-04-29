// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Trauma_Support from './assets/images/trauma-support.jpg';
import './App.css';

function App() {
  // Trauma therapy content
  const signs = [
    'Flashbacks',
    'Difficulty trusting others',
    'Hypervigilance',
    'Emotional numbness',
    'Insomnia'
  ];

  const approaches = [
    {
      title: 'Trauma-focused therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 30h20M30 20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Evidence-based therapy designed specifically for processing traumatic experiences'
    },
    {
      title: 'EMDR-informed care',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15 30h30M30 15v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      description: 'Specialized approach that helps process and integrate difficult memories'
    },
    {
      title: 'Mindfulness-based techniques',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      ),
      description: 'Grounding practices to help manage triggers and build emotional regulation'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Trauma therapy"
        heroImage={Trauma_Support}
        heroText="If past experiences trigger fear, avoidance, or emotional distress, we offer a safe space to process and heal at your own pace."
        signs={signs}
        signsTitle="Common signs"
        approachTitle="Our healing approach"
        approachText="Trauma can leave an imprint on the mind and body, making it hard to feel safe or in control. We provide specialized support to help you reconnect with yourself and rebuild trust."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="We understand that healing from trauma is a deeply personal journey. Our therapists are specially trained to provide trauma-informed care in a safe, supportive environment where you have full control over the pace of your healing process."
      />
    </div>
  );
}

export default App;