import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navStyle = {
    background: scrolled ? 'var(--glass-strong)' : 'transparent',
    borderColor: scrolled ? 'var(--border)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="theme-transition fixed top-0 left-0 right-0 z-50 border-b"
        style={navStyle}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="theme-transition flex items-center gap-2 font-bold text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            aria-label="Go to home"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold"
              style={{
                background: 'var(--grad-primary)',
                color: '#fff',
              }}
            >
              VH
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="theme-transition relative px-4 py-2 text-sm font-medium transition-colors rounded-lg"
                style={{
                  color:
                    activeSection === id
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== id)
                    e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== id)
                    e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {label}
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ background: 'var(--hover-surface)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium btn-gradient"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={16} />
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border"
              style={{
                background: 'var(--glass)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.5)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="theme-transition absolute right-0 top-0 bottom-0 w-72 p-6 pt-24 flex flex-col gap-2"
              style={{
                background: 'var(--bg-secondary)',
                borderLeft: '1px solid var(--border)',
              }}
            >
              {navItems.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  onClick={() => handleNavClick(id)}
                  className="theme-transition text-left px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color:
                      activeSection === id
                        ? 'var(--text-primary)'
                        : 'var(--text-secondary)',
                    background:
                      activeSection === id ? 'var(--hover-surface)' : 'transparent',
                  }}
                >
                  {label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium btn-gradient"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
