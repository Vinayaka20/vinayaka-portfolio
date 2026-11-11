import { Github, Linkedin, FileCode } from 'lucide-react';
import { socialLinks } from '@/data/portfolioData';

export default function SocialIcons({ size = 20, className = '' }) {
  const links = [
    { Icon: Github, href: socialLinks.github, label: 'GitHub' },
    { Icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: FileCode, href: socialLinks.leetcode, label: 'LeetCode' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="theme-transition flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:scale-110 hover:-translate-y-0.5"
          style={{
            background: 'var(--glass)',
            borderColor: 'var(--border)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent-primary)';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.boxShadow = '0 0 20px var(--glow-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
