import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
import IFSTherapyImg from '../assets/images/ifs-therapy.svg';
import { BOOKING_URL } from '../constants';

const IFSTherapy = () => {
    return (
        <div className="min-h-screen pt-2 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Internal Family Systems (IFS) Therapy
                        </h1>
                        <p className="text-lg md:text-xl text-brand-text-primary/80 mt-6 max-w-3xl mx-auto">
                            Understanding Yourself in a New Way
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-8 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Column - Image */}
                            <div className="md:w-1/2 flex justify-center items-center">
                                <div className="w-72 h-72 md:w-80 md:h-80">
                                    <img src={IFSTherapyImg} alt="IFS therapy illustration" className="w-full h-full" />
                                </div>
                            </div>

                            {/* Right Column - Content */}
                            <div className="flex-1 flex flex-col justify-center space-y-6">
                                <h2 className="text-2xl font-serif text-brand-text-primary">
                                    A gentle approach to understanding your inner world
                                </h2>
                                <p className="text-lg md:text-xl text-brand-text-primary">
                                    At MMC, we offer Internal Family Systems (IFS) therapy, a gentle approach that helps you connect with the different parts of yourself. Each of us has these "parts", aspects of who we are, like the inner critic, the protector, or the wounded child. These parts develop over time and shape how we think, feel, and respond to life.
                                </p>
                                <p className="text-lg md:text-xl text-brand-text-primary">
                                    In IFS therapy, we create a safe space where you can begin to understand these parts and their roles. You'll learn how to listen to them with compassion, ease internal tension, and start to heal old wounds. This work helps bring more balance, clarity, and calm into your life.
                                </p>
                                <div className="pt-4">
                                    <BookNowCTA />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Who Can Benefit Section */}
            <section className="py-12 md:py-20 bg-brand-background-secondary">
                <FadeInSection delay={100}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col space-y-6 md:space-y-8">
                                <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary">
                                    Who Can Benefit from IFS?
                                </h2>
                                <p className="text-lg text-brand-text-primary mb-4">
                                    IFS is helpful for anyone feeling overwhelmed, stuck, or disconnected from themselves. It can support people dealing with anxiety, depression, trauma, relationship challenges, or simply wanting a deeper understanding of their inner world.
                                </p>
                                <div className="pt-4">
                                    <BookNowCTA />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 mt-8 lg:mt-0">
                                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-brand-sage">
                                    <p className="text-xl md:text-2xl text-brand-text-primary font-medium mb-4">
                                        Every part of you developed for a reason.
                                    </p>
                                    <p className="text-xl md:text-2xl text-brand-text-primary font-medium mb-4">
                                        In IFS, we don't try to get rid of parts – we listen to them.
                                    </p>
                                    <p className="text-xl md:text-2xl text-brand-sage font-semibold">
                                        When parts feel heard, healing begins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* What to Expect Section - Card grid inspired by Home specialties */}
            <section className="py-12 md:py-20 bg-brand-background-primary">
                <FadeInSection delay={100}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-4">
                                What to Expect
                            </h2>
                            <p className="text-base md:text-lg text-brand-text-primary/90 max-w-3xl mx-auto">
                                In our sessions, we'll work together at a pace that feels right for you, exploring your inner landscape with curiosity and compassion.
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-12">
                            {[
                                {
                                    title: "Map Your Parts",
                                    description: "Help you map and get to know your \"parts.\"",
                                    icon: (
                                        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="30" cy="18" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="18" cy="35" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="42" cy="35" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="30" cy="30" r="3" fill="currentColor" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Explore Beliefs & Feelings",
                                    description: "Explore the deeper beliefs and feelings these parts hold.",
                                    icon: (
                                        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 10 L45 25 L30 40 L15 25 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="30" cy="25" r="3" fill="currentColor" />
                                            <path d="M20 15 Q30 20 40 15" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M20 35 Q30 30 40 35" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Connect with Self",
                                    description: "Learn to lead with Self – the calm, curious, and compassionate center within you.",
                                    icon: (
                                        <svg className="w-full h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.3" />
                                            <path d="M30 10 L30 22" stroke="currentColor" strokeWidth="2" />
                                            <path d="M30 38 L30 50" stroke="currentColor" strokeWidth="2" />
                                            <path d="M10 30 L22 30" stroke="currentColor" strokeWidth="2" />
                                            <path d="M38 30 L50 30" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )
                                }
                            ].map((approach, index) => (
                                <FadeInSection key={index} delay={index * 100} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
                                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group overflow-hidden">
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="mb-4 text-brand-sage flex justify-center">
                                                <div className="w-16 h-16">
                                                    {approach.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-medium text-brand-text-primary mb-3 text-center group-hover:text-brand-coral transition-colors">
                                                {approach.title}
                                            </h3>
                                            <p className="text-brand-text-primary/80 text-center flex-grow">
                                                {approach.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-brand-sage max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-brand-text-primary text-center">
                                <strong>Together, we'll work at a pace that feels right for you.</strong>
                            </p>
                            <div className="flex justify-center">
                                <BookNowCTA />
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Ready to Start Section*/}
            <section className="py-12 md:py-20 bg-brand-background-primary">
                <FadeInSection delay={100}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                            Ready to Start?
                        </h2>
                        <p className="text-lg md:text-xl text-brand-text-primary mb-6">
                            If you're curious about IFS therapy or have questions, reach out for a consultation. Let's talk about how this approach might support your journey.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <a
                                href="/our-team"
                                className="inline-flex items-center text-lg font-medium text-brand-sage hover:text-brand-coral transition-colors px-6 py-3 rounded-full hover:bg-brand-sage/10 border border-brand-sage/30 hover:border-brand-coral/30 mb-4"
                            >
                                Meet Our Team
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Final CTA*/}
            <section className="py-12 md:py-20 bg-brand-background-secondary">
                <FadeInSection delay={400}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary mb-8">
                            <span className="font-semibold">Take the first step toward healing</span>
                        </p>
                        <p className="text-lg md:text-xl text-brand-text-primary mb-8">
                            Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <a href={BOOKING_URL}
                                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200 hover:transform hover:scale-105 active:scale-95"
                            >
                                Book Now
                            </a>
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

export default IFSTherapy;