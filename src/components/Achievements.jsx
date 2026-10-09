import { motion } from 'framer-motion';
import { Award, Calendar, User, ExternalLink } from 'lucide-react';
import { achievements } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 350, height: 350, background: 'var(--orb-2)', bottom: '10%', right: '10%' }} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading eyebrow="Recognition" title="Hackathons & Recognition" subtitle="Competition experience and achievements that reflect hands-on problem solving." />

        <div className="grid gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="theme-transition glass card-shadow p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: 16 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 8px 40px var(--glow-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl"
                style={{ background: 'var(--grad-primary)' }}
              >
                <Award size={30} color="#fff" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <User size={14} style={{ color: 'var(--accent-secondary)' }} />
                    {item.role}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar size={14} style={{ color: 'var(--accent-secondary)' }} />
                    {item.date}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium btn-outline-gradient px-4 py-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
