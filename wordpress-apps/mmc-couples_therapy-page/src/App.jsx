import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import CouplesTherapyImg from '../assets/images/couples-therapy.svg';

const App = () => {
  // Couples & Relationship therapy content
  const commonSigns = [
    'Communication breakdowns',
    'Trust issues, including after betrayal', 
    'Feeling emotionally distant',
    'Repeating the same unresolved conflicts',
    'Stress from family, finances, or life transitions'
  ];

  const challenges = [
    {
      title: 'Communication that doesn\'t land',
      description: 'Frequent arguments, walking on eggshells, or avoiding conversations altogether can leave both partners feeling unheard and unsupported.'
    },
    {
      title: 'Trust that feels fragile', 
      description: 'When trust is shaken—whether from infidelity, secrecy, or past hurts—it can feel impossible to move forward without outside support.'
    },
    {
      title: 'Growing apart instead of together',
      description: 'Life stress, parenting demands, or mismatched priorities can create distance, making it harder to stay connected as a team.'
    }
  ];

  const therapeuticSolution = [
    'Learn healthier ways to communicate',
    'Rebuild trust and emotional safety', 
    'Resolve recurring conflicts',
    'Deepen intimacy and connection',
    'Navigate transitions as a team'
  ];

  const howItWorks = [
    {
      title: 'Understanding your story',
      description: 'We begin with sessions to learn about your relationship history, current struggles, and what each of you wants moving forward.'
    },
    {
      title: 'Building tools for connection', 
      description: 'Together, we practice communication skills, conflict resolution, and ways to express needs without escalation.'
    },
    {
      title: 'Healing past wounds',
      description: 'Using evidence-based approaches like EFT and Gottman Method, we help address old patterns and rebuild trust.'
    },
    {
      title: 'Creating lasting change',
      description: 'Therapy supports you in building new habits of care, teamwork, and closeness that sustain your relationship long after sessions end.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized in couples & relationship therapy',
      description: 'Our therapists are trained in evidence-based models like Gottman Method and Emotionally Focused Therapy (EFT).'
    },
    {
      title: 'Culturally responsive care',
      description: 'We understand how cultural values, family expectations, and identity can affect relationships—and we honor that in our work.'
    },
    {
      title: 'Safe, supportive, and effective', 
      description: 'We move at your pace, creating a nonjudgmental space for both partners to feel heard and supported.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned for clients across diverse backgrounds.'
    }
  ];

  const faqs = [
    {
      question: 'What if my partner doesn\'t want to come?',
      answer: 'That\'s common. Sometimes one person starts therapy first, and partners join later. We can help you explore how to invite your partner into the process.'
    },
    {
      question: 'How long will it take to see change?',
      answer: 'Every couple is different. Some notice improvements in a few sessions, while deeper issues may take longer. Many couples begin to feel more hopeful within the first month.'
    },
    {
      question: 'Do we both need to attend every session?', 
      answer: 'Most sessions are joint, but sometimes we meet individually to better understand each partner\'s perspective.'
    },
    {
      question: 'Do you offer online couples therapy?',
      answer: 'Yes, we provide secure virtual sessions for couples across California.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Couples & Relationship"
        heroImage={CouplesTherapyImg}
        subtitle="Do you feel disconnected, stuck, or struggling to trust each other?"
        introText="Every relationship goes through ups and downs. Over time, communication may break down, conflicts repeat without resolution, or partners begin to feel more like roommates than a couple. Our Couples & Relationship Therapy provides a safe, supportive space to help you and your partner rebuild trust, improve communication, and reconnect with one another."
        commonSigns={commonSigns}
        challenges={challenges}
        therapeuticSolution={therapeuticSolution}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
};

export default App;