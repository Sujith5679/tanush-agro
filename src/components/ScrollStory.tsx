import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    number: '01',
    title: 'The Beginning',
    description: 'A vision to build and grow businesses across diverse sectors, starting from Vellore, Tamil Nadu.',
  },
  {
    number: '02',
    title: 'Agricultural Trade',
    description: 'Connecting directly with farmers to source quality produce for domestic and international markets.',
  },
  {
    number: '03',
    title: 'Hospitality',
    description: 'Creating spaces for relaxation and dining — a village-style cafe, farm-stay resort, and restaurant in Odugathur.',
  },
  {
    number: '04',
    title: 'Solar & Electricals',
    description: 'Entering the renewable energy space with solar air-conditioning and electrical solutions.',
  },
  {
    number: '05',
    title: 'Logistics',
    description: 'Supporting the movement of goods with road transportation services across destinations.',
  },
  {
    number: '06',
    title: 'The Road Ahead',
    description: 'Continuing to diversify and grow — building long-term value for customers, partners, and communities.',
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion.current) return;

    // Only pin on desktop/tablet
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    const progress = progressRef.current;
    if (!section || !pinned || !progress) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${chapters.length * 100}%`,
          pin: pinned,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Animate progress line
      tl.to(progress, {
        scaleY: 1,
        ease: 'none',
        duration: chapters.length,
      }, 0);

      // Animate chapters
      chapterRefs.current.forEach((chapterEl, i) => {
        if (!chapterEl) return;
        if (i === 0) {
          // First chapter starts visible
          tl.fromTo(chapterEl,
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 1 },
            0
          );
          if (i < chapters.length - 1) {
            tl.to(chapterEl, { opacity: 0, y: -30, duration: 0.5 }, 0.7);
          }
        } else {
          tl.fromTo(chapterEl,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5 },
            i * 1
          );
          if (i < chapters.length - 1) {
            tl.to(chapterEl, { opacity: 0, y: -30, duration: 0.5 }, i * 1 + 0.7);
          }
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Reduced motion / mobile fallback: stacked timeline
  const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section ref={sectionRef} className="relative" style={{ backgroundColor: 'var(--color-hero-bg)' }}>
      {/* Pinned container (desktop, motion enabled) */}
      {!isReducedMotion && (
        <div ref={pinnedRef} className="hidden md:flex min-h-screen items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left: Section label */}
              <div className="col-span-3">
                <p
                  className="text-xs uppercase tracking-[0.2em] font-medium"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Our Story
                </p>
                <h2
                  className="mt-4"
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    color: 'var(--color-hero-text)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  }}
                >
                  Growing Across Industries
                </h2>
              </div>

              {/* Center: Progress line */}
              <div className="col-span-1 flex justify-center">
                <div className="relative h-[300px] w-[2px]" style={{ backgroundColor: 'var(--color-hero-text)', opacity: 0.1 }}>
                  <div
                    ref={progressRef}
                    className="absolute top-0 left-0 w-full origin-top"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      height: '100%',
                      transform: 'scaleY(0)',
                    }}
                  />
                </div>
              </div>

              {/* Right: Chapter content */}
              <div className="col-span-8 relative h-[200px]">
                {chapters.map((chapter, i) => (
                  <div
                    key={chapter.number}
                    ref={(el) => { chapterRefs.current[i] = el; }}
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <span
                      className="text-7xl font-bold mb-4"
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        color: 'var(--color-accent)',
                        opacity: 0.3,
                      }}
                    >
                      {chapter.number}
                    </span>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-hero-text)' }}>
                      {chapter.title}
                    </h3>
                    <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--color-hero-text)', opacity: 0.5 }}>
                      {chapter.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fallback: stacked vertical timeline (mobile + reduced motion) */}
      <div className={`${isReducedMotion ? 'block' : 'md:hidden'} py-24`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p
            className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Our Story
          </p>
          <h2
            className="mb-16"
            style={{
              fontFamily: '"Outfit", sans-serif',
              color: 'var(--color-hero-text)',
            }}
          >
            Growing Across Industries
          </h2>

          <div className="relative pl-8 space-y-16">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ backgroundColor: 'var(--color-accent)', opacity: 0.2 }}
            />

            {chapters.map((chapter) => (
              <div key={chapter.number} className="relative">
                {/* Dot on line */}
                <div
                  className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'var(--color-hero-bg)',
                  }}
                />
                <span
                  className="text-sm font-bold mb-2 block"
                  style={{ color: 'var(--color-accent)', opacity: 0.6 }}
                >
                  {chapter.number}
                </span>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-hero-text)' }}>
                  {chapter.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-hero-text)', opacity: 0.5 }}>
                  {chapter.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
