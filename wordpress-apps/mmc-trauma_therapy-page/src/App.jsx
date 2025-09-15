// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Trauma_Support from './assets/images/trauma-support.jpg';
import './App.css';

function App() {
  // Pain points that trauma can bring
  const challenges = [
    {
      title: 'Flashbacks and intrusive memories',
      description: 'Trauma can feel like it\'s happening all over again. Nightmares, vivid memories, or sudden reminders may interrupt your daily life and leave you feeling exhausted and on edge.'
    },
    {
      title: 'Difficulty trusting and connecting with others',
      description: 'Trauma often makes it hard to feel safe with people. You may struggle to open up, find yourself avoiding relationships, or constantly question whether others can truly be trusted.'
    },
    {
      title: 'Feeling on guard and emotionally drained',
      description: 'You might feel "always on," hyperaware of your surroundings, or numb just to get through the day. This constant cycle of vigilance and disconnection can lead to burnout, depression, or hopelessness.'
    },
    {
      title: 'Trouble sleeping/Insomnia',
      description: 'Sleep disturbances are common with trauma. Racing thoughts, nightmares, or hypervigilance can make it difficult to fall asleep or stay asleep, leaving you feeling exhausted during the day.'
    }
  ];

  // Therapeutic approaches
  const therapeuticSolution = [
    {
      title: 'IFS (Internal Family Systems)',
      description: 'A gentle, parts-based therapy that helps you understand and heal the protective and wounded parts of yourself.'
    },
    {
      title: 'EMDR (Eye Movement Desensitization and Reprocessing)',
      description: 'A structured, research-backed therapy that helps the brain reprocess painful memories so they no longer feel overwhelming.'
    },
    {
      title: 'Mindfulness-based practices',
      description: 'To calm the nervous system, increase self-awareness, and build resilience.'
    }
  ];

  // How trauma therapy works process
  const howItWorks = [
    {
      title: 'Start with safety and understanding',
      description: 'We begin by creating a safe space, understanding your story, and learning what you need most right now.'
    },
    {
      title: 'Learn tools for managing triggers',
      description: 'Together, we develop grounding and calming strategies to help you feel more in control when trauma responses arise.'
    },
    {
      title: 'Process traumatic memories',
      description: 'Using approaches like IFS and EMDR, we carefully work with your memories and inner parts so they no longer hold the same emotional weight.'
    },
    {
      title: 'Rebuild trust and connection',
      description: 'As therapy continues, we help you reconnect with yourself and others, building healthier patterns of safety and closeness.'
    }
  ];

  // Why work with Mind Matters Center
  const whyWorkWithUs = [
    {
      title: 'Specialized trauma care',
      description: 'Our therapists are trained in trauma-focused modalities (CBT, IFS, EMDR-informed therapy, mindfulness).'
    },
    {
      title: 'Culturally responsive approach',
      description: 'We understand how cultural identity, family dynamics, and community pressures can shape trauma—and we honor those experiences in therapy.'
    },
    {
      title: 'Safe, collaborative environment',
      description: 'Healing is not a one-size-fits-all process. We move at your pace, ensuring you feel safe and supported every step of the way.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned for clients across diverse backgrounds.'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'How long will it take to feel better?',
      answer: 'Every person\'s healing journey is unique. Many clients notice small improvements—like better sleep or less anxiety—within the first few months as they learn coping tools.'
    },
    {
      question: 'Do I have to share all the details of my trauma?',
      answer: 'No. You\'re always in control of what you share. Our approach focuses on helping you feel safe, grounded, and empowered.'
    },
    {
      question: 'What if I\'ve been struggling for years—can therapy still help?',
      answer: 'Yes. Trauma can be healed at any stage of life. Many clients start after years of carrying pain and still experience profound growth and relief.'
    },
    {
      question: 'Do you offer online trauma therapy?',
      answer: 'Yes. We provide secure virtual therapy for clients across California, so you can access support from the comfort of your home.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Trauma Therapy (IFS & EMDR)"
        heroImage={Trauma_Support}
        subtitle="Does past trauma still impact your daily life? Are flashbacks, anxiety, or numbness keeping you from living fully?"
        introText=" If you've experienced painful events that continue to bring fear, avoidance, or emotional distress, you may feel like the past is still shaping your present. Trauma therapy offers you a safe space to process those experiences, regain control, and heal at your own pace."
        challenges={challenges}
        therapeuticSolution={therapeuticSolution}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
}

export default App;