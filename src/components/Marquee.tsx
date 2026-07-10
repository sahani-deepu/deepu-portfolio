"use client";

const SKILLS = [
  "React.js",
  "WordPress",
  "PHP",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "MySQL",
  "JavaScript ES6+",
  "SEO Optimization",
  "Git & GitHub",
];

export default function Marquee() {
  // Double the array to make the infinite scrolling loop smooth and seamless
  const doubledSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="relative z-10 overflow-hidden py-4 border-y border-border-card bg-bg2 select-none">
      <div className="flex gap-12 animate-marquee-track whitespace-nowrap">
        {doubledSkills.map((skill, index) => (
          <span
            key={index}
            className="text-[11px] tracking-[0.18em] uppercase text-muted flex items-center gap-12 shrink-0 after:content-['⬡'] after:text-accent after:text-[8px]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
