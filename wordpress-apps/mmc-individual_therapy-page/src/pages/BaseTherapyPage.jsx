import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
import { CONTACT_INFO } from '../constants';

const BaseTherapyPage = ({
  title,
  heroImage,
  subtitle,
  introText,
  commonReasons,
  therapySpecialties,
  whyWorkWithUs
}) => {

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
                      alt={`Person in individual therapy`}
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

        {/* Common Reasons Section */}
        {commonReasons && (
          <section id="reasons" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
            <FadeInSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-4">
                    Common reasons people seek individual therapy
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {commonReasons.map((reason, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <div className="h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center">
                        <div className="w-4 h-4 bg-brand-blue-soft rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-brand-text-primary font-medium leading-relaxed">
                          {reason}
                        </span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-xl text-brand-text-primary mb-8 max-w-3xl mx-auto">
                    Therapy is not only for moments of crisis—it's also a space for clarity, balance, and empowerment.
                  </p>
                  <BookNowCTA />
                </div>
              </div>
            </FadeInSection>
          </section>
        )}

        {/* What Therapy Can Help With Section */}
       <section id="specialties" className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-background-primary">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif text-brand-text-primary mb-6">
                  What individual therapy can help with
                </h2>
                <p className="text-xl text-brand-text-primary max-w-4xl mx-auto">
                  At Between Therapy, we offer therapy tailored to your unique needs. Our specialties include:
                </p>
              </div>

              <div className="space-y-6">
                {therapySpecialties.map((specialty, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <a
                      href={specialty.link}
                      className="group block p-8 bg-brand-background-secondary/50 hover:bg-brand-sage/5 rounded-2xl border-l-4 border-brand-sage hover:border-brand-coral transition-all duration-300 no-underline"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-brand-sage group-hover:text-brand-coral transition-colors duration-300 mb-2">
                            {specialty.title}
                          </h3>
                          <p className="text-lg text-brand-text-primary leading-relaxed">
                            {specialty.description}
                          </p>
                        </div>
                        <div className="ml-8 text-brand-sage group-hover:text-brand-coral transition-all duration-300 transform group-hover:translate-x-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </FadeInSection>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-xl text-brand-text-primary mb-8 max-w-3xl mx-auto italic">
                  Each of these focus areas is designed to help you not only feel better, but also build resilience for the future.
                </p>
                <BookNowCTA />
              </div>
            </div>
          </FadeInSection>
        </section>


        {/* Why Work With Us Section */}
        <section id="why-us" className="px-4 sm:px-6 lg:px-8 py-16 bg-brand-background-secondary">
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
                  Ready to take the
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-sage">
                  next step?
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-sage to-brand-blue-soft mx-auto rounded-full mt-6"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-brand-text-primary mb-16 max-w-4xl mx-auto leading-relaxed">
                Starting therapy can feel daunting, but you don't have to do it alone. At Between Therapy, we make it easy:
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