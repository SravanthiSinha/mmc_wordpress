// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import IndividualTherapyImage from './assets/images/individual-therapy.svg';
import './App.css';

function App() {
  // Individual therapy content - using only provided content
  const commonReasons = [
    'Feeling anxious, overwhelmed, or "on edge"',
    'Struggles with sadness, low motivation, or hopelessness',
    'Stress and burnout from work, school, or caregiving',
    'Processing trauma or painful past experiences',
    'Navigating cultural identity, family expectations, or life transitions',
    'Wanting greater self-awareness and personal growth'
  ];

  const therapySpecialties = [
    {
      title: 'Trauma Therapy',
      description: 'Working through past experiences in a safe, supportive way',
      link: '/trauma-therapy'
    },
    {
      title: 'Anxiety & Depression Therapy',
      description: 'Reducing cycles of worry, sadness, and hopelessness',
      link: '/anxiety-depression-therapy'
    },
    {
      title: 'Stress & Burnout Recovery',
      description: 'Restoring balance and preventing exhaustion',
      link: '/stress-burnout'
    },
    {
      title: 'Women\'s Therapy',
      description: 'Navigating societal pressures, identity, and empowerment',
      link: '/womens-therapy'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized, evidence-based care',
      description: 'We use therapies like CBT, IFS, mindfulness, EMDR-informed approaches, and more—always adapted to your needs.'
    },
    {
      title: 'Culturally responsive and affirming',
      description: 'We understand how culture, family expectations, and identity shape your mental health journey, and we honor those experiences in therapy.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned.'
    },
    {
      title: 'Supportive and collaborative',
      description: 'We believe therapy is a partnership. You set the pace, and we walk alongside you in the process.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Individual Therapy"
        heroImage={IndividualTherapyImage}
        subtitle="Are you looking for a safe space to talk, process, and heal?"
        introText="Life can feel overwhelming at times—whether you're navigating anxiety, depression, past trauma, burnout, or relationship stress. Individual therapy provides a private, supportive space where you can explore your thoughts and emotions, gain new coping tools, and create meaningful change at your own pace."
        commonReasons={commonReasons}
        therapySpecialties={therapySpecialties}
        whyWorkWithUs={whyWorkWithUs}
      />
    </div>
  );
}

export default App;