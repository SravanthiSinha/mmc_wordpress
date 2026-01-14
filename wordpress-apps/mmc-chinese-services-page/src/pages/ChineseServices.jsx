import React from 'react';
import { FadeInSection, HoverCard } from '../components/shared/Animations';
import AboutUsImg from '../assets/images/aboutus.png';
import { BOOKING_URL } from '../constants';

// Import SVGs
import IndividualTherapy from '../assets/images/individual-therapy.svg';
import CouplesTherapy from '../assets/images/couples-therapy.svg';
import CulturalAdaptation from '../assets/images/cultural-adaptation.svg';
import OnlineTherapy from '../assets/images/online-therapy.svg';

const ChineseServices = () => {
  const services = [
    {
      icon: IndividualTherapy,
      title: "个人治疗",
      description: "焦虑、抑郁、睡眠、感情、压力管理、自我认同、人际与职业困扰、亲子关系、代际沟通、文化适应问题",
    },
    {
      icon: CouplesTherapy,
      title: "伴侣治疗",
      description: "沟通改善、信任重建、关系修复",
    },
    {
      icon: CulturalAdaptation,
      title: "文化适应与心理整合",
      description: "帮助您在中美文化之间找到平衡与自我认同",
    },
    {
      icon: OnlineTherapy,
      title: "线上心理咨询(限加州)",
      description: "安全、私密、灵活的远程会谈"
    }
  ];

  const featureItems = [
    "深耕亚裔与华人社区,理解文化与家庭在心理健康中的影响",
    "治疗师可提供 中文和英文 服务",
    "融合多种疗法(如 IFS、EMDR、CBT 等)",
    "根据每位来访者的需求,提供量身定制的治疗方案",
    "提供 20 分钟免费咨询(Lyra client除外),帮助您了解是否适合开始心理治疗"
  ]

  return (
    <div className="min-h-screen pt-2 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6">
              Between Therapy
            </h1>
            <p className="text-xl sm:text-2xl text-brand-text-primary mb-4">
              用心陪伴您的心理旅程
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-serif text-brand-text-primary mb-6">
                  关于我们
                </h2>
                <p className="text-lg text-brand-text-primary/80 leading-relaxed">
                  <strong className="text-brand-primary">Between Therapy</strong> 是一家专注于为加州华人与亚裔社区提供心理治疗与心理健康的机构。我们理解不同文化背景下的心理压力与困扰往往有不同的表现与原因。我们以尊重文化差异为出发点,结合科学的心理治疗方法,让您在熟悉、安全的环境中获得理解与支持。
                </p>
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

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-brand-text-primary mb-8 md:mb-12">
              我们的服务
            </h2>
            <p className="text-lg text-brand-text-primary/80 leading-relaxed mb-6">
              我们提供面向个人和伴侣的心理咨询与治疗:
            </p>
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 100}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] min-w-[280px] max-w-[480px]">
                  <HoverCard className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 transition-transform duration-300 hover:scale-105">
                      <img src={service.icon} alt={service.title} className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4 text-brand-sage">
                      {service.title}
                    </h3>
                    <p className="text-brand-text-primary text-center">
                      {service.description}
                    </p>
                  </HoverCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-brand-background-primary">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary mb-8 text-center">
                我们的特色
              </h2>
              <div className="flex flex-col space-y-4">
                {featureItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 mt-1 text-brand-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="text-base md:text-lg text-brand-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-background-secondary to-brand-background-primary">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary mb-6">
              联系我们
            </h2>
            <p className="text-lg md:text-xl lg:text-3xl text-brand-text-primary mb-8">
              如果您正经历压力、焦虑、关系紧张或情绪困扰,欢迎与我们联系。我们愿意倾听,并陪您一起找到更平衡、更自在的生活方式。
            </p>
            <div className="flex flex-col items-center gap-2">
              <a
                href={BOOKING_URL}
                className="inline-block bg-brand-coral text-white text-xl font-bold 
                px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                hover:transform hover:scale-105 active:scale-95"
              >
                预约咨询
              </a>
              <span className="text-sm sm:text-base text-brand-text-primary/80">
                预约 20 分钟咨询
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default ChineseServices;