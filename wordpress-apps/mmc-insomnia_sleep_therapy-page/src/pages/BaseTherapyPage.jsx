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
  howItWorks,
  whyWorkWithUs,
  faqs
}) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-2 bg-brand-background-secondary font-body">
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
                      alt="Sleep therapy"
                      className="w-ful h-auto rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-brand-sage mb-6 font-heading">
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
                    Common sleep challenges we help with
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {commonChallenges.map((challenge, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <div className="h-full p-6 bg-brand-background-primary rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center">
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
                    If these sound familiar, you're not alone. Insomnia affects millions—but it's highly treatable with the right support.
                  </p>
                  <BookNowCTA />
                </div>
              </div>
            </FadeInSection>
          </section>
        )}

        {/* Why CBT-I Works Section */}
        <section id="why-cbti-works" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-primary relative overflow-hidden">
          {/* Background decorative elements - sleep themed with brand colors */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-32 h-32 bg-brand-blue-soft/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-12 w-40 h-40 bg-brand-sage/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-brand-coral/10 rounded-full blur-2xl"></div>
            {/* Subtle star/moon pattern using brand colors */}
            <div className="absolute top-20 right-40 text-brand-blue-soft/40 text-2xl">✦</div>
            <div className="absolute bottom-10 left-16 text-brand-sage/40 text-xl">☾</div>
            <div className="absolute top-40 left-1/4 text-brand-coral/40 text-lg">✧</div>
            <div className="absolute bottom-20 left-2/3 text-brand-coral/40 text-lg">☾</div>
            <div className="absolute bottom-50 left-1/8 text-brand-coral/40 text-lg">✧</div>
          </div>

          <FadeInSection>
            <div className="relative max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-text-primary mb-6">
                  Why CBT-I works
                </h2>
                <p className="text-xl sm:text-2xl text-brand-text-primary max-w-4xl mx-auto leading-relaxed font-light">
                  <strong>Cognitive Behavioral Therapy for Insomnia (CBT-I)</strong> is considered the gold standard, research-based treatment for sleep problems. Unlike quick fixes or sleep aids, CBT-I helps you:
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="space-y-12">
                {struggles.map((struggle, index) => (
                  <FadeInSection key={index} delay={index * 200}>
                    <div className="relative">
                      <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Content Card */}
                        <div className="flex-1 bg-brand-background-primary/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-xl border border-brand-sage/10 relative group hover:shadow-2xl transition-all duration-300">
                          <h3 className="text-2xl font-semibold text-brand-sage mb-4">
                            {struggle.title}
                          </h3>
                          <p className="text-lg text-brand-text-primary leading-relaxed">
                            {struggle.description}
                          </p>
                        </div>

                        {/* Icon Section */}
                        <div className="w-full lg:w-1/4 flex justify-center">
                          <div className="relative">
                            {/* Main icon circle */}
                            <div className={`w-24 h-24 bg-gradient-to-br ${index === 0 ? 'from-brand-blue-bright to-brand-blue-soft' :
                              index === 2 ? 'from-brand-coralLight to-brand-primary' :
                                index === 1 ? 'from-brand-blue-soft to-brand-coralLight' :
                                  index === 3 ? 'from-brand-blue-soft to-brand-primary' :
                                    'from-brand-sage to-brand-primary'
                              } rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-100`}>
                              <span className="text-3xl">
                                {index === 0 ? '🔄' : index === 1 ? '🧠' : index === 2 ? '🔧' : index === 3 ? '💤' : '⚡'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={600}>
                <div className="text-center mt-16 p-8">
                  <p className="text-xl text-brand-text-primary max-w-4xl mx-auto leading-relaxed mb-6">
                    Most people begin to notice results within a few weeks of starting CBT-I.
                  </p>
                  <BookNowCTA />
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </section>

        {/* How It Works Section*/}
        <section id="process" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-brand-text-primary mb-12 text-center">
                How sleep therapy works with us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="bg-brand-background-primary p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-brand-coral text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage font-heading">
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
                <h2 className="text-3xl sm:text-4xl font-heading text-brand-text-primary mb-4">
                  Why work with Between Therapy?
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {whyWorkWithUs.map((reason, index) => (
                  <FadeInSection key={index} delay={index * 150}>
                    <div className="h-full bg-brand-background-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="w-16 h-16 bg-brand-blue-soft rounded-full mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-grow flex flex-col justify-center text-center">
                        <h3 className="text-xl font-semibold text-brand-sage mb-4 font-heading">
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
                <h2 className="text-3xl sm:text-4xl font-heading text-brand-text-primary mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 mb-12">
                {faqs.map((faq, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <div className="bg-brand-background-primary rounded-2xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-gray-warm transition-colors duration-300 group"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-brand-sage group-hover:text-brand-coral transition-colors pr-4 font-heading">
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
                        <div className="px-8 py-6 border-t border-brand-gray-warm">
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-text-primary mb-4">
                  Take the first step toward
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-sage">
                  better sleep
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-sage to-brand-blue-soft mx-auto rounded-full mt-6"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-brand-text-primary mb-16 max-w-4xl mx-auto leading-relaxed">
                You don't have to keep struggling through sleepless nights. With CBT-I, you can retrain your body and mind for the rest you deserve. At Between Therapy, we make it easy to get started:
              </p>

              {/* Three-step process cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                {[
                  {
                    title: "Free Consultation",
                    description: "Book a free 20-minute consultation to learn more about CBT-I and see if it's a good fit.",
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
                    <div className="group relative bg-brand-background-primary/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-background-primary/50">
                      {/* Icon */}
                      <div className="text-4xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage mb-4 group-hover:text-brand-coral transition-colors duration-300 font-heading">
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
                <div className="bg-brand-background-primary/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-brand-background-primary/50 max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-sage mb-4 font-heading">
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