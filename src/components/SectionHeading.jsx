import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mb-12 md:mb-16">
      {eyebrow && (
        <Reveal>
          <p className="section-eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="section-title">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="section-subtitle">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
