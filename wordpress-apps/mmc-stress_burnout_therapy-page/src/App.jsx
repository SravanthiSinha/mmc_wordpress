// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Stress_Burnout from './assets/images/stress-burnout.jpg';
import './App.css';

function App() {
  // Burnout & Stress Recovery therapy content
  const commonSigns = [
    'Chronic fatigue and low energy',
    'Irritability or mood swings',
    'Loss of motivation or productivity',
    'Feeling "on edge" all the time',
    'Difficulty sleeping or insomnia'
  ];

  const challenges = [
    {
      title: 'Constant pressure from work or responsibilities',
      description: 'Burnout often stems from pushing through impossible expectations—long hours, unending tasks, or balancing work with family and caregiving responsibilities.'
    },
    {
      title: 'Emotional exhaustion',
      description: 'When stress builds up, you may feel emotionally flat, detached, or overwhelmed. This makes it hard to focus, enjoy relationships, or care for yourself.'
    },
    {
      title: 'Feeling stuck in survival mode',
      description: 'Even when you know you\'re burned out, it can feel impossible to step back or make changes. This cycle can lead to anxiety, depression, or physical health problems.'
    }
  ];

  const howItWorks = [
    {
      title: 'Understand your stress cycle',
      description: 'We begin by exploring what\'s causing burnout—workload, relationships, cultural pressures, or all of the above.'
    },
    {
      title: 'Build stress management tools',
      description: 'You\'ll learn strategies to regulate your nervous system, manage overwhelm, and prevent stress from building to crisis levels.'
    },
    {
      title: 'Set boundaries and reclaim balance',
      description: 'Therapy supports you in setting limits, making intentional choices, and finding sustainable rhythms for work and life.'
    },
    {
      title: 'Create lasting change',
      description: 'Over time, we help you build resilience so you can face life\'s demands without sacrificing your well-being.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized in stress & burnout recovery',
      description: 'We use approaches like CBT for stress, mindfulness, and self-compassion practices proven to reduce burnout.'
    },
    {
      title: 'Culturally responsive care',
      description: 'We understand how cultural identity, family expectations, and workplace dynamics can intensify stress—and we honor those experiences in therapy.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned.'
    },
    {
      title: 'Compassionate, effective support',
      description: 'We create a safe, nonjudgmental space to help you recover energy, restore calm, and find balance.'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if I\'m burned out or just stressed?',
      answer: 'Stress is often short-term, while burnout builds over time and leaves you feeling emotionally, mentally, and physically drained. If stress no longer feels manageable, you may be experiencing burnout.'
    },
    {
      question: 'Can therapy really help with burnout?',
      answer: 'Yes. Therapy provides tools to reduce overwhelm, set boundaries, and recover your energy—while addressing the deeper patterns that fuel burnout.'
    },
    {
      question: 'Do you only work with professionals?',
      answer: 'No. Burnout can affect anyone balancing multiple roles—parents, caregivers, students, or workers. Therapy is tailored to your unique situation.'
    },
    {
      question: 'Do you offer online sessions?',
      answer: 'Yes, we provide secure virtual sessions across California.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Burnout & Stress Recovery"
        heroImage={Stress_Burnout}
        subtitle="Do you feel like you're running on empty?"
        introText="Chronic stress can leave you feeling exhausted, irritable, and emotionally drained. Burnout shows up when constant demands outweigh your capacity to cope, leaving you stuck in survival mode. Therapy can help you manage stress, recover your energy, and restore balance to your life."
        commonSigns={commonSigns}
        challenges={challenges}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
}

export default App;