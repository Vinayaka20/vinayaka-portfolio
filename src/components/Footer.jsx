import { ArrowUp, Github, Linkedin, FileCode, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { Icon: Github, href: socialLinks.github, label: 'GitHub' },
    { Icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: FileCode, href: socialLinks.leetcode, label: 'LeetCode' },
  ];

  return (
    <footer className="relative pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--grad-primary)', opacity: 0.4 }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: monogram + name */}
          <div className="flex items-center gap-3">
            <span
              className="flex items-center justify-center w-10 h-10 rounded-lg text-sm font-bold"
              style={{ background: 'var(--grad-primary)', color: '#fff' }}
            >
              VH
            </span>
            <div>
              <div className="font-semibold" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                {personalInfo.name}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.tagline}
              </div>
            </div>
          </div>

          {/* Right: social + back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {links.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="theme-transition flex items-center justify-center w-9 h-9 rounded-full border transition-all hover:scale-110"
                  style={{ background: 'var(--glass)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="theme-transition flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:scale-110"
              style={{ background: 'var(--glass)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
            Built with <Heart size={12} style={{ color: 'var(--accent-primary)' }} /> using React &amp; Vite
          </p>
        </div>
      </div>

      {/* Floating back-to-top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full btn-gradient"
          style={{ boxShadow: '0 4px 20px var(--glow-primary)' }}
        >
          <ArrowUp size={20} color="#fff" />
        </button>
      )}
    </footer>
  );
}
