import React from 'react';
import { FadeInSection } from '../shared/Animations';
import BookNowCTA from '../shared/BookNowCTA';

const TeamMember = ({ member }) => {
  return (
    <FadeInSection>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row mb-12">
        {/* Profile Image and CTA */}
        <div className="w-full md:w-[35%] flex flex-col">
          <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-br-2xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            {/* Name and Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl md:text-3xl font-serif mb-2 text-white">
                {member.name}
              </h2>
              <p className="text-lg text-white/90 italic">
                {member.title}
              </p>
            </div>
          </div>
          {/* Consultation Button */}
          <div className="text-center py-6">
            <div className="flex flex-col items-center gap-2">
              <BookNowCTA therapistId={member.id} size="md" />
              <span className="text-sm sm:text-base text-brand-text-primary/80">
                Free 20 Minute Consultation
              </span>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="w-full md:w-[65%] p-6 sm:p-8 md:p-10">
          <div className="space-y-8">
            <div className="space-y-6">
              {member.introContent.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-brand-text-primary/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="bg-brand-background-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Education & Credentials</h3>
                <ul className="space-y-3 text-brand-text-primary/90">
                  {member.credentials.map((credential, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-sage">•</span>
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {member.languages && (
                <div className="flex items-center gap-3 bg-brand-sage/10 rounded-lg p-4 ">
                  <svg className="w-5 h-5 text-brand-sage flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-brand-sage mb-1">Sessions Available In</p>
                    <p className="text-lg font-semibold text-brand-text-primary">{member.languages}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {member.mainContent.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-brand-text-primary/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {member.quote && (
                <blockquote className="border-l-4 border-brand-sage pl-6 py-4">
                  <p className="text-lg italic text-brand-text-primary/90">
                    {member.quote}
                  </p>
                </blockquote>
              )}

              {member.personalContent && (
                <p className="text-lg text-brand-text-primary/90 leading-relaxed pt-4">
                  {member.personalContent}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default TeamMember;