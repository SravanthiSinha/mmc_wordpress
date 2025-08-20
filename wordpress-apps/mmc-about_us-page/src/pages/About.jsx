import TeamMember from '../components/shared/TeamMember';
import { FadeInSection } from '../components/shared/Animations';
import ZengImg from '../assets/images/profile_pics/zeng.jpg';
import ElaineImg from '../assets/images/profile_pics/elaine.jpg';
import ChristineImg from '../assets/images/profile_pics/christine.jpg';
import AboutUsImg from '../assets/images/aboutus.jpg';
import AsianClientImg from '../assets/images/asian-client.jpg';
import BookNowCTA from '../components/shared/BookNowCTA';

const About = () => {
  const teamMembers = [
    {
      id: 'stella',
      name: 'Yajun (Stella) Zeng, LCSW',
      title: 'Clinical Director | Mind Matters Center',
      image: ZengImg,
      introContent: [
        'As an Asian American immigrant, my journey into mental health care was shaped by a deep commitment to breaking cultural and linguistic barriers that often prevent Asian American communities from accessing therapy. Navigating life between two cultures has given me a firsthand understanding of the unique stressors and mental health challenges that arise from bicultural identity, immigration, and intergenerational dynamics.'
      ],
      credentials: [
        'Dual master\'s degrees in Social Work (MSW) and Gerontology (MSG) from University of Southern California',
        'Currently pursuing a Doctorate in Social Work (DSW) at University of Pennsylvania',
        'Licensed Clinical Social Worker'
      ],
      mainContent: [
        'As a bilingual Licensed Clinical Social Worker fluent in both English and Chinese, I integrate evidence-based treatment approaches, including Cognitive Behavioral Therapy (CBT), attachment-based techniques, and relational-focused methods. My clinical expertise includes working with individuals across the lifespan, with a special focus on older adults, individuals with chronic illnesses, and immigrants, particularly within the Asian American community.'
      ],
      quote: 'At Mind Matters Center, I aim to create a safe and culturally responsive space where clients feel seen, heard, and empowered to navigate life\'s challenges. I believe in therapy that honors personal values, fosters self-awareness and strengthens resilience.',
      personalContent: 'Outside of therapy, I enjoy exploring new places, traveling, reading, practicing yoga, hiking, backpacking, and indulging in delicious food. I also love animals—especially dogs- who hold a special place in my heart.'
    },
    {
      id: 'elaine',
      name: 'Elaine Li, ASW',
      title: 'Associate Therapist | Mind Matters Center',
      image: ElaineImg,
      introContent: [
        "My name is Elaine Li, and I'm an associate therapist dedicated to helping individuals navigate their personal growth, relationships, and mental health challenges. My therapeutic approach integrates evidence-based techniques such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Motivational Interviewing (MI) to support clients in achieving meaningful change in their lives.",
        "As an Asian American, I deeply understand the unique struggles and challenges that come with navigating multiple cultures and identities. Many of my clients, especially those from immigrant backgrounds, experience acculturation stress, family dynamics, and the complexities of balancing traditional values with the demands of living in a new culture. These challenges can lead to feelings of isolation, anxiety, and confusion, but I believe that with the right support, everyone can find their path toward healing, self-discovery, and resilience."
      ],
      credentials: [
        'Master of Social Work from California State University, Los Angeles',
        'Associated Social Worker'
      ],
      mainContent: [
        "Throughout my career, I have worked extensively with both adults and older adults, helping them overcome a variety of issues such as anxiety, depression, trauma, and relationship difficulties. I have seen firsthand how powerful the therapeutic process can be in helping individuals move through difficult transitions, whether it's adjusting to life in a new country, coping with family pressures, or addressing long-standing emotional struggles.",
        "My work with clients is built on empathy, respect, and the belief that each person is capable of growth. I focus on creating a safe and non-judgmental space where you can feel heard, understood, and empowered to make positive changes. Together, we will work on improving your mental health, developing coping strategies, strengthening family relationships, and navigating the complexities of cultural identity.",
        "Whether you're struggling with family dynamics, adjusting to life in a new environment, or seeking personal growth, my goal is to help you regain a sense of balance and find peace within yourself. By combining my cultural understanding with my professional training, I can offer a supportive and effective space for healing."
      ],
      quote: 'I believe therapy is a collaborative journey where we work together to discover your strengths, navigate challenges, and build resilience. My goal is to create a space where you feel truly understood as you embrace your authentic self.',
      personalContent: "When I'm not working, I love hiking and reading. Both activities allow me to expand my horizons, and I enjoy balancing the adventure of the outdoors with the adventure of a great story."
    },
    {
      id: 'christine',
      name: 'Christine Gates, AMFT',
      title: 'Associate Therapist | Mind Matters Center',
      image: ChristineImg,
      introContent: [
        'I\'m passionate about helping individuals and families heal from trauma and navigate complex mental health challenges. I understand that life can bring unexpected and distressing experiences—whether it\'s trauma, family struggles, or neurodivergent conditions—and I\'m here to provide a safe space where healing can begin.',
        'My approach focuses on understanding both the symptoms you\'re experiencing and the underlying causes. I believe in providing practical tools that you can use in your daily life while also helping you process and reframe past experiences that may be impacting your present.'
      ],
      credentials: [
        'Master\'s degree in Marriage and Family Therapy from Northcentral University',
        'Associated Marriage and Family Therapist (AMFT)',
        'Specialized training in EMDR, DBT, ABFT, SFBT, and ERP'
      ],
      mainContent: [
        'I work with children (ages 5+), adolescents, young adults, families, and individuals dealing with a wide range of conditions including depression, anxiety, PTSD, eating disorders, OCD, ADHD, bipolar disorder, and other neurodivergent diagnoses. My goal is to meet you where you are and provide support that feels both meaningful and practical.',
        'Every therapy session is tailored to ensure you\'re gaining new insights and coping strategies that actually work in your real life. I believe in monitoring our progress together and adjusting our approach as needed to make sure you\'re getting the most out of our time together.'
      ],
      quote: 'I believe healing happens when we address both the surface symptoms and the deeper experiences that shape us. My goal is to help you develop practical tools that seamlessly integrate into your daily life.',
      personalContent: 'In my leisure time, I enjoy biking, hiking, and scuba diving in open water. Since May 2000, I have practiced daily meditation, which helps me unwind and reflect on my experiences in life. Additionally, I am passionate about reading and watching documentaries focusing on forensic psychology and neuroscience.'
    }
  ];
  const values = [
    {
      title: "Cultural sensitivity",
      description: "Deep understanding of Asian American experiences and challenges",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Evidence-based approach",
      description: "Utilizing proven therapeutic methods tailored to your needs",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Safe space",
      description: "Non-judgmental environment for healing and growth",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-2 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
              Welcome to <span className="text-brand-text-primary">Mind Matters Center</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-primary mb-6">
              An Asian-owned, women-owned company committed to providing compassionate,
              culturally sensitive therapy and wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-12 md:py-16 bg-brand-background-primary">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text-primary mb-6 sm:mb-8">
            Meet our team
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-serif text-brand-text-primary mb-6">
                  Our mission
                </h2>
                <p className="text-lg text-brand-text-primary/80 leading-relaxed mb-6">
                  At <strong className="text-brand-primary">Mind Matters Center</strong>,
                  we believe that everyone deserves the opportunity to heal, grow, and live a fulfilling life.
                  As an Asian-owned, women-owned company, we are deeply committed to providing compassionate,
                  culturally sensitive therapy and wellness services that empower individuals and couples
                  to navigate life's challenges and embrace emotional well-being.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <BookNowCTA />
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0 w-full max-w-2xl">
                <img
                  src={AboutUsImg}
                  alt="Mind Matters Center peaceful therapy space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>


      {/* Specialization Section */}
      <section className="py-8 sm:py-10 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg mx-auto lg:mx-0 w-full max-w-xl order-2 lg:order-1">
                <img
                  src={AsianClientImg}
                  alt="Asian client in therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-serif text-brand-text-primary mb-4">
                  Our expertise
                </h2>
                <p className="text-base sm:text-lg text-brand-text-primary/80 leading-relaxed mb-6">
                  We specialize in working with Asian American clients, understanding the unique cultural
                  experiences and struggles that shape their mental health. Our team of experienced
                  therapists offers personalized support for anxiety, trauma, relationship issues,
                  and other life stressors.
                </p>
                <div className="flex justify-center lg:justify-end">
                  <BookNowCTA />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-6 sm:py-8 bg-brand-background-secodary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary">
              Our therapeutic approach
            </h2>
          </FadeInSection>
          <FadeInSection direction="up">
            <div className="max-w-4xl mx-auto p-4 sm:p-5 backdrop-blur-sm mb-16">
              <p className="text-base sm:text-lg text-brand-text-primary mb-6 leading-relaxed">
                Our approach is rooted in a blend of evidence-based therapies—like Cognitive Behavioral Therapy (CBT),
                Trauma-focused therapy, mindfulness, and relational therapy—combined with cultural sensitivity and respect.
                We create a safe and non-judgmental space where you can explore your feelings, gain clarity, and develop the tools you need to thrive.
              </p>
              <p className="text-base sm:text-lg text-brand-text-primary leading-relaxed mb-6">
                We are passionate about creating a welcoming and inclusive space for all. We aim to help
                you find healing, balance, and empowerment in every aspect of your life. Whether through
                individual therapy, couples counseling, or wellness coaching, we are here to walk alongside
                you every step of the way.
              </p>
              {/* Added CTA button after the approach description */}
              <div className="flex justify-center mt-8">
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex-1 basis-[calc(100%-1.5rem)] sm:basis-[calc(50%-1.5rem)] md:basis-[calc(33.333%-1.5rem)] 
                                  min-w-[280px] max-w-[400px] bg-white p-6 rounded-xl shadow-lg border border-brand-gray-warm
                                  text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-base text-brand-text-primary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-brand-background-secondary">
        <FadeInSection direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-4 sm:mb-6">
              Ready to begin your journey?
            </h2>
            <p className="text-base sm:text-lg text-brand-text-primary mb-6 sm:mb-8">
              Take the first step towards healing and growth with Mind Matters Center.
            </p>
            <div className="flex flex-col items-center gap-2">
              <BookNowCTA />
              <span className="text-sm sm:text-base text-brand-text-primary/80">
                Free 20 Minute Consultation
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default About;