import React from 'react';
import TeamMember from '../components/shared/TeamMember';
import ZengImg from '../assets/images/profile_pics/zeng.jpg';
import ElaineImg from '../assets/images/profile_pics/elaine.jpg';

const OurTeam = () => {
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
                "My name is Elaine Li, and I’m an associate therapist dedicated to helping individuals navigate their personal growth, relationships, and mental health challenges. My therapeutic approach integrates evidence-based techniques such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Motivational Interviewing (MI) to support clients in achieving meaningful change in their lives.",
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
        }
    ];

    return (
        <div className="min-h-screen pt-2 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-12 sm:mb-16 md:mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
                            Meet our team
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            Dedicated professionals committed to providing culturally sensitive and
                            inclusive mental health care for our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Member Section */}
            <section className="py-12 md:py-16 bg-brand-background-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {teamMembers.map((member) => (
                        <TeamMember key={member.id} member={member} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurTeam;