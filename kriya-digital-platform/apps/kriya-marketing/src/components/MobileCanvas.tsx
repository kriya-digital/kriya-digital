import { useState, useRef, useEffect } from 'react';

type Page = {
  id: string;
  icon: string;
  text: string;
};

const pages: Page[] = [
  { id: 'home', icon: 'home', text: 'Home' },
  { id: 'solutions', icon: 'grid_view', text: 'Solutions' },
  { id: 'casestudies', icon: 'work', text: 'Case Studies' },
  { id: 'contact', icon: 'mail', text: 'Contact' }
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
            <a href="/" className="font-headline-lg text-2xl font-black tracking-tighter text-white block">
              <img src="/logos/kriya-logo-white.png" alt="Kriya" className="h-8 w-auto" />
            </a>
            <div className="bg-electric-sulfur text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">WEB ARCHITECTURE</div>
          </div>
          <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-8 min-h-[300px] flex flex-col justify-between mb-4">
            <h1 className="font-headline-lg text-4xl leading-tight">Everything web.<br/><span className="text-electric-sulfur">we do.</span></h1>
            <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">
              We architect and engineer high-performance web ecosystems. From high-converting marketing platforms to complex, scalable digital products, we bridge the gap between elite design and robust infrastructure.
            </p>
          </div>
        </section>

        {/* Page 2: Solutions */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Our Solutions</h2>
          <div className="space-y-4">
            <a href="/solutions/build" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-electric-sulfur text-2xl">architecture</span>
                <div>
                  <h3 className="font-headline-md text-lg text-white">Build</h3>
                  <p className="text-xs text-on-surface-variant">React • Next.js • Flutter • Figma</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Custom high-performance web development, mobile applications, and system UI/UX architectures.</p>
            </a>

            <a href="/solutions/scale" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-electric-sulfur text-2xl">trending_up</span>
                <div>
                  <h3 className="font-headline-md text-lg text-white">Scale</h3>
                  <p className="text-xs text-on-surface-variant">SEO • Google Ads • Meta • Brand</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Engineered organic growth setups, data-driven performance marketing campaigns, and design identities.</p>
            </a>

            <a href="/solutions/automate" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-electric-sulfur text-2xl">neurology</span>
                <div>
                  <h3 className="font-headline-md text-lg text-white">Automate</h3>
                  <p className="text-xs text-on-surface-variant">OpenAI API • WhatsApp Workflows</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Integrating artificial intelligence models and messaging setups directly into core business operations.</p>
            </a>
          </div>
        </section>

        {/* Page 3: Case Studies */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Case Studies</h2>
          <div className="space-y-4">
            <a href="/casestudies/zomato" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-6 bg-white rounded flex items-center justify-center p-1">
                  <img src="/src/assets/zomato-brand-logo.svg" className="h-full object-contain" alt="Zomato" />
                </div>
                <span className="text-xs text-electric-sulfur font-bold">-42% Latency</span>
              </div>
              <h3 className="font-headline-md text-lg text-white mb-1">Zomato</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Re-architecting order funnels and migrating cart state to edge servers to sustain 10x spikes.</p>
            </a>

            <a href="/casestudies/uber" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-6 bg-white rounded flex items-center justify-center p-1">
                  <img src="/src/assets/uber-brand-logo.svg" className="h-full object-contain" alt="Uber" />
                </div>
                <span className="text-xs text-electric-sulfur font-bold">-60% CPU</span>
              </div>
              <h3 className="font-headline-md text-lg text-white mb-1">Uber</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Optimizing map coordinates to render low-latency high-frequency vehicle tracking.</p>
            </a>

            <a href="/casestudies/notion" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-6 bg-white rounded flex items-center justify-center p-1">
                  <img src="/src/assets/notion-brand-logo.svg" className="h-full object-contain" alt="Notion" />
                </div>
                <span className="text-xs text-electric-sulfur font-bold">Offline-First</span>
              </div>
              <h3 className="font-headline-md text-lg text-white mb-1">Notion</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Collaborative real-time canvas architectures powered by offline-first state synchronization.</p>
            </a>

            <a href="/casestudies/netflix" className="block bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-6 bg-white rounded flex items-center justify-center p-1">
                  <img src="/src/assets/netflix-brand-logo.svg" className="h-full object-contain" alt="Netflix" />
                </div>
                <span className="text-xs text-electric-sulfur font-bold">Edge Buffering</span>
              </div>
              <h3 className="font-headline-md text-lg text-white mb-1">Netflix</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">High-performance video pre-fetching algorithms and edge CDN routing optimizations.</p>
            </a>
          </div>
        </section>

        {/* Page 4: Contact */}
        <section className="snap-start flex-none w-screen h-screen pt-12 px-4 pb-28 overflow-y-auto">
          <h2 className="font-headline-lg text-3xl text-white mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="bg-[#131313]/10 backdrop-blur-md border border-white/10 rounded-[24px] p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
              <h3 className="font-headline-lg text-2xl text-white mb-4">Get in Touch</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                Ready to engineer your next digital platform? Drop us a line and let's start building.
              </p>
              <a href="mailto:hello@kriya.digital" className="bg-electric-sulfur text-black px-6 py-3 rounded-xl font-headline-md text-sm font-bold active:scale-95 transition-transform">
                Email Us
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 h-20 px-4 pb-safe flex justify-between items-center bg-[#131313]/40 backdrop-blur-xl border-t border-white/10 pointer-events-none">
        <button 
          onClick={() => {
            triggerVibration();
            const prev = (currentIndex - 1 + pages.length) % pages.length;
            scrollToPage(prev);
          }}
          className="pointer-events-auto text-on-surface-variant transition-opacity duration-300 disabled:opacity-0"
          disabled={currentIndex === 0}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

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

        <button 
          onClick={() => {
            triggerVibration();
            nextPage();
          }}
          className="pointer-events-auto text-on-surface-variant transition-opacity duration-300 disabled:opacity-0"
          disabled={currentIndex === pages.length - 1}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </nav>

      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

