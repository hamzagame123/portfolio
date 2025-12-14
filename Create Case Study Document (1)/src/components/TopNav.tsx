import { useEffect, useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Design', href: '#design', id: 'design' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Results', href: '#results', id: 'results' },
];

export function TopNav() {
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const [activeId, setActiveId] = useState<string>('overview');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));

        if (inView[0]?.target?.id) {
          setActiveId(inView[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: '-96px 0px -70% 0px',
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Logo - Left side */}
      <a
        href="#overview"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles style={{ width: '16px', height: '16px', color: '#0f172a' }} />
        </div>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Hamza Galbete
        </span>
      </a>

      {/* Nav Links - Right side */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {navLinks.map((link) => {
          const isActive = activeId === link.id;
          return (
            <a
              key={link.href}
              href={link.href}
              style={{
                position: 'relative',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                paddingBottom: '4px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              {link.label}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '2px',
                    background: '#a3e635',
                    borderRadius: '2px',
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

