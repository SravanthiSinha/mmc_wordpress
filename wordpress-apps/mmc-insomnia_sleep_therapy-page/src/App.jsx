// Insomnia & Sleep Therapy (CBT-I) Page Content
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import SleepTherapyImage from './assets/images/sleep_insomnia.svg';
import './App.css';

function App() {
  // Insomnia & Sleep Therapy content
  const commonChallenges = [
    'Trouble falling asleep at night',
    'Waking up often or too early',
    'Lying in bed for hours feeling restless',
    'Relying on naps, caffeine, or sleep medication',
    'Feeling tired, irritable, or unfocused during the day'
  ];

  const struggles = [
    {
      title: 'Reset your body\'s natural sleep rhythm',
      description: 'CBT-I helps restore your circadian rhythm and teaches your body when it\'s time to sleep and wake naturally.'
    },
    {
      title: 'Reduce anxiety and overthinking at night',
      description: 'Learn techniques to quiet racing thoughts and break the cycle of worry that keeps you awake.'
    },
    {
      title: 'Change unhelpful sleep habits and patterns',
      description: 'Identify and modify behaviors that interfere with sleep, creating sustainable long-term improvements.'
    },
    {
      title: 'Build a healthier relationship with rest',
      description: 'Develop confidence in your ability to sleep and reduce the anxiety around bedtime.'
    },
    {
      title: 'Improve sleep quality and daytime energy',
      description: 'Experience deeper, more restorative sleep that leaves you feeling refreshed and energized.'
    }
  ];

  const therapeuticSolution = "Cognitive Behavioral Therapy for Insomnia (CBT-I) is considered the gold standard, research-based treatment for sleep problems. Unlike quick fixes or sleep aids, CBT-I helps you build lasting improvements. Most people begin to notice results within a few weeks of starting CBT-I.";

  const howItWorks = [
    {
      title: 'Understand your sleep patterns',
      description: 'We begin with a detailed assessment of your sleep history and daily routines.'
    },
    {
      title: 'Develop a personalized plan',
      description: 'Together, we create a structured sleep schedule and strategies designed just for you.'
    },
    {
      title: 'Learn tools to quiet your mind',
      description: 'You\'ll gain practical skills to manage nighttime worry, reduce clock-watching, and calm racing thoughts.'
    },
    {
      title: 'Build long-term habits',
      description: 'Our goal is not just short-term relief, but lasting improvements in your sleep and overall health.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized training in CBT-I',
      description: 'Our therapists are trained in Cognitive Behavioral Therapy for Insomnia—the most effective, evidence-based approach to sleep problems.'
    },
    {
      title: 'Culturally responsive care',
      description: 'We understand how stress, family expectations, and cultural beliefs can affect rest and recovery.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned.'
    },
    {
      title: 'Compassionate, effective support',
      description: 'We work with you step by step, at your pace, to help you feel more rested and energized.'
    }
  ];

  const faqs = [
    {
      question: 'How long does CBT-I take?',
      answer: 'Most clients see improvement within 4–8 weeks, though some notice changes sooner.'
    },
    {
      question: 'Do I have to stop all sleep medication?',
      answer: 'Not necessarily. Some clients reduce or stop medication during CBT-I, but this is always done in collaboration with your doctor.'
    },
    {
      question: 'Will I have to keep a sleep diary?',
      answer: 'Yes, keeping a simple daily record is part of CBT-I. It helps us track progress and fine-tune your plan.'
    },
    {
      question: 'Do you offer virtual sessions?',
      answer: 'Yes, we provide secure online therapy across California.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Insomnia & Sleep Therapy (CBT-I)"
        heroImage={SleepTherapyImage}
        subtitle="Struggling to fall asleep, stay asleep, or wake up rested?"
        introText="Sleep problems can affect every part of life—your energy, mood, focus, and health. Insomnia isn't just about bad sleep habits —it's a cycle that can feel impossible to break. Our Insomnia & Sleep Therapy (CBT-I) provides an evidence-based way to improve your sleep naturally, without relying on medication."
        commonChallenges={commonChallenges}
        struggles={struggles}
        therapeuticSolution={therapeuticSolution}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
}

export default App;