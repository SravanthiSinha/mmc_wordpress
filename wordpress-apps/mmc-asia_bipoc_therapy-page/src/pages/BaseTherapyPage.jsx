import React, { useState } from 'react';
import { FadeInSection } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
import { CONTACT_INFO } from '../constants';

const BaseTherapyPage = ({
  title,
  heroImage,
  subtitle,
  introText,
  commonChallenges,
  struggles,
  therapeuticSolution,
  familyDynamics,
  howItWorks,
  whyWorkWithUs,
  faqs
}) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-2 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
              {title}
            </h1>
          </div>
        </div>
      </section>
      <main id="main-content">
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg">
                    <img
                      src={heroImage}
                      alt="Asian American therapy"
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-brand-sage  mb-6">
                    {subtitle}
                  </h2>
                  <p className="text-lg sm:text-xl text-brand-text-primary mb-8 leading-relaxed">
                    {introText}
                  </p>
                  <BookNowCTA />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Common Challenges Section */}
        {commonChallenges && (
          <section id="challenges" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
            <FadeInSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    Common challenges we hear from clients
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {commonChallenges.map((challenge, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <div className="h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center">
                        <div className="w-4 h-4 bg-brand-blue-soft rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-brand-text-primary font-medium leading-relaxed">
                          {challenge}
                        </span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-xl text-brand-text-primary mb-8 max-w-3xl mx-auto">
                    If these challenges sound familiar, you're not alone. Many in our communities carry these same struggles—and healing is possible.
                  </p>
                  <BookNowCTA />
                </div>
              </div>
            </FadeInSection>
          </section>
        )}

        {/* Struggles Section */}
        <section id="struggles" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                  The struggles many Asian American & BIPOC clients face
                </h2>
              </div>

              <div className="space-y-8">
                {struggles.map((struggle, index) => (
                  <FadeInSection key={index} delay={index * 200}>
                    <div className="relative">
                      <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div
                          className="flex-1 p-8 rounded-3xl"
                          style={{
                            backgroundColor: '#fdfcfb',
                            boxShadow: '0 8px 30px rgba(255, 115, 0, 0.1)',
                            border: '1px solid rgba(255, 115, 0, 0.1)'
                          }}
                        >
                          <h3 className="text-2xl font-semibold text-brand-sage mb-4">
                            {struggle.title}
                          </h3>
                          <p className="text-lg text-brand-text-primary leading-relaxed">
                            {struggle.description}
                          </p>
                        </div>
                        <div className="w-full lg:w-1/3">
                          <div
                            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                            style={{ backgroundColor: '#ff7300', boxShadow: '0 8px 25px rgba(255, 115, 0, 0.3)' }}
                          >
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={600}>
                <div className="text-center mt-16 p-8 bg-white/50 rounded-2xl backdrop-blur-sm">
                  <p className="text-xl text-brand-text-primary max-w-4xl mx-auto leading-relaxed mb-6">
                    These struggles don't mean you're failing—they reflect the complex realities of living across cultures. Therapy can help you reclaim your voice and move forward with confidence.
                  </p>
                  <BookNowCTA />
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </section>

        {/* Therapeutic Solution Section */}
        <section id="solution" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                  Our therapeutic solution
                </h2>
                <p className="text-xl text-brand-text-primary max-w-4xl mx-auto">
                  {therapeuticSolution}
                </p>
              </div>
              <div className="text-center">
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Family & Cultural Dynamics Section - Updated Design with Original Content */}
        {familyDynamics && (
          <section id="family-dynamics" className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-brand-background-primary via-white to-brand-sage/5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-brand-sage/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-40 right-16 w-40 h-40 bg-brand-coral/8 rounded-full blur-3xl"></div>
              <div className="absolute top-60 right-1/4 w-24 h-24 bg-brand-blue-soft/10 rounded-full blur-xl"></div>
            </div>

            <FadeInSection>
              <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">                 
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    {familyDynamics.title}
                  </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  {/* Left Side - Description */}
                  <FadeInSection delay={200}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-10 border border-brand-sage/10 relative">
                      <p className="text-lg sm:text-xl text-brand-text-primary leading-relaxed font-light mb-8">
                        {familyDynamics.description}
                      </p>
                      <div className="text-lg text-brand-sage font-medium mb-6">
                        Sometimes, these expectations create tension:
                      </div>
                      {/* Floating accent elements */}
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-sage/20 rounded-full blur-sm"></div>
                      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-brand-coral/20 rounded-full blur-sm"></div>
                    </div>
                  </FadeInSection>

                  {/* Right Side - Challenge Points */}
                  <div className="space-y-6">
                    {familyDynamics.points.map((point, index) => (
                      <FadeInSection key={index} delay={300 + index * 150}>
                        <div className="group relative">
                          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-sage/10 relative z-10">
                            <div className="flex items-start">
                              {/* Icon based on index */}
                              <div className={`w-12 h-12 rounded-xl mr-4 flex items-center justify-center flex-shrink-0 ${index === 0 ? 'bg-gradient-to-br from-brand-sage to-brand-sage/80' :
                                index === 1 ? 'bg-gradient-to-br from-brand-coral to-brand-coral/80' :
                                  'bg-gradient-to-br from-brand-blue-soft to-brand-blue-soft/80'
                                }`}>
                                {index === 0 && (
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                                {index === 1 && (
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                                {index === 2 && (
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="text-lg text-brand-text-primary font-medium leading-relaxed group-hover:text-brand-sage transition-colors duration-300">
                                  {point}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Subtle connecting line to next item */}
                          {index < familyDynamics.points.length - 1 && (
                            <div className="flex justify-center py-2">
                              <div className="w-px h-4 bg-gradient-to-b from-brand-sage/40 to-transparent"></div>
                            </div>
                          )}
                        </div>
                      </FadeInSection>
                    ))}
                  </div>
                </div>

                {/* Conclusion Section */}
                <FadeInSection delay={800}>
                  <div className="relative">
                    {/* Main conclusion card */}
                   
                      <div className="relative text-center">
                        <p className="text-lg sm:text-xl text-brand-text-primary max-w-4xl mx-auto leading-relaxed mb-8">
                          {familyDynamics.conclusion}
                        </p>
                        <BookNowCTA />
                      </div>

                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>
          </section>
        )}

        {/* How It Works Section*/}
        <section id="process" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-brand-background-secondary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                How therapy works with us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-brand-coral text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-brand-text-primary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Why Work With Us Section */}
        <section id="why-us" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                  Why work with Between Therapy?
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {whyWorkWithUs.map((reason, index) => (
                  <FadeInSection key={index} delay={index * 150}>
                    <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="w-16 h-16 bg-brand-blue-soft rounded-full mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-grow flex flex-col justify-center text-center">
                        <h3 className="text-xl font-semibold text-brand-sage mb-4">
                          {reason.title}
                        </h3>
                        <p className="text-base text-brand-text-primary leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <div className="text-center">
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 mb-12">
                {faqs.map((faq, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300 group"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-brand-sage group-hover:text-brand-coral transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-6 h-6 text-brand-sage transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'transform rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="px-8 py-6 border-t border-gray-100">
                          <p className="text-base sm:text-lg text-brand-text-primary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <div className="text-center">
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Final CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-brand-sage/10 via-brand-blue-soft/10 to-brand-coral/10 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-sage/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue-soft/5 rounded-full blur-3xl"></div>
          </div>

          <FadeInSection>
            <div className="relative max-w-6xl mx-auto text-center">
              {/* Main heading */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-4">
                  Take the first step toward
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-sage">
                  healing and empowerment
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-sage to-brand-blue-soft mx-auto rounded-full mt-6"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-brand-text-primary mb-16 max-w-4xl mx-auto leading-relaxed">
                Seeking therapy while navigating cultural stigma can feel daunting—but you don't have to do it alone. At Between Therapy, we make it simple to begin:
              </p>

              {/* Three-step process cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                {[
                  {
                    title: "Free Consultation",
                    description: "Book a free 20-minute consultation to ask questions and see if this feels like the right fit.",
                    icon: "💬"
                  },
                  {
                    title: "Schedule Your Session",
                    description: "Schedule your first session directly if you're ready to begin your healing journey.",
                    icon: "📅"
                  },
                  {
                    title: "Get Quick Response",
                    description: "Reach out by phone or email. We will respond within 24 business hours.",
                    icon: "⚡"
                  }
                ].map((step, index) => (
                  <FadeInSection key={index} delay={index * 150}>
                    <div className="group relative bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">

                      {/* Icon */}
                      <div className="text-4xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage mb-4 group-hover:text-brand-coral transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-brand-text-primary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              {/* CTA Buttons */}
              <FadeInSection delay={500}>
                <div className="flex flex-col items-center gap-3 mb-12">
                  <BookNowCTA />
                  <span className="text-sm sm:text-base text-brand-text-primary/80">
                    Free 20 Minute Consultation
                  </span>
                </div>
              </FadeInSection>

              {/* Contact info */}
              <FadeInSection delay={600}>
                <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/50 max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage mb-4">
                    Ready to connect?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-brand-text-primary">
                    <a
                      href="tel:+14153790835"
                      className="flex items-center gap-2 hover:text-brand-coral transition-colors duration-300 font-medium"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {CONTACT_INFO.phone}
                    </a>
                    <a
                      href="mailto:hello@mindmatterscenter.com"
                      className="flex items-center gap-2 hover:text-brand-coral transition-colors duration-300 font-medium"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <p className="text-sm text-brand-text-primary/70 mt-4">
                    We respond within 24 business hours
                  </p>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
};

export default BaseTherapyPage;