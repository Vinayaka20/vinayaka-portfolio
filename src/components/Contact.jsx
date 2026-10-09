import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileCode, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/portfolioData';
import SectionHeading from './SectionHeading';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!form.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`[Portfolio Contact] ${form.subject}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const url = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setMailtoUrl(url);
    setStatus('success');
    window.location.href = url;
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus(null);
  };

  const contactItems = [
    { Icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { Icon: Github, label: 'GitHub', value: 'Vinayaka20', href: contactInfo.github },
    { Icon: Linkedin, label: 'LinkedIn', value: 'vinayaka-h', href: contactInfo.linkedin },
    { Icon: FileCode, label: 'LeetCode', value: 'Vinay_CS124', href: contactInfo.leetcode },
  ];

  const inputStyle = {
    background: 'var(--input-bg)',
    borderColor: errors ? 'var(--border)' : 'var(--border)',
    color: 'var(--text-primary)',
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="orb" style={{ width: 400, height: 400, background: 'var(--orb-1)', top: '10%', left: '5%' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'var(--orb-2)', bottom: '5%', right: '10%' }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading eyebrow="Contact" title={contactInfo.heading} subtitle={contactInfo.description} />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass p-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Get in touch directly
              </h3>
              {contactItems.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="theme-transition flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.boxShadow = '0 0 20px var(--glow-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent-secondary)' }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</div>
                    <div className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="btn-gradient flex items-center justify-center gap-2 px-6 py-3.5 text-sm w-full"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="glass card-shadow p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className="theme-transition w-full px-4 py-3 rounded-xl border outline-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                    onBlur={(e) => { if (!errors.name) e.currentTarget.style.borderColor = 'var(--border)'; }}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#F87171' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="you@example.com"
                    className="theme-transition w-full px-4 py-3 rounded-xl border outline-none transition-all"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                    onBlur={(e) => { if (!errors.email) e.currentTarget.style.borderColor = 'var(--border)'; }}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#F87171' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder="What's this about?"
                  className="theme-transition w-full px-4 py-3 rounded-xl border outline-none transition-all"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onBlur={(e) => { if (!errors.subject) e.currentTarget.style.borderColor = 'var(--border)'; }}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#F87171' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your project or opportunity..."
                  className="theme-transition w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onBlur={(e) => { if (!errors.message) e.currentTarget.style.borderColor = 'var(--border)'; }}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#F87171' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-gradient flex items-center justify-center gap-2 px-6 py-3.5 text-sm w-full">
                <Send size={16} />
                <span>Send Message</span>
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="theme-transition p-4 rounded-xl flex items-start gap-3"
                    style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.25)' }}
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#22C55E' }} />
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        Your email client should have opened.
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        If it didn't, email me directly at {contactInfo.email}.
                      </p>
                      {mailtoUrl && (
                        <a href={mailtoUrl} className="text-xs font-medium mt-1 inline-block" style={{ color: 'var(--accent-secondary)' }}>
                          Click here to try again
                        </a>
                      )}
                      <button onClick={resetForm} className="text-xs ml-3" style={{ color: 'var(--text-secondary)' }}>
                        Reset form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                This form opens your email client. No data is sent to a server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
