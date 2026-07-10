"use client";

export default function DeskScene() {
  return (
    <div className="w-full max-w-[520px] relative">
      {/* Floating stat cards */}
      <div className="absolute top-[-30px] right-[20px] bg-card border border-border-card rounded-xl p-3 text-[11px] animate-float-1 z-10 select-none">
        <div className="text-muted text-[10px] tracking-[0.1em] uppercase mb-1">Experience</div>
        <div className="font-serif text-2xl font-bold bg-gradient-to-r from-accent to-accent3 bg-clip-text text-transparent">
          4.5+
        </div>
        <div className="text-[10px] text-muted">Years of building</div>
      </div>

      <div className="absolute bottom-[60px] left-[-20px] bg-card border border-border-card rounded-xl p-3 text-[11px] animate-float-2 z-10 select-none">
        <div className="text-muted text-[10px] tracking-[0.1em] uppercase mb-1">Projects</div>
        <div className="font-serif text-2xl font-bold bg-gradient-to-r from-accent to-accent3 bg-clip-text text-transparent">
          75+
        </div>
        <div className="text-[10px] text-muted">Delivered globally</div>
      </div>

      {/* SVG DESK SCENE */}
      <svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent3)" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="var(--color-accent3)" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="monGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1e2e"/>
            <stop offset="100%" stopColor="#13131e"/>
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a14"/>
            <stop offset="50%" stopColor="#111124"/>
            <stop offset="100%" stopColor="#0d0d1a"/>
          </linearGradient>
          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2040"/>
            <stop offset="100%" stopColor="#1a1530"/>
          </linearGradient>
          <linearGradient id="chairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e2848"/>
            <stop offset="100%" stopColor="#1e1a38"/>
          </linearGradient>
        </defs>

        {/* Background glow */}
        <ellipse cx="240" cy="300" rx="200" ry="100" fill="url(#glow1)" opacity="0.5"/>
        <ellipse cx="300" cy="180" rx="120" ry="80" fill="url(#glow2)" opacity="0.3"/>

        {/* FLOOR */}
        <ellipse cx="240" cy="380" rx="220" ry="18" fill="#1a1528" opacity="0.6"/>

        {/* CHAIR LEGS */}
        <rect x="155" y="310" width="6" height="60" rx="3" fill="#2a2040"/>
        <rect x="195" y="310" width="6" height="60" rx="3" fill="#2a2040"/>
        <rect x="155" y="365" width="48" height="5" rx="2" fill="#201a38"/>

        {/* CHAIR BASE/SEAT */}
        <rect x="130" y="260" width="100" height="55" rx="10" fill="url(#chairGrad)" stroke="#3a3060" strokeWidth="1"/>
        {/* Chair cushion highlight */}
        <rect x="135" y="263" width="90" height="20" rx="6" fill="rgba(255,255,255,0.04)"/>

        {/* CHAIR BACK */}
        <rect x="138" y="190" width="84" height="76" rx="10" fill="url(#chairGrad)" stroke="#3a3060" strokeWidth="1"/>
        {/* Back cushion highlight */}
        <rect x="143" y="194" width="74" height="30" rx="6" fill="rgba(255,255,255,0.04)"/>

        {/* Chair spine */}
        <rect x="174" y="265" width="12" height="20" rx="2" fill="#241d3a"/>

        {/* PERSON - Body */}
        {/* Torso */}
        <rect x="150" y="215" width="58" height="60" rx="10" fill="#1a1a2e" stroke="#2a2a42" strokeWidth="0.5"/>
        {/* Shirt */}
        <rect x="155" y="220" width="48" height="50" rx="8" fill="#252540"/>
        {/* Shirt details - collar */}
        <path d="M179 220 L179 232 L172 238 L179 244 L186 238 L179 232" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"/>
        {/* Shirt accent line */}
        <line x1="179" y1="232" x2="179" y2="268" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.4"/>

        {/* Person HEAD */}
        <ellipse cx="179" cy="203" rx="22" ry="24" fill="#e8b896"/>
        {/* Hair */}
        <path d="M157 195 Q159 175 179 172 Q199 175 201 195 Q195 180 179 179 Q163 180 157 195 Z" fill="#1a1010"/>
        {/* Face details */}
        {/* Eyes */}
        <ellipse cx="172" cy="200" rx="3" ry="3.5" fill="#1a1010"/>
        <ellipse cx="186" cy="200" rx="3" ry="3.5" fill="#1a1010"/>
        <ellipse cx="173" cy="199" rx="1" ry="1.2" fill="#fff" opacity="0.6"/>
        <ellipse cx="187" cy="199" rx="1" ry="1.2" fill="#fff" opacity="0.6"/>
        {/* Smile */}
        <path d="M173 210 Q179 215 185 210" fill="none" stroke="#c49070" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Ear */}
        <ellipse cx="157" cy="203" rx="4" ry="5" fill="#d9a880"/>
        <ellipse cx="201" cy="203" rx="4" ry="5" fill="#d9a880"/>

        {/* LEFT ARM - reaching to keyboard */}
        <path d="M155 230 Q140 250 130 265 Q125 270 130 272" fill="none" stroke="#e8b896" strokeWidth="10" strokeLinecap="round"/>
        {/* LEFT HAND on keyboard */}
        <ellipse cx="132" cy="274" rx="9" ry="6" fill="#e8b896"/>

        {/* RIGHT ARM - reaching to keyboard */}
        <path d="M205 230 Q220 250 232 265 Q237 270 234 272" fill="none" stroke="#e8b896" strokeWidth="10" strokeLinecap="round"/>
        {/* RIGHT HAND */}
        <ellipse cx="236" cy="274" rx="9" ry="6" fill="#e8b896"/>

        {/* DESK */}
        <rect x="80" y="280" width="340" height="16" rx="4" fill="url(#deskGrad)" stroke="#3a3060" strokeWidth="1"/>
        {/* Desk edge highlight */}
        <rect x="82" y="281" width="336" height="3" rx="2" fill="rgba(255,255,255,0.06)"/>

        {/* Desk legs */}
        <rect x="90" y="295" width="10" height="70" rx="3" fill="#201838"/>
        <rect x="400" y="295" width="10" height="70" rx="3" fill="#201838"/>
        {/* Cross bar */}
        <rect x="100" y="340" width="300" height="5" rx="2" fill="#201838"/>

        {/* MONITOR STAND */}
        <rect x="220" y="255" width="22" height="26" rx="3" fill="#1e1a30" stroke="#2a2640" strokeWidth="0.5"/>
        <rect x="210" y="278" width="42" height="6" rx="3" fill="#1e1a30" stroke="#2a2640" strokeWidth="0.5"/>

        {/* MONITOR - Main */}
        <rect x="155" y="115" width="172" height="142" rx="8" fill="url(#monGrad)" stroke="#3a3560" strokeWidth="1.5"/>
        {/* Bezel inner */}
        <rect x="160" y="120" width="162" height="130" rx="5" fill="url(#screenGrad)"/>

        {/* SCREEN CONTENT - Code Editor */}
        {/* Title bar */}
        <rect x="160" y="120" width="162" height="18" rx="5" fill="#1a1a2c"/>
        <rect x="160" y="132" width="162" height="6" fill="#1a1a2c"/>
        {/* Traffic lights */}
        <circle cx="170" cy="129" r="3.5" fill="#f76a6a" opacity="0.8"/>
        <circle cx="180" cy="129" r="3.5" fill="#f7c06a" opacity="0.8"/>
        <circle cx="190" cy="129" r="3.5" fill="#6af7a0" opacity="0.8"/>
        {/* File tab */}
        <rect x="200" y="122" width="60" height="14" rx="3" fill="#252540"/>
        <text x="210" y="132" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="7" fill="#8a88a0">App.tsx</text>
        {/* Sidebar */}
        <rect x="160" y="138" width="28" height="112" fill="#161620"/>
        {/* Sidebar icons */}
        <rect x="165" y="144" width="18" height="2" rx="1" fill="#3a3860"/>
        <rect x="165" y="150" width="18" height="2" rx="1" fill="#3a3860"/>
        <rect x="165" y="156" width="12" height="2" rx="1" fill="#3a3860"/>
        <rect x="165" y="166" width="18" height="2" rx="1" fill="var(--color-accent)" opacity="0.7"/>
        <rect x="165" y="172" width="14" height="2" rx="1" fill="#3a3860"/>
        {/* Code lines - colorful */}
        <text x="194" y="150" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-accent)">import</text>
        <text x="220" y="150" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="#8a88a0">React from</text>
        <text x="194" y="160" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-accent3)">const</text>
        <text x="213" y="160" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-text)">App = () =&gt;</text>
        <text x="194" y="170" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="#8a88a0">  return (</text>
        <text x="194" y="180" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-accent2)">&lt;div</text>
        <text x="214" y="180" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="#f7c06a">className</text>
        <text x="194" y="190" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-text)">    Hello</text>
        <text x="194" y="200" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="var(--color-accent2)">&lt;/div&gt;</text>
        <text x="194" y="210" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="#8a88a0">  );</text>
        <text x="194" y="220" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="6.5" fill="#8a88a0">{"}"}</text>
        {/* Cursor blink on screen */}
        <rect x="213" y="222" width="1.5" height="8" rx="0.5" fill="var(--color-accent)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite"/>
        </rect>
        {/* Status bar */}
        <rect x="160" y="243" width="162" height="7" fill="#0f0f1e"/>
        <text x="164" y="248" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="5" fill="var(--color-accent3)">⬡ main</text>
        <text x="270" y="248" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="5" fill="var(--color-accent)">React JSX</text>

        {/* Screen glow */}
        <rect x="160" y="120" width="162" height="130" rx="5" fill="url(#glow2)" opacity="0.05"/>

        {/* KEYBOARD */}
        <rect x="115" y="268" width="135" height="16" rx="4" fill="#1e1a30" stroke="#2a2640" strokeWidth="0.8"/>
        {/* Keys row 1 */}
        <rect x="119" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="129" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="139" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="149" y="270" width="8" height="5" rx="1" fill="var(--color-accent)" opacity="0.6"/>
        <rect x="159" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="169" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="179" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="189" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="199" y="270" width="8" height="5" rx="1" fill="#252540"/>
        <rect x="209" y="270" width="8" height="5" rx="1" fill="#252540"/>
        {/* Spacebar */}
        <rect x="150" y="278" width="50" height="4" rx="1" fill="#2a2640"/>
        {/* Typing animation dots */}
        <circle cx="149" cy="272" r="1" fill="var(--color-accent)">
          <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0s" repeatCount="indefinite"/>
        </circle>
        <circle cx="159" cy="272" r="1" fill="var(--color-accent3)">
          <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="169" cy="272" r="1" fill="var(--color-accent2)">
          <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.4s" repeatCount="indefinite"/>
        </circle>

        {/* MOUSE */}
        <rect x="272" y="264" width="24" height="16" rx="8" fill="#1e1a30" stroke="#2a2640" strokeWidth="0.8"/>
        <line x1="284" y1="264" x2="284" y2="280" stroke="#2a2640" strokeWidth="0.8"/>
        <ellipse cx="284" cy="268" rx="2" ry="1.5" fill="var(--color-accent)" opacity="0.5"/>

        {/* COFFEE CUP */}
        <rect x="340" y="255" width="26" height="24" rx="4" fill="#2a2040" stroke="#3a3060" strokeWidth="0.8"/>
        {/* Steam */}
        <path d="M346 252 Q348 246 350 252" fill="none" stroke="#8a88a0" strokeWidth="1" strokeLinecap="round" opacity="0.5">
          <animate attributeName="d" values="M346 252 Q348 246 350 252;M346 250 Q348 244 350 250;M346 252 Q348 246 350 252" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M352 252 Q354 245 356 252" fill="none" stroke="#8a88a0" strokeWidth="1" strokeLinecap="round" opacity="0.4">
          <animate attributeName="d" values="M352 252 Q354 245 356 252;M352 250 Q354 243 356 250;M352 252 Q354 245 356 252" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </path>
        {/* Coffee liquid */}
        <rect x="342" y="261" width="20" height="15" rx="2" fill="#6b3a2a" opacity="0.8"/>
        {/* Cup handle */}
        <path d="M366 260 Q374 262 374 267 Q374 272 366 274" fill="none" stroke="#2a2040" strokeWidth="3" strokeLinecap="round"/>

        {/* NOTEPAD */}
        <rect x="320" y="265" width="20" height="14" rx="2" fill="#fffde8" stroke="#c8c060" strokeWidth="0.5"/>
        <rect x="322" y="268" width="14" height="1.5" rx="0.5" fill="#aaa890"/>
        <rect x="322" y="271" width="12" height="1.5" rx="0.5" fill="#aaa890"/>
        <rect x="322" y="274" width="10" height="1.5" rx="0.5" fill="var(--color-accent2)" opacity="0.7"/>

        {/* SMALL PLANT */}
        <rect x="90" y="258" width="14" height="20" rx="3" fill="#3a2040" stroke="#4a3060" strokeWidth="0.5"/>
        <ellipse cx="94" cy="240" rx="8" ry="20" fill="#1a3020" stroke="#2a4030" strokeWidth="0.5"/>
        <ellipse cx="105" cy="248" rx="7" ry="14" fill="#1f3825" stroke="#2a4030" strokeWidth="0.5"/>
        <path d="M97 268 Q97 250 97 240" fill="none" stroke="#2a4030" strokeWidth="0.8"/>
        <path d="M97 260 Q104 255 105 248" fill="none" stroke="#2a4030" strokeWidth="0.8"/>

        {/* Ambient light from screen on face */}
        <ellipse cx="179" cy="200" rx="25" ry="28" fill="var(--color-accent)" opacity="0.04"/>

        {/* Floating code snippets around */}
        <text x="42" y="165" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="8" fill="var(--color-accent)" opacity="0.3" transform="rotate(-15 42 165)">
          &lt;React /&gt;
        </text>
        <text x="395" y="190" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="8" fill="var(--color-accent3)" opacity="0.3" transform="rotate(10 395 190)">
          const {"{}"}
        </text>
        <text x="55" y="320" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="7" fill="var(--color-accent2)" opacity="0.25">
          PHP
        </text>
        <text x="405" y="310" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="7" fill="#f7c06a" opacity="0.25">
          MySQL
        </text>
      </svg>
    </div>
  );
}
