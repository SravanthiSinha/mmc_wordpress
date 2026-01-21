import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import ZengImg from '../assets/images/profile_pics/zeng.jpg';
import ElaineImg from '../assets/images/profile_pics/elaine.jpg';
import ViniImg from '../assets/images/profile_pics/vini.jpg';
import DanImg from '../assets/images/profile_pics/dan.jpg';
import PoyaImg from '../assets/images/profile_pics/poya.jpg';
import AboutUsImg from '../assets/images/aboutus.jpg';
import AsianClientImg from '../assets/images/asian-client.jpg';
import BookNowCTA from '../components/shared/BookNowCTA';

const About = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const teamMembers = [
    {
      id: 'stella',
      name: 'Yajun (Stella) Zeng, LCSW',
      title: 'Clinical Director',
      image: ZengImg,
      url: 'https://between-therapy.com/stella-zeng/',
    },
    {
      id: 'vini',
      name: 'Vini Kalra, PsyD',
      title: 'Clinical Psychologist',
      image: ViniImg,
      url: 'https://between-therapy.com/vini-kalra/',
    },
    {
      id: 'dan',
      name: 'Da (Dan) Song, AMFT, APCC',
      title: 'Associate Therapist',
      image: DanImg,
      url: 'https://between-therapy.com/dan-song/',
    },
    {
      id: 'poya',
      name: 'Poya Lai, AMFT',
      title: 'Associate Therapist',
      image: PoyaImg,
      url: 'https://between-therapy.com/poya-lai/',
    },
    {
      id: 'elaine',
      name: 'Elaine Li, ASW',
      title: 'Associate Therapist',
      image: ElaineImg,
      url: 'https://between-therapy.com/elaine-li/',
    },

  ];

  // This ensures the last slide always shows 3 cards
  const desktopMembers = [...teamMembers, ...teamMembers.slice(0, 2)];

  // Calculate max slides based on screen size
  const getMaxSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 2; // Desktop: 3 slides (0, 1, 2) showing 3 cards each
      if (window.innerWidth >= 768) return teamMembers.length - 1; // Tablet
    }
    return teamMembers.length - 1; // Mobile
  };

  const [maxSlides, setMaxSlides] = React.useState(getMaxSlides());

  React.useEffect(() => {
    const handleResize = () => {
      setMaxSlides(getMaxSlides());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlides) return 0;
        return prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

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
              Welcome to <span className="text-brand-text-primary">Between Therapy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-primary mb-6">
              An Asian-owned, women-owned company committed to providing compassionate,
              culturally sensitive therapy and wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction Section with Carousel */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary inline-block relative">
                Meet our team
                <span className="block h-1 w-2/3 bg-brand-sage/30 mx-auto mt-4 rounded-full"></span>
              </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Desktop View - Show 3 cards */}
              <div className="hidden lg:block">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {desktopMembers.map((member, index) => (
                      <div key={`${member.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                        <div className="group">
                          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10"></div>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-[450px] object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                              <h3 className="text-lg md:text-xl font-serif text-white mb-2">
                                {member.name}
                              </h3>
                              <p className="text-white text-md">
                                {member.title}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-center">
                            <a
                              href={member.url}
                              className={`inline-block bg-brand-sage text-white font-bold 
                              text-sm px-4 py-2 rounded-full hover:bg-brand-sageLight transition-all duration-200
                              hover:transform hover:scale-105 active:scale-95`}
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet View - Show 2 cards */}
              <div className="hidden md:block lg:hidden">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 50}%)` }}
                  >
                    {teamMembers.map((member) => (
                      <div key={member.id} className="w-1/2 flex-shrink-0 px-4">
                        <div className="group">
                          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10"></div>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-[450px] object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                              <h3 className="text-lg md:text-xl font-serif text-white mb-2">
                                {member.name}
                              </h3>
                              <p className="text-white/90 text-sm">
                                {member.title}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-center">
                            <a
                              href={member.url}
                              className={`inline-block bg-brand-sage text-white font-bold 
                              text-sm px-4 py-2 rounded-full hover:bg-brand-sageLight transition-all duration-200
                              hover:transform hover:scale-105 active:scale-95`}
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile View - Show 1 card */}
              <div className="block md:hidden">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {teamMembers.map((member) => (
                      <div key={member.id} className="w-full flex-shrink-0 px-4">
                        <div className="group max-w-sm mx-auto">
                          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10"></div>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-[450px] object-cover object-center"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                              <h3 className="text-lg md:text-xl font-serif text-white mb-2">
                                {member.name}
                              </h3>
                              <p className="text-white/90 text-sm">
                                {member.title}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-center">
                            <a
                              href={member.url}
                              className={`inline-block bg-brand-sage text-white font-bold 
                              text-sm px-4 py-2 rounded-full hover:bg-brand-sageLight transition-all duration-200
                              hover:transform hover:scale-105 active:scale-95`}
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 lg:-ml-12 bg-white/90 hover:bg-white text-brand-sage p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous therapist"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 lg:-mr-12 bg-white/90 hover:bg-white text-brand-sage p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next therapist"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-brand-sage w-8'
                      : 'bg-brand-sage/30 hover:bg-brand-sage/50'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </FadeInSection>
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
                  At <strong className="text-brand-primary">Between Therapy</strong>,
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
                  alt="Between Therapy peaceful therapy space"
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
              Take the first step towards healing and growth with Between Therapy.
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