'use client';

import { useSectionObserver } from '@/hooks/useSectionObserver';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { SECTION_IDS } from '@/config/defaults';

const sections = [
  { id: SECTION_IDS[0], label: 'Home' },
  { id: SECTION_IDS[1], label: 'Origin' },
  { id: SECTION_IDS[2], label: 'Learning' },
  { id: SECTION_IDS[3], label: 'Projects' },
  { id: SECTION_IDS[4], label: 'Work' },
  { id: SECTION_IDS[5], label: 'Now' },
];

export const ScrollNav = () => {
  const sectionIds = sections.map(s => s.id);
  const { activeSection, scrollToSection } = useSectionObserver(sectionIds);
  const { progress } = useScrollProgress();

  return (
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3"
      aria-label="Section navigation"
    >
      {/* Progress line background */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-border rounded-full" />
      
      {/* Progress line fill */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-foreground rounded-full transition-all duration-300 origin-top"
        style={{ height: `${progress * 100}%` }}
      />

      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        const isPast = sections.findIndex(s => s.id === activeSection) > index;
        
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group flex items-center gap-3"
            aria-label={`Navigate to ${section.label}`}
            data-cursor="link"
          >
            {/* Dot */}
            <div 
              className={`relative z-10 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-foreground border-foreground scale-125' 
                  : isPast
                    ? 'bg-foreground/50 border-foreground/50'
                    : 'bg-background border-muted-foreground/50 group-hover:border-foreground'
              }`}
            >
              {/* Active pulse */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-20" />
              )}
            </div>

            {/* Label tooltip */}
            <span 
              className={`absolute right-full mr-4 px-2 py-1 text-xs font-medium rounded glass whitespace-nowrap transition-all duration-300 ${
                isActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default ScrollNav;
