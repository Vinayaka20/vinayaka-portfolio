import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolioData';
import SocialIcons from './SocialIcons';

const codeLines = [
  { text: 'public class Developer {', indent: 0 },
  { text: 'private String name = "Vinayaka H";', indent: 1, highlight: true },
  { text: 'private String role = "CS Student";', indent: 1, highlight: true },
  { text: 'private String[] stack = {', indent: 1 },
  { text: '"Java", "Spring Boot", "React",', indent: 2 },
  { text: '"Python", "MySQL", "TensorFlow"', indent: 2 },
  { text: '};', indent: 1 },
  { text: '', indent: 0 },
  { text: 'public void solve(Problem p) {', indent: 1 },
  { text: 'while (!p.isSolved()) {', indent: 2 },
  { text: 'p.analyze(); p.build();', indent: 3, highlight: true },
  { text: '}', indent: 2 },
  { text: '}', indent: 1 },
  { text: '}', indent: 0 },
];

const techLabels = [
  { name: 'Java', top: '8%', left: '-8%', delay: 0 },
  { name: 'Spring Boot', top: '30%', right: '-12%', delay: 0.5 },
  { name: 'React', bottom: '28%', left: '-10%', delay: 1 },
  { name: 'Python', bottom: '6%', right: '-6%', delay: 1.5 },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Ambient orbs */}
      <div className="orb animate-float-slow" style={{ width: 400, height: 400, background: 'var(--orb-1)', top: '10%', right: '5%' }} />
      <div className="orb animate-float-slow" style={{ width: 350, height: 350, background: 'var(--orb-2)', bottom: '5%', left: '0%', animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <Sparkles size={14} style={{ color: 'var(--accent-secondary)' }} />
            <span className="text-xs font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Building </span>
            <span className="gradient-text">Intelligent Systems.</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>Engineering </span>
            <span className="gradient-text-sec">Reliable Software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg mb-8 max-w-xl"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="btn-gradient flex items-center gap-2 px-6 py-3 text-sm"
            >
              <span>Explore My Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline-gradient flex items-center gap-2 px-6 py-3 text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              <Mail size={16} />
              <span>Get In Touch</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SocialIcons size={18} />
          </motion.div>
        </div>

        {/* Right column — Code panel visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative">
            {/* Floating tech labels */}
            {techLabels.map((label) => (
              <motion.div
                key={label.name}
                className="absolute z-20 tech-badge animate-float"
                style={{
                  top: label.top,
                  bottom: label.bottom,
                  left: label.left,
                  right: label.right,
                  animationDelay: `${label.delay}s`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + label.delay * 0.2, duration: 0.5 }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--accent-secondary)' }}
                />
                {label.name}
              </motion.div>
            ))}

            {/* Code panel */}
            <div className="glass-strong card-shadow glow-primary p-0 overflow-hidden relative" style={{ borderRadius: 16 }}>
              {/* Window bar */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                  Developer.java
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm overflow-hidden" style={{ lineHeight: 1.7 }}>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                    className="flex"
                    style={{ paddingLeft: `${line.indent * 20}px` }}
                  >
                    <span className="select-none mr-4 text-right" style={{ width: '2rem', color: 'var(--text-secondary)', opacity: 0.4 }}>
                      {i + 1}
                    </span>
                    <span style={{
                      color: line.highlight ? 'var(--accent-secondary)' : 'var(--text-primary)',
                      whiteSpace: 'pre',
                    }}>
                      {line.text || ' '}
                    </span>
                  </motion.div>
                ))}
                {/* Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 ml-12 mt-1"
                  style={{ background: 'var(--accent-primary)' }}
                />
              </div>

              {/* Scan line effect */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ borderRadius: 16 }}
              >
                <motion.div
                  className="absolute left-0 right-0 h-px"
                  style={{ background: 'var(--grad-secondary)', opacity: 0.3 }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Stats badges below code panel */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: 'Languages', value: '6+' },
                { label: 'Projects', value: '3' },
                { label: 'CGPA', value: '8.2' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass p-3 text-center"
                >
                  <div className="text-xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
