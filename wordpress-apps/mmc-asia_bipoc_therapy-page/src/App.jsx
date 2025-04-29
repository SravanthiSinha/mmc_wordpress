// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import BIPOC_Therapy from './assets/images/asia-bipoc-therapy.jpg';
import './App.css';

function App() {
  // ASIA/BIPOC therapy content
  const signs = [
    'Cultural identity',
    'Family expectations',
    'Intergenerational trauma',
    'Racial stress',
    'Acculturation'
  ];

  const approaches = [
    {
      title: 'Cultural identity & integration',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15 45c0-8.284 6.716-15 15-15s15 6.716 15 15"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 25a15 15 0 0120 0"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Explore and honor your cultural heritage while navigating multiple identities and finding balance'
    },
    {
      title: 'Culturally responsive care',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20c5 5 15 5 20 0M20 40c5-5 15-5 20 0"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Therapy that acknowledges cultural context, family dynamics, and societal pressures unique to BIPOC experiences'
    },
    {
      title: 'Healing & empowerment',
      svg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M25 20a5 5 0 0110 0c0 5-10 8-10 15M30 44v-4"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      description: 'Develop resilience strategies that honor your cultural strengths and address systemic challenges'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Therapy for Asian Americans & BIPOC communities"
        heroImage={BIPOC_Therapy}
        heroText="Balancing cultural identity with family expectations? Our culturally sensitive therapy creates a space where your unique experiences are seen, understood, and honored."
        signs={signs}
        signsTitle="Common challenges"
        approachTitle="Our therapeutic approach"
        approachText="We provide culturally affirming therapy that recognizes the complex interplay between personal identity, family dynamics, and societal factors. Our therapists understand the nuances of navigating multiple cultural contexts and honor your unique journey."
        approaches={approaches}
        approachesTitle="Therapeutic approaches"
        supportText="We understand that seeking therapy can be especially complex when navigating cultural stigma around mental health. Our therapists create a safe, non-judgmental space where your cultural background is not just acknowledged but understood as an integral part of who you are and your healing journey."
      />
    </div>
  );
}

export default App;