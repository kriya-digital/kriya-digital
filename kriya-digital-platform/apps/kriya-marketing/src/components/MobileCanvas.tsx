import { useState, useRef, useEffect } from 'react';

type Page = {
  id: string;
  icon: string;
  text: string;
};

const pages: Page[] = [
  { id: 'home', icon: 'home', text: 'Home' },
  { id: 'solutions', icon: 'grid_view', text: 'Solutions' },
  { id: 'work', icon: 'work', text: 'Work' },
  { id: 'insights', icon: 'insights', text: 'Insights' },
  { id: 'corporate', icon: 'business', text: 'Corporate' }
];

export default function MobileCanvas() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  const scrollToPage = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextPage = () => {
    const next = (currentIndex + 1) % pages.length;
    scrollToPage(next);
  };

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        if (container) {
          const index = Math.round(container.scrollLeft / window.innerWidth);
          setCurrentIndex(index);
        }
      }, 66);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const triggerVibration = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="md:hidden">
      <main 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-screen scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Page 1: Home */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 relative pb-28">
          <div className="flex justify-between items-center mb-8">
            <div className="font-headline-lg text-2xl font-black tracking-tighter text-white">Kriya</div>
            <div className="bg-electric-sulfur text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Live</div>
          </div>
          <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-8 min-h-[300px] flex flex-col justify-between mb-4">
            <h1 className="font-headline-lg text-4xl leading-tight">Everything web.<br/>we do.</h1>
            <p className="text-on-surface-variant text-sm mt-4">Crafting high-performance digital ecosystems.</p>
          </div>
        </section>

        {/* Page 2: Solutions */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Solutions</h2>
          <div className="space-y-4">
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Build</h3>
              <p className="text-on-surface-variant text-sm">Kriya Web | Kriya App | Kriya UI/UX</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Scale</h3>
              <p className="text-on-surface-variant text-sm">Kriya Growth | Kriya SEO | Kriya Social | Kriya Brand</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Automate</h3>
              <p className="text-on-surface-variant text-sm">Kriya AI</p>
            </div>
          </div>
        </section>



        {/* Page 4: Work */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Work</h2>
          <div className="space-y-4">
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Case Studies</h3>
              <p className="text-on-surface-variant text-sm">Interactive client success stories.</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Live Demos</h3>
              <p className="text-on-surface-variant text-sm">Sandboxed environments for Kriya SaaS tools.</p>
            </div>
          </div>
        </section>

        {/* Page 5: Insights */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Insights</h2>
          <div className="space-y-4">
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Engineering Blog</h3>
              <p className="text-on-surface-variant text-sm">Technical breakdowns and Kriya workflows.</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Whitepapers</h3>
              <p className="text-on-surface-variant text-sm">Deep-dive research on AI, growth, and development.</p>
            </div>
          </div>
        </section>

        {/* Page 6: Corporate */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Corporate</h2>
          <div className="space-y-4">
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Contact Portal</h3>
              <p className="text-on-surface-variant text-sm">Get in touch with Kriya.</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Privacy Notice</h3>
              <p className="text-on-surface-variant text-sm">Dynamic Privacy Notice mapping PII usage.</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Vendor DPAs</h3>
              <p className="text-on-surface-variant text-sm">Data Processing Agreements.</p>
            </div>
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[16px] p-6">
              <h3 className="font-headline-md text-xl mb-2 text-electric-sulfur">Grievance Redressal</h3>
              <p className="text-on-surface-variant text-sm">Dedicated mechanism for data subjects.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 h-20 px-4 pb-safe flex justify-between items-center bg-[#131313]/40 backdrop-blur-xl border-t border-white/10 pointer-events-none">
        <span 
          className="material-symbols-outlined text-on-surface-variant transition-opacity duration-300"
          style={{ opacity: currentIndex > 0 ? 0.5 : 0 }}
        >
          chevron_left
        </span>

        <button 
          onClick={() => {
            triggerVibration();
            nextPage();
          }}
          className="pointer-events-auto flex items-center justify-center gap-2 bg-electric-sulfur text-black rounded-full px-6 py-3 active:scale-95 transition-all duration-300 shadow-lg mx-auto"
        >
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {pages[currentIndex]?.icon}
          </span>
          <span className="font-label-sm text-sm tracking-wider font-bold uppercase">
            {pages[currentIndex]?.text}
          </span>
        </button>

        <span 
          className={`material-symbols-outlined text-on-surface-variant transition-opacity duration-300 ${currentIndex === 0 ? 'animate-pulse' : ''}`}
          style={{ opacity: currentIndex < pages.length - 1 ? 0.5 : 0 }}
        >
          chevron_right
        </span>
      </nav>

      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
