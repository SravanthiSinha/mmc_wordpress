// src/App.jsx
import React from 'react';
import BaseTherapyPage from './pages/BaseTherapyPage';
import AsianAmericanTherapyImage from './assets/images/asia-bipoc-therapy.jpg';
import './App.css';

function App() {
  // Asian American & Culturally Sensitive Therapy content
  const commonChallenges = [
    'Cultural identity struggles',
    'Family expectations and generational conflicts',
    'Intergenerational trauma',
    'Racial stress and discrimination',
    'Acculturation and bicultural tension'
  ];

  const struggles = [
    {
      title: 'Cultural identity and belonging',
      description: 'Living between cultures can leave you questioning where you truly belong. You may feel pressure to adapt to one environment, while being judged in another.'
    },
    {
      title: 'Family expectations and intergenerational conflict',
      description: 'Many clients feel the weight of parental or cultural expectations—around education, career, marriage, or caregiving—making it difficult to follow their own path.'
    },
    {
      title: 'Racial stress and systemic inequities',
      description: 'Experiences of discrimination, stereotyping, or microaggressions can create ongoing stress and erode self-esteem. Over time, these experiences take a toll on mental health.'
    }
  ];

  const therapeuticSolution = "At Mind Matters Center, we offer culturally sensitive therapy designed specifically for Asian Americans and BIPOC clients. Our approach acknowledges the unique challenges of navigating identity, family, and systemic pressures—while helping you build resilience and empowerment.";

  const familyDynamics = {
    title: "Family & Cultural Dynamics",
    description: "Family relationships are at the center of many cultural experiences. For Asian American and BIPOC clients, family expectations can shape life choices, career decisions, and even personal identity. Sometimes, these expectations create tension:",
    points: [
      "Pressure to meet cultural or family standards (achievement, caregiving, marriage)",
      "Cultural stigma around mental health that discourages open conversations",
      "Intergenerational misunderstandings between parents and children growing up in different cultural contexts"
    ],
    conclusion: "Therapy provides a space to explore these dynamics with compassion. We help clients honor cultural values while also developing healthy boundaries, improving communication, and finding balance between family obligations and personal growth."
  };

  const howItWorks = [
    {
      title: 'Create a safe and validating space',
      description: 'We begin by honoring your story, including cultural and generational experiences that shape who you are.'
    },
    {
      title: 'Understand your unique challenges',
      description: 'Together, we explore the impact of cultural identity, family dynamics, racial stress, or intergenerational trauma.'
    },
    {
      title: 'Build tools for resilience',
      description: 'We develop strategies for managing stress, setting boundaries, and strengthening self-compassion.'
    },
    {
      title: 'Empower authentic growth',
      description: 'Therapy supports you in embracing your identity fully and creating a life aligned with your values—not just expectations.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Specialized in culturally responsive care',
      description: 'Our therapists are trained to understand cultural identity, family obligations, and systemic inequities—and how they affect mental health.'
    },
    {
      title: 'Representation matters',
      description: 'As an Asian-owned and women-owned practice, we bring lived understanding of cultural nuance and create a space where clients feel less alone.'
    },
    {
      title: 'Language accessibility',
      description: 'Our therapists speak Mandarin Chinese, English, and Korean, making therapy more accessible and culturally attuned for clients across diverse backgrounds.'
    },
    {
      title: 'Evidence-based and empowering',
      description: 'We use approaches like CBT, IFS, EMDR-informed therapy, and mindfulness, tailored to your cultural context and healing needs.'
    }
  ];

  const faqs = [
    {
      question: 'Do I have to explain my culture to my therapist?',
      answer: 'No. Our therapists are familiar with cultural issues common to Asian American and BIPOC communities. We understand, so you don\'t have to educate us.'
    },
    {
      question: 'What if my family doesn\'t support therapy?',
      answer: 'That\'s common. Therapy is your safe space, even if it\'s not talked about at home. We can also help you navigate family stigma or resistance.'
    },
    {
      question: 'Can therapy help with racial trauma?',
      answer: 'Yes. Therapy can provide tools to process painful experiences of racism, reduce their emotional weight, and build resilience.'
    },
    {
      question: 'Do you offer online therapy?',
      answer: 'Yes, we provide secure virtual therapy for clients across California.'
    }
  ];

  return (
    <div className="wp-react-app">
      <BaseTherapyPage
        title="Asian American & Culturally Sensitive Therapy"
        tagline="Compassionate, culturally sensitive therapy designed to honor your identity, family, and lived experience."
        heroImage={AsianAmericanTherapyImage}
        subtitle="Do you ever feel caught between cultures?"
        introText="Balancing cultural identity, family expectations, and societal pressures can feel overwhelming. You may feel invisible in mainstream spaces, misunderstood at home, or unsure how to honor both your cultural roots and your authentic self. Therapy can provide a safe, affirming space where your unique experiences are seen, understood, and respected."
        commonChallenges={commonChallenges}
        struggles={struggles}
        therapeuticSolution={therapeuticSolution}
        familyDynamics={familyDynamics}
        howItWorks={howItWorks}
        whyWorkWithUs={whyWorkWithUs}
        faqs={faqs}
      />
    </div>
  );
}

export default App;