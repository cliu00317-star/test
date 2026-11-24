import { useRef, useEffect, useState } from 'react';
import { chapters } from '@/content/config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE_LAYOUTS = [
  { size: 216, rotate: -4, mt: 0, scrub: 0.4 },
  { size: 250, rotate: 3, mt: 41, scrub: 0.55 },
  { size: 216, rotate: -2, mt: 14, scrub: 0.7 },
  { size: 181, rotate: 5, mt: 55, scrub: 0.85 },
];
const BOTTOM_H = 104;

export default function Companions() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(() => chapters.map(() => false));
  const [hovered, setHovered] = useState<number | null>(null);
  const toggleFlip = (i: number) => setFlipped(prev => prev.map((v, idx) => (idx === i ? !v : v)));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current.filter(Boolean), { opacity: 0, y: 80, scale: 0.9 }, {
        opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
      });
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const layout = BASE_LAYOUTS[i] ?? BASE_LAYOUTS[BASE_LAYOUTS.length - 1];
        gsap.to(el, { y: -(20 + i * 10), ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: layout.scrub } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 px-[5vw] py-24 lg:py-32 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-display text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '0.1em' }}>认识 Vidin 的四个面向</h2>
      </div>
      <div className="vidin-card-row flex flex-nowrap justify-center items-start gap-3">
        {chapters.map((chapter, i) => {
          const char = chapter.character;
          const layout = BASE_LAYOUTS[i] ?? BASE_LAYOUTS[BASE_LAYOUTS.length - 1];
          const cardW = layout.size + 24;
          const cardH = 12 + layout.size * 1.15 + BOTTOM_H;
          return (
            <div key={chapter.id} ref={el => { cardsRef.current[i] = el; }} className="vidin-card opacity-0 flex-shrink-0" style={{ marginTop: `${layout.mt}px` }}>
              <div
                style={{ width: `${cardW}px`, height: `${cardH}px`, perspective: '900px', transform: hovered === i && !flipped[i] ? 'scale(1.06) rotate(0deg)' : `rotate(${layout.rotate}deg)`, transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: flipped[i] ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div onClick={() => toggleFlip(i)} style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', background: '#fff', borderRadius: '4px', boxShadow: hovered === i ? '0 16px 48px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.28)', cursor: 'pointer', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className="relative flex items-center justify-center flex-shrink-0" style={{ margin: '12px 12px 0', height: `${layout.size * 1.15}px`, background: char.visualGradient, overflow: 'hidden' }}>
                      <span className="relative select-none" style={{ fontSize: `${layout.size * 0.28}px`, zIndex: 0 }}>{char.emoji}</span>
                      <img src={char.image} alt={char.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" style={{ zIndex: 1 }} />
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200" style={{ background: 'rgba(0,0,0,0.16)', opacity: 0, zIndex: 2 }} onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }} onMouseLeave={e => { e.currentTarget.style.opacity = '0'; }}>
                        <span className="font-mono text-white" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>点击了解 Vidin</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-3 text-center" style={{ height: `${BOTTOM_H}px`, paddingBottom: '8px' }}>
                      <p className="font-display" style={{ fontSize: '0.92rem', color: '#222', letterSpacing: '0.05em', fontWeight: 400 }}>{char.name}</p>
                      <p className="font-mono mt-2" style={{ fontSize: '0.58rem', color: chapter.color, letterSpacing: '0.08em' }}>{char.role}</p>
                    </div>
                  </div>
                  <div onClick={() => toggleFlip(i)} style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: '#fff', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.28)', cursor: 'pointer', display: 'flex', flexDirection: 'column', padding: '16px', overflow: 'hidden' }}>
                    <div style={{ height: '3px', borderRadius: '2px', flexShrink: 0, background: `linear-gradient(90deg, ${chapter.color}, ${chapter.color}44)`, marginBottom: '12px' }} />
                    <p className="font-display flex-shrink-0" style={{ fontSize: '0.88rem', color: '#222', letterSpacing: '0.05em', marginBottom: '10px' }}>{char.name}</p>
                    <p className="font-body" style={{ flex: 1, fontSize: '0.74rem', lineHeight: 1.9, color: '#555', letterSpacing: '0.03em', overflowY: 'auto' }}>{char.intro}</p>
                    <p className="font-mono text-center flex-shrink-0 mt-2" style={{ fontSize: '10px', color: '#bbb', letterSpacing: '0.08em' }}>← 点击返回</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
