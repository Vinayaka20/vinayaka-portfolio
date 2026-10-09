import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Loader2, CheckCircle2, BarChart3, Calendar, Flame, Target, Sprout, Camera, Cpu, Vote, ShieldCheck, TrendingUp } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';

/* ===== Project Visual: DSA Dashboard ===== */
function DSADashboardVisual() {
  const days = Array.from({ length: 35 }, (_, i) => i);
  const intensities = [0, 0, 1, 2, 0, 3, 1, 0, 1, 2, 3, 2, 0, 1, 0, 2, 3, 1, 0, 1, 2, 0, 3, 2, 1, 0, 1, 2, 3, 0, 1, 0, 2, 1, 0];
  const colors = ['var(--muted)', 'rgba(139,92,246,0.35)', 'rgba(139,92,246,0.6)', 'var(--accent-primary)'];
  const stats = [
    { label: 'Solved', value: '247', icon: CheckCircle2 },
    { label: 'Streak', value: '12d', icon: Flame },
    { label: 'Goal', value: '85%', icon: Target },
  ];

  return (
    <div className="p-5 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={16} style={{ color: 'var(--accent-secondary)' }} />
        <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Solving Progress</span>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg p-2 text-center" style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}>
            <s.icon size={12} className="mx-auto mb-1" style={{ color: 'var(--accent-secondary)' }} />
            <div className="text-sm font-bold gradient-text">{s.value}</div>
            <div className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Heatmap */}
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={12} style={{ color: 'var(--text-secondary)' }} />
        <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>5-week commit activity</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5 mb-3">
        {days.map((d) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: d * 0.015 }}
            className="aspect-square rounded"
            style={{ background: colors[intensities[d] || 0] }}
          />
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-12">
        {[40, 65, 35, 80, 55, 90, 70, 45, 60, 75].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex-1 rounded-t"
            style={{ background: 'var(--grad-secondary)' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== Project Visual: IoT Weed Detection ===== */
function IoTVisionVisual() {
  return (
    <div className="p-5 relative">
      <div className="flex items-center gap-2 mb-4">
        <Camera size={16} style={{ color: 'var(--accent-secondary)' }} />
        <span className="text-xs font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>Vision Pipeline</span>
      </div>
      {/* Simulated camera view with detection boxes */}
      <div className="relative rounded-xl overflow-hidden mb-4" style={{ background: 'var(--muted)', border: '1px solid var(--border)', aspectRatio: '16/10' }}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Detection boxes */}
        {[
          { top: '15%', left: '10%', w: '30%', h: '35%', label: 'crop', isCrop: true },
          { top: '45%', left: '50%', w: '22%', h: '28%', label: 'weed', isCrop: false },
          { top: '20%', left: '55%', w: '18%', h: '22%', label: 'weed', isCrop: false },
        ].map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="absolute rounded border-2"
            style={{
              top: box.top, left: box.left, width: box.w, height: box.h,
              borderColor: box.isCrop ? 'var(--accent-secondary)' : '#F87171',
              boxShadow: box.isCrop ? '0 0 12px var(--glow-secondary)' : '0 0 12px rgba(248,113,113,0.3)',
            }}
          >
            <span
              className="absolute -top-5 left-0 text-[9px] font-mono px-1.5 py-0.5 rounded"
              style={{
                background: box.isCrop ? 'var(--accent-secondary)' : '#F87171',
                color: '#fff',
              }}
            >
              {box.label} {Math.floor(Math.random() * 20 + 80)}%
            </span>
          </motion.div>
        ))}
        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5"
          style={{ background: 'var(--grad-secondary)' }}
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Pipeline steps */}
      <div className="flex items-center justify-between text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1"><Camera size={12} /> Capture</span>
        <span>→</span>
        <span className="flex items-center gap-1"><Cpu size={12} /> Classify</span>
        <span>→</span>
        <span className="flex items-center gap-1"><Sprout size={12} /> Act</span>
      </div>
    </div>
  );
}

/* ===== Project Visual: Voting System ===== */
function VotingSystemVisual() {
  const candidates = [
    { name: 'Candidate A', votes: 142, pct: 52, color: 'var(--grad-primary)' },
    { name: 'Candidate B', votes: 98, pct: 36, color: 'var(--grad-secondary)' },
    { name: 'Candidate C', votes: 33, pct: 12, color: 'var(--muted)' },
  ];
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Vote size={16} style={{ color: 'var(--accent-secondary)' }} />
          <span className="text-xs font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>Live Poll</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>
          <ShieldCheck size={12} style={{ color: 'var(--accent-secondary)' }} /> Secure
        </span>
      </div>
      {candidates.map((c, i) => (
        <div key={c.name} className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{c.name}</span>
            <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>{c.votes} votes</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${c.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="h-full rounded-full"
              style={{ background: c.color }}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-4 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <span className="text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>Total votes cast</span>
        <span className="text-sm font-bold gradient-text flex items-center gap-1">
          <TrendingUp size={12} /> 273
        </span>
      </div>
    </div>
  );
}

const visualMap = {
  'dsa-dashboard': DSADashboardVisual,
  'iot-vision': IoTVisionVisual,
  'voting-system': VotingSystemVisual,
};

export default function Projects() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 400, height: 400, background: 'var(--orb-1)', bottom: '10%', left: '10%' }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Projects That Solve Problems" subtitle="Each project addresses a real-world challenge — from tracking algorithmic progress to deploying AI on embedded hardware." />

        <div className="space-y-8">
          {projects.map((project, i) => {
            const Visual = visualMap[project.visual];
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual */}
                <div
                  className="theme-transition glass-strong card-shadow overflow-hidden transition-all duration-300"
                  style={{ borderRadius: 16 }}
                >
                  {/* Window bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                      <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                    </div>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {project.id}.preview
                    </span>
                    {project.status && (
                      <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,211,238,0.15)', color: 'var(--accent-secondary)' }}>
                        <Loader2 size={10} className="animate-spin" /> {project.status}
                      </span>
                    )}
                  </div>
                  {Visual && <Visual />}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-[1.75rem] font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="mb-5" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {project.actionUrl ? (
                    <a
                      href={project.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                    >
                      <Github size={16} />
                      <span>{project.actionLabel}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border"
                      style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', background: 'var(--muted)' }}
                    >
                      <ExternalLink size={16} />
                      <span>{project.actionLabel}</span>
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
