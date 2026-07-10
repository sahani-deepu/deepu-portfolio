"use client";

import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import DeskScene from "@/components/DeskScene";
import Marquee from "@/components/Marquee";

// Custom component for Section Headers
function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-5 mb-16 reveal-el">
      <span className="font-mono text-[11px] text-accent tracking-[0.1em]">{num}</span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic tracking-tight">{title}</h2>
      <div className="flex-1 h-[1px] bg-border-card" />
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Setup intersection observer for scroll reveal effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal-el");
    elements.forEach((el, index) => {
      // Staggered delay for child elements
      (el as HTMLElement).style.transitionDelay = `${(index % 3) * 0.08}s`;
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen relative z-1">
      {/* Custom interactive cursor */}
      <CustomCursor />

      {/* HEADER / NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[500] flex flex-col md:flex-row justify-between md:items-center px-6 md:px-16 py-5 bg-bg/85 backdrop-blur-md border-b border-border-card transition-all duration-300 ${mobileMenuOpen ? "h-screen bg-[#0d0d14] !backdrop-blur-none" : ""}`}>
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#home" className="font-serif text-xl md:text-2xl italic font-bold bg-gradient-to-r from-accent to-accent3 bg-clip-text text-transparent select-none">
            Deepu Sahani
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-[510] bg-bg3 border border-border-card rounded-md p-1.5"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9">
          <li>
            <a href="#skills" className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Work
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Overlay Content */}
        {mobileMenuOpen && (
          <div className="flex-1 flex flex-col justify-center items-center md:hidden">
            <ul className="flex flex-col gap-8 text-center">
              <li>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16 pt-32 pb-16 gap-16 items-center relative z-1 max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left">
          <div className="status-badge inline-flex items-center gap-2 px-4 py-2 border border-accent3/30 rounded-full text-[11px] tracking-[0.15em] uppercase text-accent3 mb-7">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-accent3 animate-status-dot" />
            Open to opportunities
          </div>

          <h1 className="font-serif text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter mb-5">
            <span className="block text-text">Full Stack</span>
            <span className="block italic bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-transparent">Developer.</span>
            <span className="block text-muted text-[0.65em] font-normal tracking-normal mt-2 leading-tight">
              Building the web, one pixel at a time.
            </span>
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-muted max-w-[460px] mb-10">
            <strong className="text-text font-medium">4.5+ years</strong> crafting scalable web experiences with React, WordPress & PHP. 
            From lead automation to REST APIs — I build digital products that <strong className="text-text font-medium">perform, rank, and convert</strong>.
            Based in Delhi, working globally.
          </p>

          <div className="flex gap-4 items-center mb-12">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-accent to-[#9b6af7] text-white text-[12px] tracking-[0.12em] uppercase rounded-lg font-medium shadow-[0_0_30px_rgba(124,106,247,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(124,106,247,0.5)] transition-all duration-200"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M2 4l6 5 6-5M2 4h12v9H2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get in touch
            </a>
            <a
              href="#experience"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 border border-border-card text-muted hover:border-accent hover:text-text text-[12px] tracking-[0.12em] uppercase rounded-lg transition-colors duration-200"
            >
              View work →
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 text-[12px] text-muted font-mono">
              <span className="w-7 h-7 rounded bg-bg3 border border-border-card flex items-center justify-center text-[13px] shrink-0">📍</span>
              Mandawali, Delhi, India
            </div>
            <div className="flex items-center gap-3 text-[12px] text-muted font-mono">
              <span className="w-7 h-7 rounded bg-bg3 border border-border-card flex items-center justify-center text-[13px] shrink-0">✉</span>
              deepusahani08@gmail.com
            </div>
            <div className="flex items-center gap-3 text-[12px] text-muted font-mono">
              <span className="w-7 h-7 rounded bg-bg3 border border-border-card flex items-center justify-center text-[13px] shrink-0">📞</span>
              +91 96164 95093
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <DeskScene />
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 md:px-16 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <SectionHeader num="01" title="Technical Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">Frontend</div>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "Tailwind", "Responsive Design"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">Backend</div>
              <div className="flex flex-wrap gap-2">
                {["PHP", "Node.js", "REST API", "Core PHP", "MySQL"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">CMS</div>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "Custom Themes", "Plugin Dev", "Gutenberg"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">DevOps & Tools</div>
              <div className="flex flex-wrap gap-2">
                {["Git / GitHub", "Nginx", "Cloudflare", "Vercel"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">Marketing & Analytics</div>
              <div className="flex flex-wrap gap-2">
                {["SEO Optimization", "Google Analytics", "Poptin", "Lead Automation", "Google Sheets API"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent mb-[18px]">Design</div>
              <div className="flex flex-wrap gap-2">
                {["Adobe Photoshop", "Adobe Illustrator", "UI/UX Principles"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 bg-accent/8 border border-accent/20 hover:bg-accent/20 hover:border-accent rounded-full text-text transition-all duration-200 select-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 md:px-16 bg-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader num="02" title="Experience" />

          <div className="flex flex-col">
            <div className="exp-item reveal-el grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-12 border-b border-border-card relative">
              <div>
                <div className="font-mono text-[11px] text-accent tracking-[0.05em] mb-3.5">Oct 2024 — Present</div>
                <div className="text-xl font-semibold tracking-tight mb-1.5">Kairali Ayurvedic Group</div>
                <div className="text-[12px] text-muted">Delhi, India · Global Wellness Brand</div>
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl italic tracking-tight mb-4 bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
                  Web Developer
                </h3>
                <p className="text-[13px] leading-relaxed text-muted mb-5">
                  Working with a globally recognized wellness brand to develop and optimize their digital presence. Built high-conversion landing pages for marketing campaigns, integrated REST APIs and PHP backend functionality, and implemented lead capture systems with automated Google Sheets pipelines. Collaborated closely with marketing teams on SEO improvements, significantly improving website performance through frontend optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "PHP", "REST API", "Poptin", "SEO", "Google Sheets", "MySQL / POSTGRE SQL"].map((pill) => (
                    <span key={pill} className="text-[10px] tracking-[0.1em] uppercase px-3.5 py-1.5 bg-bg3 border border-border-card rounded-full text-text">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="exp-item reveal-el grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-12 border-b border-border-card relative">
              <div>
                <div className="font-mono text-[11px] text-accent tracking-[0.05em] mb-3.5">May 2023 — Oct 2024</div>
                <div className="text-xl font-semibold tracking-tight mb-1.5">Web Brain Infotech</div>
                <div className="text-[12px] text-muted">New Delhi, NCR · Web & Digital Agency</div>
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl italic tracking-tight mb-4 bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
                  Web Developer
                </h3>
                <p className="text-[13px] leading-relaxed text-muted mb-5">
                  Designed and developed responsive websites across multiple client verticals — from e-commerce to professional services. Implemented modern UI/UX design principles and delivered measurable improvements in SEO and page speed. Worked across the full stack with PHP, MySQL, and custom WordPress solutions for international clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WordPress", "PHP", "MySQL", "UI/UX", "Performance"].map((pill) => (
                    <span key={pill} className="text-[10px] tracking-[0.1em] uppercase px-3.5 py-1.5 bg-bg3 border border-border-card rounded-full text-text">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="exp-item reveal-el grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-12 border-b border-border-card relative">
              <div>
                <div className="font-mono text-[11px] text-accent tracking-[0.05em] mb-3.5">Jul 2021 — Dec 2022</div>
                <div className="text-xl font-semibold tracking-tight mb-1.5">LYB Technology</div>
                <div className="text-[12px] text-muted">India · Digital Development</div>
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl italic tracking-tight mb-4 bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
                  Web Designer & Developer
                </h3>
                <p className="text-[13px] leading-relaxed text-muted mb-5">
                  Designed and built responsive, mobile-first websites for diverse clients. Developed frontend interfaces using HTML5, CSS3, JavaScript, and Bootstrap. Took full ownership of cross-browser compatibility, performance optimization, and ongoing maintenance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "Bootstrap", "WordPress"].map((pill) => (
                    <span key={pill} className="text-[10px] tracking-[0.1em] uppercase px-3.5 py-1.5 bg-bg3 border border-border-card rounded-full text-text">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-16 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <SectionHeader num="03" title="Key Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", client: "Kairali Ayurvedic Group", name: "ayurvedichealingvillage.com", type: "Ayurvedic Healing & Wellness Resort" },
              { num: "02", client: "Kairali Ayurvedic Group", name: "kairalicenters.com", type: "Wellness Centers Platform" },
              { num: "03", client: "Kairali Ayurvedic Group", name: "villaraag.com", type: "Luxury Villa & Hospitality Website" },
              { num: "04", client: "Kairali Ayurvedic Group", name: "whyayurveda.org", type: "Ayurveda Awareness Platform" },
              { num: "05", client: "Kairali Ayurvedic Group", name: "kairalicars.com", type: "Car Rental & Travel Services" },
              { num: "06", client: "Kairali Ayurvedic Group", name: "ayurvedafranchise.com", type: "Ayurveda Franchise Platform" },
              { num: "07", client: "Kairali Ayurvedic Group", name: "kairaliproducts.in", type: "Ayurvedic Products E-commerce" },
              { num: "08", client: "Kairali Ayurvedic Group", name: "kairaliproducts.com", type: "Global Ayurvedic Products Store" },
              { num: "09", client: "Web Brain Infotech", name: "webbraininfotech.com", type: "Agency Website" },
              { num: "10", client: "Web Brain Infotech", name: "indosoul.com.au", type: "Australian E-commerce" },
              { num: "11", client: "Web Brain Infotech", name: "bentec.digital", type: "Digital Services" },
              { num: "12", client: "Web Brain Infotech", name: "chouettelove.com", type: "Lifestyle Brand" },
              { num: "13", client: "Web Brain Infotech", name: "undoyourstress.com", type: "Wellness Platform" },
              { num: "14", client: "LYB Technology", name: "infonoble.com", type: "Corporate Site" },
              { num: "15", client: "LYB Technology", name: "padmachakra.org", type: "NGO / Non-Profit" },
              { num: "16", client: "LYB Technology", name: "server4king.com", type: "Tech Services" },
              { num: "17", client: "LYB Technology", name: "helpinghandsprofessional.com", type: "Professional Services" },
            ].map((p) => (
              <a
                key={p.num}
                href={`https://${p.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card reveal-el bg-card border border-border-card rounded-2xl p-7 relative overflow-hidden group hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 pr-12 block"
              >
                {/* Arrow hover indicator */}
                <span className="absolute top-5 right-5 text-base text-accent opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200">
                  ↗
                </span>
                <div className="font-mono text-[10px] text-muted mb-4 tracking-[0.1em]">{p.num} · {p.client}</div>
                <h4 className="text-base font-semibold mb-2 break-all tracking-tight text-text">
                  {p.name}
                </h4>
                <div className="text-[11px] tracking-[0.1em] uppercase text-accent2">
                  {p.type}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 md:px-16 bg-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader num="04" title="Education" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="edu-card reveal-el bg-card border border-border-card rounded-2xl p-8 hover:border-accent2/40 hover:-translate-y-1 transition-all duration-300">
              <div className="edu-year font-serif text-[52px] font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent line-none mb-3 leading-none">
                2019
              </div>
              <h4 className="text-[15px] font-medium mb-2 leading-snug">Diploma in Computer Science & Engineering</h4>
              <div className="text-[11px] text-muted tracking-[0.08em] mb-4">Rishi Ramnaresh Technical Institute</div>
              <span className="edu-grade inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1 bg-accent3/10 border border-accent3/20 rounded-full text-accent3">
                ✓ 69% CGPA
              </span>
            </div>

            <div className="edu-card reveal-el bg-card border border-border-card rounded-2xl p-8 hover:border-accent2/40 hover:-translate-y-1 transition-all duration-300">
              <div className="edu-year font-serif text-[52px] font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent line-none mb-3 leading-none">
                2016
              </div>
              <h4 className="text-[15px] font-medium mb-2 leading-snug">Class XII — Science</h4>
              <div className="text-[11px] text-muted tracking-[0.08em] mb-4">UP Board</div>
              <span className="edu-grade inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1 bg-accent3/10 border border-accent3/20 rounded-full text-accent3">
                ✓ 83% Distinction
              </span>
            </div>

            <div className="edu-card reveal-el bg-card border border-border-card rounded-2xl p-8 hover:border-accent2/40 hover:-translate-y-1 transition-all duration-300">
              <div className="edu-year font-serif text-[52px] font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent line-none mb-3 leading-none">
                2014
              </div>
              <h4 className="text-[15px] font-medium mb-2 leading-snug">Class X — Secondary</h4>
              <div className="text-[11px] text-muted tracking-[0.08em] mb-4">UP Board</div>
              <span className="edu-grade inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1 bg-accent3/10 border border-accent3/20 rounded-full text-accent3">
                ✓ 72.8% First Division
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-24 px-6 md:px-16 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <SectionHeader num="05" title="About Me" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="about-text reveal-el text-sm md:text-base leading-relaxed text-muted space-y-5">
              <p>
                I'm a <strong className="text-text font-medium">Full Stack Web Developer</strong> based in Delhi with 4.5+ years of experience building scalable, high-performance web applications that genuinely move the needle for businesses.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-text font-medium">engineering and marketing</strong> — I don't just build what works technically, I build what converts, ranks, and scales. From lead automation to REST API integrations to performance-tuned WordPress deployments, I care about the full picture.
              </p>
              <p>
                Whether it's a complex React application, a global wellness brand's website, or an e-commerce platform serving international markets, I bring the same <strong className="text-text font-medium">attention to quality, detail, and collaboration</strong> to every project.
              </p>
              <p>When I'm not coding, I'm likely sipping chai and thinking about the next feature. ☕</p>
            </div>

            <div className="details-list reveal-el flex flex-col bg-card border border-border-card rounded-2xl p-6 md:p-8">
              {[
                { label: "Location", val: "Mandawali, Delhi, India" },
                { label: "Languages", val: "Hindi & English" },
                { label: "Nationality", val: "Indian" },
                { label: "Date of Birth", val: "07 July 1999" },
                { label: "Father's Name", val: "Mr. Parshuram Sahani" },
                { label: "Marital Status", val: "Unmarried" },
                { label: "Status", val: "● Open to opportunities", green: true },
              ].map((d, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-border-card last:border-b-0 text-[13px]">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-muted">{d.label}</span>
                  <span className={`text-text ${d.green ? "text-accent3" : ""}`}>{d.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="relative z-1 py-24 px-6 md:px-16 bg-bg border-t border-border-card overflow-hidden">
        {/* Glow element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(124,106,247,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
            <div className="footer-cta">
              <h3 className="font-serif text-[44px] md:text-[52px] italic leading-[1.1] tracking-tighter mb-7 bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
                Let's build<br />something great.
              </h3>
              <a
                href="mailto:deepusahani08@gmail.com"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-accent to-[#9b6af7] text-white text-[12px] tracking-[0.12em] uppercase rounded-lg font-medium shadow-[0_0_30px_rgba(124,106,247,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(124,106,247,0.5)] transition-all duration-200"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path d="M2 4l6 5 6-5M2 4h12v9H2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                deepusahani08@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3.5 lg:text-right pt-2 select-none">
              <a href="tel:+919616495093" className="text-[13px] text-muted hover:text-text font-mono transition-colors">
                +91 96164 95093
              </a>
              <a href="mailto:deepusahani725@gmail.com" className="text-[13px] text-muted hover:text-text font-mono transition-colors">
                deepusahani725@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/deepu-sahani-149878229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-muted hover:text-text font-mono transition-colors"
              >
                Go to LinkedIn
              </a>
              <a href="#home" className="text-[13px] text-muted hover:text-text font-mono transition-colors">
                Back to top ↑
              </a>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-border-card flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] tracking-[0.08em] text-muted select-none">
            <span>© 2025 Deepu Sahani</span>
            <span>Full Stack Web Developer · Delhi, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
