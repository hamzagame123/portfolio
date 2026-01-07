import { useEffect, useMemo, useState } from 'react';

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
        padding: '20px 24px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Logo - Left side - matches landing page */}
      <a
        href="../../"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #84cc16 0%, #10b981 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700,
            color: '#0c0c0c',
          }}
        >
          HG
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
          gap: '40px',
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
                    background: '#84cc16',
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









