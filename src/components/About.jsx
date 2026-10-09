import { Server, Code2, Cpu } from 'lucide-react';
import { aboutInfo } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const iconMap = { Server, Code2, Cpu };

export default function About() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 300, height: 300, background: 'var(--orb-1)', top: '30%', left: '-5%' }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="About" title={aboutInfo.heading} subtitle={aboutInfo.description} />

        <div className="grid md:grid-cols-3 gap-6">
          {aboutInfo.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.title} delay={i * 0.15}>
                <div
                  className="theme-transition glass card-shadow p-8 h-full group cursor-default transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.boxShadow = '0 8px 40px var(--glow-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--grad-primary)' }}
                  >
                    <Icon size={26} color="#fff" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
