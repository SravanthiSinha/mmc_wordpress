import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import CTASection from '../components/shared/CTASection';
import BookNowCTA from '../components/shared/BookNowCTA';

const BaseTherapyPage = ({
  title,
  heroImage,
  heroText,
  signs,
  signsTitle,
  approachTitle,
  approachText,
  approaches,
  approachesTitle,
  supportText
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

      {/* Understanding Section with Background Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <img
                src={heroImage}
                alt={`Person dealing with ${title.toLowerCase()}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-8">
                <p className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-text-secondary max-w-4xl">
                  {heroText}
                </p>
                <div className="flex justify-center mt-4">
                  <BookNowCTA />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Common Signs Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="p-6 sm:p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                {signsTitle}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {signs.map((sign, index) => (
                  <div
                    key={index}
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-brand-sage/10 flex items-center justify-center p-4 
                                        group hover:bg-brand-sage hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base font-semibold text-brand-text-primary group-hover:text-white text-center transition-colors duration-300">
                      {sign}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <BookNowCTA />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Treatment Approach */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6">
              {approachTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
              {approachText}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Therapeutic Approaches Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-brand-background-primary border-t border-brand-gray-warm/10">
        <FadeInSection>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
              {approachesTitle || 'Therapeutic approaches'}
            </h2>
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
                  <h3 className="text-base sm:text-lg font-semibold text-brand-sage mb-3 sm:mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text-primary">
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

      {/* Additional Support Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-8 bg-brand-background-primary">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 md:p-12 text-center">
              <p className="text-base sm:text-lg text-brand-text-primary mb-8">
                {supportText}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      <CTASection />
    </div>
  );
};

export default BaseTherapyPage;