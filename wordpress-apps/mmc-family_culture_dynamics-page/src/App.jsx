// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Cultural_Family from './assets/images/cultural-family.jpg';
import './App.css';

function App() {
  // Family & Cultural Dynamics content
  const signs = [
    'Pressure to meet family expectations',
    'Cultural stigma around mental health',
    'Navigating identity conflicts'
  ];

  const approaches = [
    {
      title: 'Culturally Responsive Therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20h20v20H20z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15 15L45 45M15 45L45 15" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      description: 'Therapy that honors and integrates your unique cultural background and values'
    },
    {
      title: 'Intergenerational Healing',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M27 27l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Addressing and healing patterns that span across generations'
    },
    {
      title: 'Narrative Therapy',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M15 15h30v30H15z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 25h20M20 30h20M20 35h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Helping you reshape your story while honoring your cultural heritage'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Family & cultural dynamics"
        heroImage={Cultural_Family}
        heroText="Navigating family expectations and cultural identity can be challenging. We support you in honoring your heritage while fostering meaningful connections and emotional well-being."
        signs={signs}
        signsTitle="Common struggles"
        approachTitle="Our cultural understanding"
        approachText="We recognize that cultural identity and family dynamics are deeply interconnected. Our approach focuses on understanding and respecting your unique background while supporting your growth."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="Our therapists understand the complexities of balancing cultural heritage with personal growth. We provide a safe, non-judgmental space where you can explore these challenges and find ways to thrive while honoring both your individual journey and your cultural roots."
      />
    </div>
  );
}

export default App;