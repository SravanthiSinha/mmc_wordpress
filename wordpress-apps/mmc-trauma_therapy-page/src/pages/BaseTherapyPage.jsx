import React, { useState } from 'react';
import { FadeInSection } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
import { CONTACT_INFO } from '../constants';

const BaseTherapyPage = ({
  title,
  heroImage,
  subtitle,
  secondarySubtitle,
  introText,
  challenges,
  approaches,
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
        {/* Hero Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg">
                    <img
                      src={heroImage}
                      alt={`Person dealing with ${title.toLowerCase()}`}
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                   <h2 className="text-xl sm:text-2xl md:text-3xl text-brand-sage  mb-6">
                    {subtitle} {secondarySubtitle}
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

        {/* Detailed Challenges Section */}
        {challenges && (
          <section id="challenges" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
            <FadeInSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    The pain can bring
                  </h2>
                </div>
                <div className="space-y-8">
                  {challenges.map((challenge, index) => (
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
                              {challenge.title}
                            </h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed">
                              {challenge.description}
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
                  <div className="text-center mt-16 p-8 bg-brand-background-secondary">
                    <p className="text-xl text-brand-text-primary max-w-4xl mx-auto leading-relaxed mb-6">
                      If these experiences sound familiar, you don't have to face them alone. Support is available.
                    </p>
                    <BookNowCTA />
                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>
          </section>
        )}

        {/* Our Healing Solution Section - Evidence-based Approaches */}
        {approaches && (
          <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-brand-background-primary border-t border-brand-gray-warm/10">
            <FadeInSection>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    Our healing solution
                  </h2>
                  <p className="text-xl text-brand-text-primary max-w-4xl mx-auto">
                    At Mind Matters Center, we provide trauma-focused therapy to help you rebuild trust, manage triggers, and reconnect with yourself and others. Our clinicians are trained in evidence-based approaches including:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {approaches.map((approach, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-lg 
                  transition-all duration-300 text-center group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-brand-sage">
                        {approach.svg}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-brand-sage mb-4 sm:mb-6">
                        {approach.title}
                      </h3>
                      <p className="text-base sm:text-lg text-brand-text-primary">
                        {approach.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-12">
                  <BookNowCTA />
                </div>
              </div>
            </FadeInSection>
          </section>

        )}

        {/* How Trauma Therapy Works With Us Section*/}
        {howItWorks && (
          <section id="process" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-brand-background-secondary">
            <FadeInSection>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                  How trauma therapy works with us
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
        )}

        {/* Why Work With Mind Matters Center Section */}
        {whyWorkWithUs && (
          <section id="why-us" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary">
            <FadeInSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    Why work with Mind Matters Center?
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
        )}

        {/* FAQ Section */}
        {faqs && (
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
        )}

        {/* Final CTA Section - Take the first step toward healing */}
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
                  healing
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-sage to-brand-blue-soft mx-auto rounded-full mt-6"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-brand-text-primary mb-16 max-w-4xl mx-auto leading-relaxed">
                Starting trauma therapy can feel overwhelming, but you don't have to do it alone. At Mind Matters Center, we make it simple to get started:
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