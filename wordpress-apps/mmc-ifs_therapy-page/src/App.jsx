// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import IFSTherapyImage from './assets/images/ifs-therapy.svg';
import './App.css';

function App() {
  // Internal Family Systems (IFS) therapy content - using only provided content
  const commonSigns = [
    'Struggle with self-criticism or perfectionism',
    'Feel "stuck" in patterns you can\'t break',
    'Carry unresolved trauma or painful memories',
    'Want to build greater self-compassion and inner peace'
  ];

  const howItWorks = [
    {
      title: 'Meet your parts',
      description: 'We\'ll gently explore the different "parts" of you—like the inner critic, the protector, or the wounded child.'
    },
    {
      title: 'Understand their roles',
      description: 'Each part developed for a reason. In IFS, we learn why these parts exist and how they\'ve been trying to protect you.'
    },
    {
      title: 'Access your Self',
      description: 'As you connect with your calm, compassionate "Self," you\'ll begin to heal past wounds and bring more harmony to your inner world.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Trained in IFS therapy',
      description: 'Our therapists are trained in IFS and integrate it into trauma therapy, individual therapy, and relationship work.'
    },
    {
      title: 'Culturally sensitive care',
      description: 'We recognize how cultural expectations and family dynamics shape your inner world.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making IFS more accessible to diverse communities.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Internal Family Systems (IFS)"
        heroImage={IFSTherapyImage}
        subtitle="A gentle approach to healing from within"
        introText="Sometimes we feel torn between different parts of ourselves—one part wants to push forward, another part holds us back, while another feels deeply hurt. Internal Family Systems (IFS) therapy provides a compassionate way to understand these inner parts and help them work together, instead of against each other."
        commonSigns={commonSigns}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
      />
    </div>
  );
}

export default App;