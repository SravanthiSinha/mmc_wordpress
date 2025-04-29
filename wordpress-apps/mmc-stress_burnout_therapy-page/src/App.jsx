// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Stress_Burnout from './assets/images/stress-burnout.jpg';
import './App.css';

function App() {
  // Stress & Burnout content
  const signs = [
    'Chronic fatigue',
    'Irritability',
    'Loss of motivation',
    'feeling "on edge" all the time',
    'Insomnia'
  ];

  const approaches = [
    {
      title: 'Mindfulness-Based Stress Reduction',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      ),
      description: 'Learn practical techniques to reduce stress and increase present-moment awareness'
    },
    {
      title: 'CBT for Stress Management',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M15 30h30M30 15v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 20h20v20H20z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      description: 'Identify and change thought patterns that contribute to stress and burnout'
    },
    {
      title: 'Self-Compassion Practices',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 30s5-5 10-5 10 5 10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Develop a kinder relationship with yourself and establish healthy boundaries'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Stress & burnout"
        heroImage={Stress_Burnout}
        heroText="Constant stress can leave you feeling exhausted and emotionally drained. We help you set boundaries, regain energy, and find sustainable ways to manage life's demands."
        signs={signs}
        signsTitle="Signs of burnout"
        approachTitle="Our recovery approach"
        approachText="Whether you're balancing work, family, or personal responsibilities, we'll help you develop personalized strategies for sustainable well-being."
        approaches={approaches}
        approachesTitle="Recovery strategies"
        supportText="Recovery from burnout is possible. Our therapists provide a supportive environment where you can learn to balance your responsibilities while maintaining your emotional and physical well-being. Together, we'll develop strategies that work for your lifestyle and help you create lasting positive changes."
      />
    </div>
  );
}

export default App;