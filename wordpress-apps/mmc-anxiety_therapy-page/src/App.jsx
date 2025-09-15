// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import Anxiety_Depression from './assets/images/anxiety.jpg';
import './App.css';

function App() {
  // Anxiety & Depression therapy content - Updated to match new content
  const commonSigns = [
    'Persistent sadness or hopelessness',
    'Constant worry or racing thoughts',
    'Fatigue or low motivation',
    'Sleep problems (insomnia or oversleeping)',
    'Difficulty concentrating',
    'Feeling overwhelmed or "stuck"'
  ];

  const challenges = [
    {
      title: 'Living with constant worry or fear',
      description: 'Anxiety can make it feel impossible to relax. Your mind may race with "what ifs," leaving you restless, tense, and exhausted.'
    },
    {
      title: 'Carrying the weight of sadness',
      description: 'Depression often brings a heaviness that makes daily life feel harder than it should. You may lose interest in things you once enjoyed or struggle just to get through the day.'
    },
    {
      title: 'Feeling stuck and disconnected',
      description: 'When anxiety and depression overlap, you might feel trapped in a cycle of worry, guilt, sadness, and isolation—wanting relief but unsure where to start.'
    }
  ];

  const therapeuticSolution = [
    'Break cycles of worry and negative thoughts',
    'Build coping strategies for stress and overwhelm',
    'Improve mood, motivation, and energy',
    'Reconnect with yourself and others',
    'Create lasting resilience and confidence'
  ];

  const howItWorks = [
    {
      title: 'Understand your experience',
      description: 'We start by exploring how anxiety or depression shows up in your life and what feels hardest right now.'
    },
    {
      title: 'Build practical coping tools',
      description: 'You\'ll learn strategies to manage stress, improve sleep, and shift unhelpful thought patterns.'
    },
    {
      title: 'Address underlying issues',
      description: 'Using therapies like CBT, behavioral activation, and mindfulness, we help uncover root causes and reshape your responses.'
    },
    {
      title: 'Support long-term well-being',
      description: 'Therapy provides ongoing tools to build resilience, maintain emotional balance, and create a more fulfilling daily life.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized in anxiety & depression treatment',
      description: 'Our therapists use evidence-based methods (CBT, mindfulness, behavioral activation, trauma-informed care) proven to help with anxiety and depression.'
    },
    {
      title: 'Compassionate and culturally sensitive',
      description: 'We understand how cultural identity, family expectations, and lived experiences affect mental health, and we honor those differences in every session.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned for clients across diverse backgrounds.'
    }
  ];

  const faqs = [
    {
      question: 'How long will it take to feel better?',
      answer: 'Many clients notice improvement within the first few months as they learn new coping tools. Deeper, lasting change often takes longer, but progress builds steadily over time.'
    },
    {
      question: 'What if I\'ve been struggling for years—can therapy still help?',
      answer: 'Yes. Healing is possible at any stage. Even if anxiety or depression has been part of your life for years, therapy can bring real relief and growth.'
    },
    {
      question: 'Do I need medication, or is therapy enough?',
      answer: 'That depends on your needs. Some clients benefit from a combination of therapy and medication, while others find therapy alone effective. We can collaborate with your doctor if medication is part of your care.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Anxiety & Depression"
         heroImage={Anxiety_Depression}
        subtitle="Do worry and sadness feel like they're taking over your life?"
        introText="Anxiety and depression are two of the most common mental health struggles—and they often show up together. You may feel restless and unable to calm your thoughts, or weighed down by sadness and fatigue. These challenges can make even daily tasks feel overwhelming. The good news: with the right support, healing is possible."
        commonSigns={commonSigns}
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