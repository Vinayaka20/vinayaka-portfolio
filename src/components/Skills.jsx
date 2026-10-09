import { Code2, Server, Layout, Database, BrainCircuit, Cpu, Wrench } from 'lucide-react';
import { skillsData } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const iconMap = { Code2, Server, Layout, Database, BrainCircuit, Cpu, Wrench };

export default function Skills() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 350, height: 350, background: 'var(--orb-2)', top: '20%', right: '-5%' }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Skills" title="Technologies I Work With" subtitle="A focused toolkit spanning backend engineering, problem solving, AI/IoT, and modern development workflows." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <Reveal key={group.category} delay={(i % 3) * 0.1}>
                <div
                  className="theme-transition glass p-6 h-full transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                    e.currentTarget.style.boxShadow = '0 0 30px var(--glow-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl"
                      style={{
                        background: 'var(--muted)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
