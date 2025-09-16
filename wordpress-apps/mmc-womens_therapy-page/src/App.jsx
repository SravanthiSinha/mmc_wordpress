// src/WomenTherapyApp.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Womens_Therapy from './assets/images/womens-therapy.jpg';
import './App.css';

function App() {

  // Detailed challenges with full descriptions from your content
  const challenges = [
    {
      title: 'The pressure of multiple roles',
      description: 'Many women find themselves balancing careers, family life, friendships, and caregiving. This constant juggling act can leave you feeling exhausted and guilty no matter what you prioritize.'
    },
    {
      title: 'The challenge of people-pleasing',
      description: 'You may find yourself saying "yes" when you want to say "no," putting others first and pushing your own needs aside. Over time, this can erode self-esteem and create resentment.'
    },
    {
      title: 'The weight of self-criticism',
      description: 'Women often hold themselves to impossibly high standards. Whether at work, in relationships, or in appearance, the voice of self-criticism can feel relentless and draining.'
    }
  ];

  // Benefits from therapy (implied from your therapeutic solution content)
  const therapeuticBenefits = [
    'Cultivate self-compassion and kindness toward yourself',
    'Strengthen your voice and communicate your needs',
    'Feel empowered in your unique journey',
    'Set down external pressures and reconnect with yourself',
    'Make choices that reflect your values',
    'Build lasting resilience and healthier relationships'
  ];

  // Your "How therapy for women works with us" content
  const howItWorks = [
    {
      title: 'Explore your story',
      description: 'We begin by understanding the pressures you\'ve faced—cultural, relational, or personal—and how they\'ve shaped your experience.'
    },
    {
      title: 'Build strategies for relief',
      description: 'Together, we create tools for managing stress, setting healthy boundaries, and quieting self-criticism.'
    },
    {
      title: 'Strengthen identity and confidence',
      description: 'We help you explore your authentic self, reclaim your voice, and move forward with greater confidence.'
    },
    {
      title: 'Empower long-term growth',
      description: 'Therapy is not just about reducing stress—it\'s about building lasting resilience, healthier relationships, and a deeper connection to yourself.'
    }
  ];

  // Your "Why work with Mind Matters Center?" content
  const whyWorkWithUs = [
    {
      title: 'Specialized in women\'s therapy',
      description: 'Our therapists understand the unique pressures women face—from role overload to cultural expectations—and provide care tailored to these challenges.'
    },
    {
      title: 'Culturally responsive and inclusive',
      description: 'We honor the intersections of gender, culture, family, and identity, recognizing that each woman\'s journey is deeply personal.'
    },
    {
      title: 'Evidence-based and compassionate',
      description: 'We use approaches like CBT, IFS, and mindfulness-based strategies that empower you with practical skills and emotional growth.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned for clients across diverse backgrounds.'
    }
  ];

  // Your FAQ content
  const faqs = [
    {
      question: 'Do I have to know exactly what I want to work on before starting?',
      answer: 'No. Many women begin therapy simply knowing they feel "stuck" or overwhelmed. Therapy helps you clarify what you want and how to get there.'
    },
    {
      question: 'Can therapy help if I\'ve been struggling with self-esteem for years?',
      answer: 'Yes. Self-worth can be rebuilt at any stage of life. Many women discover new confidence and self-compassion through this work.'
    },
    {
      question: 'Will therapy help with my relationships, too?',
      answer: 'Absolutely. As you learn to set boundaries and strengthen your sense of self, your relationships often become healthier and more balanced.'
    },
    {
      question: 'Do you offer online sessions?',
      answer: 'Yes. We provide secure virtual therapy for women across California, so you can receive support wherever you are.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Therapy for Women"
        heroImage={Womens_Therapy}
        subtitle="Do you feel pulled in too many directions?"
        introText="Between career demands, family responsibilities, cultural expectations, and personal growth, women often carry an invisible weight. You may feel overwhelmed, burnt out, or unsure of how to care for yourself while showing up for everyone else. Women's therapy offers you a safe space to pause, reflect, and build the support you need."
        challenges={challenges}
        therapeuticSolution="At Mind Matters Center, we help women cultivate self-compassion, strengthen their voices, and feel empowered in their unique journeys. Therapy is a space where you can set down external pressures, reconnect with yourself, and make choices that reflect your values."
        therapeuticBenefits={therapeuticBenefits}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
}

export default App;