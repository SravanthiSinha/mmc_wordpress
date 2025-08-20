import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
import IndividualTherapyImg from '../assets/images/individual-therapy.svg';
import { BOOKING_URL } from '../constants';

const IndividualTherapy = () => {
    const reasonsForTherapy = [
        "Stress, anxiety, and overwhelm",
        "Burnout and work-life imbalance",
        "Relationship and family difficulties",
        "Self-doubt and low self-esteem",
        "Life transitions (breakups, career changes, moves)",
        "Identity exploration (cultural, gender, or personal)",
        "Grief and loss",
        "Feeling \"not good enough\" despite achievements"
    ];

    const approaches = [
        {
            title: "Cognitive Behavioral Therapy (CBT)",
            description: "Evidence-based techniques to identify and change unhelpful thought patterns"
        },
        {
            title: "Mindfulness-Based Approaches",
            description: "Present-moment awareness practices to reduce stress and increase self-compassion"
        },
        {
            title: "Trauma-Informed Care",
            description: "Safe, supportive methods for healing from past experiences"
        },
        {
            title: "Internal Family Systems (IFS)",
            description: "Understanding different parts of yourself to create internal harmony"
        }
    ];

    const FlowerIcon = () => (
        <svg width="60" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="25" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="20" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
    );

    return (
        <div className="min-h-screen pt-2 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Individual therapy
                        </h1>
                        <p className="text-lg md:text-xl text-brand-text-primary/80 mt-6 max-w-3xl mx-auto">
                            Life doesn't come with a roadmap. We'll meet you where you are.
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
                                    <img src={IndividualTherapyImg} alt="Individual therapy illustration" className="w-full h-full" />
                                </div>
                            </div>

                            {/* Right Column - Content */}
                            <div className="flex-1 flex flex-col justify-center space-y-6">
                                <h2 className="text-2xl font-serif text-brand-text-primary">
                                    A space to pause and reconnect with yourself
                                </h2>
                                <p className="text-lg md:text-xl text-brand-text-primary">
                                    Whether you're navigating stress, burnout, relationship issues, identity questions, or just feeling stuck, therapy is a space to pause and reconnect with yourself.
                                </p>
                                <p className="text-lg md:text-xl text-brand-text-primary">
                                    At Mind Matters Center, we offer individual therapy for adults who want to explore what's holding them back, heal old wounds, and develop tools to move forward. Our therapists are warm, down-to-earth, and deeply attuned to the cultural and personal experiences that shape you.
                                </p>
                                <p className="text-xl md:text-2xl text-brand-sage font-semibold">
                                    You don't need to have it all figured out before coming in.
                                </p>
                                 <div className="pt-4">
                                    <BookNowCTA />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* What Brings People Section - Similar to Home's checklist */}
            <section className="py-12 md:py-20 bg-brand-background-secondary">
                <FadeInSection delay={100}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col space-y-6 md:space-y-8">
                                <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary">
                                    What brings people to therapy?
                                </h2>
                                <p className="text-lg text-brand-text-primary mb-4">
                                    People come to us for many reasons, including:
                                </p>
                                <div className="flex flex-col space-y-4">
                                    {reasonsForTherapy.map((reason, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 mt-1 text-brand-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                            </svg>
                                            <span className="text-base md:text-lg text-brand-text-primary">{reason}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <BookNowCTA />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 mt-8 lg:mt-0">
                                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-brand-sage">
                                    <p className="text-xl md:text-2xl text-brand-text-primary font-medium mb-4">
                                        Sometimes the pain is clear.
                                    </p>
                                    <p className="text-xl md:text-2xl text-brand-text-primary font-medium mb-4">
                                        Other times, it's just a vague sense that something's off.
                                    </p>
                                    <p className="text-xl md:text-2xl text-brand-sage font-semibold">
                                        Either way, therapy can help.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* How We Work Section - Card grid inspired by Home specialties */}
            <section className="py-12 md:py-20 bg-brand-background-primary">
                <FadeInSection delay={100}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-4">
                                How We Work
                            </h2>
                            <p className="text-base md:text-lg text-brand-text-primary/90 max-w-3xl mx-auto">
                                We don't believe in one-size-fits-all therapy. Our clinicians draw from multiple approaches, tailoring each session to your goals and pace.
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-12">
                            {approaches.map((approach, index) => (
                                <FadeInSection key={index} delay={index * 100} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group overflow-hidden">
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="mb-4 text-brand-sage flex justify-center">
                                                <FlowerIcon />
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
                                <strong>Sessions are currently offered online</strong> to make therapy more accessible and flexible for your schedule.
                            </p>
                            <div className="flex justify-center mt-6">
                                <BookNowCTA />
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Cultural Awareness Section */}
            <section className="py-12 md:py-20 bg-brand-background-secondary">
                <FadeInSection delay={100}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="mb-6">
                                <div className="bg-brand-sage/10 p-4 rounded-full mb-4 inline-block">
                                    <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl font-serif text-brand-sage mb-6">
                                Therapy with Cultural Awareness
                            </h2>
                            <p className="text-lg md:text-xl text-brand-text-primary mb-6">
                                As an <strong>Asian- and women-owned practice</strong>, we understand how culture, family expectations, and generational dynamics can impact your mental health.
                            </p>
                            <p className="text-lg md:text-xl text-brand-text-primary">
                                We hold space for your full story—including the parts that might be hard to name. We're here to listen without judgment and support you in building a life that feels more like your own.
                            </p>
                            <div className="flex justify-center mt-6">
                                <BookNowCTA />
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>
            {/* Start Where You Are - Encouraging message */}
            <section className="py-12 md:py-20 bg-brand-background-primary">
                <FadeInSection delay={100}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                            Start Where You Are
                        </h2>
                        <p className="text-lg md:text-xl text-brand-text-primary mb-6">
                            You don't need to be in crisis to start therapy. Sometimes the most powerful change begins with a quiet decision to do things differently.
                        </p>
                       <p className="text-xl md:text-2xl text-brand-text-primary  mb-8">
                           If you’re curious about working together, click below to meet our team or book a session.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <a
                                href="/about-us"
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
            {/* Final CTA */}
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
                                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold
   px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
   hover:transform hover:scale-105 active:scale-95"
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

export default IndividualTherapy;