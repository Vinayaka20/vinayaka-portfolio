import { motion } from 'framer-motion';
import { GraduationCap, School, Award } from 'lucide-react';
import { education } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';

const iconMap = [GraduationCap, School, School];

export default function Education() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 300, height: 300, background: 'var(--orb-1)', top: '20%', right: '0%' }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading eyebrow="Education" title="Education" subtitle="Academic foundations in Computer Science and Engineering." />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: 'var(--border)' }}
          />

          {education.map((item, i) => {
            const Icon = iconMap[i] || School;
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start mb-8 md:mb-12 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline marker */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    background: 'var(--grad-primary)',
                    boxShadow: '0 0 20px var(--glow-primary)',
                  }}
                >
                  <Icon size={18} color="#fff" />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                  className={`theme-transition glass card-shadow p-6 ml-16 md:ml-0 transition-all duration-300 hover:-translate-y-1 ${
                    isLeft ? 'md:mr-[calc(50%+2.5rem)]' : 'md:ml-[calc(50%+2.5rem)]'
                  }`}
                  style={{ borderRadius: 14 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.boxShadow = '0 8px 40px var(--glow-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}
                >
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {item.institution}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {item.degree}
                  </p>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      background: 'var(--muted)',
                      border: '1px solid var(--border)',
                      color: 'var(--accent-secondary)',
                    }}
                  >
                    {item.detail}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
