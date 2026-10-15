import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUp, Facebook, Menu, Music2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import logo from '../assets/images/sab_logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

function AboutPageSkeleton() {
  return (
    <>
      <section className="section-shell grid items-center gap-10 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
        <div className="max-w-3xl">
          <div className="skeleton-line h-3 w-40 rounded-full" />
          <div className="skeleton-line mt-6 h-10 max-w-xl rounded-xl sm:h-12" />
          <div className="skeleton-line mt-3 h-10 max-w-md rounded-xl sm:h-12" />
          <div className="mt-7 space-y-3">
            <div className="skeleton-line h-4 max-w-2xl rounded-full" />
            <div className="skeleton-line h-4 max-w-2xl rounded-full" />
            <div className="skeleton-line h-4 max-w-xl rounded-full" />
            <div className="skeleton-line h-4 max-w-md rounded-full" />
          </div>
        </div>
        <div className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="w-full">
              <div className="skeleton-line h-3 w-36 rounded-full" />
              <div className="skeleton-line mt-4 h-7 w-44 rounded-lg" />
            </div>
            <div className="skeleton-line h-12 w-12 shrink-0 rounded-full" />
          </div>
          <div className="mt-6 space-y-5">
            {statsSkeletonRows.map((row) => (
              <div key={row} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="skeleton-line h-3 w-24 rounded-full" />
                <div className="skeleton-line h-3 w-28 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-6 lg:grid-cols-2 lg:py-10">
        {[0, 1].map((card) => (
          <div key={card} className="glass rounded-[2rem] p-8">
            <div className="skeleton-line h-3 w-28 rounded-full" />
            <div className="mt-6 space-y-3">
              <div className="skeleton-line h-4 w-full rounded-full" />
              <div className="skeleton-line h-4 w-full rounded-full" />
              <div className="skeleton-line h-4 w-5/6 rounded-full" />
              <div className="skeleton-line h-4 w-2/3 rounded-full" />
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="skeleton-line h-3 w-32 rounded-full" />
        <div className="skeleton-line mt-5 h-8 max-w-2xl rounded-xl" />
        <div className="skeleton-line mt-3 h-4 max-w-3xl rounded-full" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[0, 1, 2].map((card) => (
            <div key={card} className="glass rounded-[1.75rem] p-7">
              <div className="skeleton-line h-12 w-12 rounded-2xl" />
              <div className="skeleton-line mt-6 h-5 w-3/4 rounded-lg" />
              <div className="mt-4 space-y-3">
                <div className="skeleton-line h-3 w-full rounded-full" />
                <div className="skeleton-line h-3 w-full rounded-full" />
                <div className="skeleton-line h-3 w-2/3 rounded-full" />
              </div>
              <div className="skeleton-line mt-6 h-3 w-24 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 lg:py-12">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <div className="skeleton-line h-3 w-24 rounded-full" />
          <div className="mt-6 space-y-3">
            <div className="skeleton-line h-4 max-w-4xl rounded-full" />
            <div className="skeleton-line h-4 max-w-4xl rounded-full" />
            <div className="skeleton-line h-4 max-w-3xl rounded-full" />
          </div>
        </div>
      </section>

      {[0, 1].map((section) => (
        <section key={section} className="section-shell py-16">
          <div className="skeleton-line h-3 w-32 rounded-full" />
          <div className="skeleton-line mt-5 h-8 max-w-xl rounded-xl" />
          <div className="skeleton-line mt-3 h-4 max-w-3xl rounded-full" />
          <div className={`mt-10 grid gap-6 ${section === 0 ? 'md:grid-cols-2 xl:grid-cols-5' : 'md:grid-cols-3'}`}>
            {Array.from({ length: section === 0 ? 5 : 3 }, (_, index) => (
              <div key={index} className="glass rounded-[1.75rem] p-8">
                <div className="skeleton-line mx-auto h-8 w-8 rounded-full" />
                <div className="skeleton-line mx-auto mt-5 h-4 w-3/4 rounded-full" />
                {section === 1 && (
                  <>
                    <div className="skeleton-line mt-7 h-6 w-2/3 rounded-lg" />
                    <div className="mt-4 space-y-3">
                      <div className="skeleton-line h-3 w-full rounded-full" />
                      <div className="skeleton-line h-3 w-5/6 rounded-full" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

const statsSkeletonRows = ['established', 'leadership', 'focus'];

function ServicesPageSkeleton() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="skeleton-line h-3 w-24 rounded-full" />
      <div className="skeleton-line mt-5 h-9 max-w-2xl rounded-xl" />
      <div className="skeleton-line mt-3 h-4 max-w-3xl rounded-full" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="glass rounded-[1.75rem] p-8">
            <div className="skeleton-line h-12 w-12 rounded-2xl" />
            <div className="skeleton-line mt-6 h-5 w-3/4 rounded-lg" />
            <div className="mt-4 space-y-3">
              <div className="skeleton-line h-3 w-full rounded-full" />
              <div className="skeleton-line h-3 w-full rounded-full" />
              <div className="skeleton-line h-3 w-2/3 rounded-full" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="skeleton-line h-3 w-5/6 rounded-full" />
              <div className="skeleton-line h-3 w-4/6 rounded-full" />
            </div>
            <div className="skeleton-line mt-8 h-3 w-28 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsPageSkeleton() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="skeleton-line h-3 w-24 rounded-full" />
      <div className="skeleton-line mt-5 h-9 max-w-3xl rounded-xl" />
      <div className="mt-10 border-y border-white/10 py-5">
        <div className="flex justify-between">
          <div className="skeleton-line h-3 w-32 rounded-full" />
          <div className="skeleton-line h-3 w-24 rounded-full" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="skeleton-line h-8 w-28 rounded-full" />
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <article key={index} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="skeleton-line h-72 w-full" />
            <div className="p-8">
              <div className="skeleton-line h-3 w-40 rounded-full" />
              <div className="skeleton-line mt-5 h-6 w-3/4 rounded-lg" />
              <div className="mt-4 space-y-3">
                <div className="skeleton-line h-3 w-full rounded-full" />
                <div className="skeleton-line h-3 w-5/6 rounded-full" />
              </div>
              <div className="mt-7 flex justify-between">
                <div className="skeleton-line h-3 w-24 rounded-full" />
                <div className="skeleton-line h-3 w-28 rounded-full" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TeamPageSkeleton() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="skeleton-line h-3 w-36 rounded-full" />
      <div className="skeleton-line mt-5 h-9 max-w-3xl rounded-xl" />
      <div className="skeleton-line mt-3 h-4 max-w-2xl rounded-full" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[0, 1].map((member) => (
          <article key={member} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="skeleton-line h-3 w-32 rounded-full" />
            <div className="skeleton-line mt-5 h-7 w-2/3 rounded-lg" />
            <div className="mt-4 space-y-3">
              <div className="skeleton-line h-3 w-full rounded-full" />
              <div className="skeleton-line h-3 w-full rounded-full" />
              <div className="skeleton-line h-3 w-4/5 rounded-full" />
              <div className="skeleton-line h-3 w-2/3 rounded-full" />
            </div>
            <div className="mt-7 flex gap-3">
              <div className="skeleton-line h-9 w-9 rounded-full" />
              <div className="skeleton-line h-9 w-9 rounded-full" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPageSkeleton() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="skeleton-line h-3 w-24 rounded-full" />
          <div className="skeleton-line mt-5 h-9 max-w-lg rounded-xl" />
          <div className="skeleton-line mt-4 h-4 max-w-lg rounded-full" />
          <div className="mt-8 space-y-4">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="glass flex gap-4 rounded-[1.75rem] p-6">
                <div className="skeleton-line h-8 w-8 shrink-0 rounded-xl" />
                <div className="w-full space-y-3">
                  <div className="skeleton-line h-4 w-32 rounded-full" />
                  <div className="skeleton-line h-3 w-full rounded-full" />
                  <div className="skeleton-line h-3 w-4/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-[2rem] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[0, 1].map((field) => (
              <div key={field}>
                <div className="skeleton-line h-3 w-16 rounded-full" />
                <div className="skeleton-line mt-3 h-12 w-full rounded-2xl" />
              </div>
            ))}
          </div>
          {[0, 1].map((field) => (
            <div key={field} className="mt-6">
              <div className="skeleton-line h-3 w-24 rounded-full" />
              <div className={`skeleton-line mt-3 w-full rounded-2xl ${field === 0 ? 'h-12' : 'h-36'}`} />
            </div>
          ))}
          <div className="skeleton-line mt-8 h-12 w-40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function PageTransitionSkeleton({ pathname }: { pathname: string }) {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const skeleton = skeletonRef.current;
    if (!skeleton) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    timeline
      .to(skeleton.querySelectorAll<HTMLElement>('.skeleton-line'), {
        backgroundColor: 'rgba(0,255,102,0.15)',
        backgroundImage: 'none',
        stagger: 0.01,
        duration: 0.12,
      })
      .to(skeleton, { autoAlpha: 0, duration: 0.18 }, '+=0.02');

    return () => {
      timeline.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={skeletonRef} className="page-transition-skeleton" aria-hidden="true">
      {pathname === '/about' ? <AboutPageSkeleton /> :
        pathname === '/services' ? <ServicesPageSkeleton /> :
        pathname === '/projects' ? <ProjectsPageSkeleton /> :
        pathname === '/team' ? <TeamPageSkeleton /> :
        pathname === '/contact' ? <ContactPageSkeleton /> : (
        <div className="section-shell py-24 lg:py-32">
          <div className="skeleton-line h-3 w-24 rounded-full" />
          <div className="skeleton-line mt-6 h-12 max-w-2xl rounded-xl" />
          <div className="skeleton-line mt-4 h-5 max-w-xl rounded-full" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="skeleton-line h-48 rounded-[1.75rem]" />
            <div className="skeleton-line h-48 rounded-[1.75rem]" />
            <div className="skeleton-line h-48 rounded-[1.75rem]" />
          </div>
        </div>
      )}
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLSpanElement>(null);
  const progress = useScrollProgress();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const moveBlob = (target: HTMLAnchorElement) => {
    if (!navRef.current || !blobRef.current) return;

    const navBounds = navRef.current.getBoundingClientRect();
    const targetBounds = target.getBoundingClientRect();
    gsap.to(blobRef.current, {
      left: targetBounds.left - navBounds.left - 8,
      width: targetBounds.width + 16,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const hideBlob = () => {
    if (blobRef.current) gsap.to(blobRef.current, { opacity: 0, duration: 0.2 });
  };

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const pageContent = document.querySelector('main');
    if (!pageContent) return;

    const elements = Array.from(
      pageContent.querySelectorAll<HTMLElement>('section, [data-scroll-reveal]'),
    ).filter((element) => !element.closest('.page-transition-skeleton'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((element) => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-charcoal text-stone-100">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} />
      </div>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="section-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.35em] text-white">
            <img src={logo} alt="SAB Builders logo" className="h-16 w-16 object-contain md:h-20 md:w-20" />
            <span>SAB BUILDERS</span>
          </Link>
          <nav
            ref={navRef}
            onMouseLeave={hideBlob}
            className="relative hidden items-center gap-6 md:flex"
          >
            <span
              ref={blobRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-1/2 z-0 h-9 -translate-y-1/2 rounded-full bg-gold/15 opacity-0"
            />
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={scrollToTop}
                onMouseEnter={(event) => moveBlob(event.currentTarget)}
                onFocus={(event) => moveBlob(event.currentTarget)}
                className={({ isActive }) =>
                  `relative z-10 rounded-full px-2 py-2 text-sm uppercase tracking-[0.25em] transition ${isActive ? 'text-gold' : 'text-stone-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 p-6 md:hidden">
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-6 text-lg">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                setOpen(false);
                scrollToTop();
              }}
              className="uppercase tracking-[0.3em] text-stone-200"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </motion.div>}</AnimatePresence>

      <main className="relative">
        <PageTransitionSkeleton key={location.key} pathname={location.pathname} />
        {children}
      </main>

      <footer className="border-t border-white/10 bg-[#302d2e]">
        <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.75fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <img src={logo} alt="SAB Builders logo" className="h-24 w-24 shrink-0 object-contain" />
              <p className="max-w-[13rem] text-lg font-semibold uppercase leading-tight tracking-[0.12em] text-white">SAB Builders And Trading INC.</p>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-300">Reliable construction, fit-out, and design delivery for homes, businesses, and ambitious spaces.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Visit or contact us</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-stone-200">
              Lot 11 Blk 3 Unit 2, Pineda Compound,<br />
              Camia Rd. Nepo Subd. Cutcut,<br />
              Angeles City, Philippines
            </address>
            <div className="mt-4 flex flex-col items-start gap-1 text-sm">
              <a href="mailto:sab_builders2021@yahoo.com" className="text-stone-200 transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/60">sab_builders2021@yahoo.com</a>
              <a href="tel:09178002483" className="text-stone-200 transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/60">0917 800 2483</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Follow us</h3>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61560278080105" target="_blank" rel="noreferrer" aria-label="Visit SAB Builders on Facebook" title="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-gold/60">
                <Facebook size={20} strokeWidth={2.5} />
              </a>
              <a href="https://www.tiktok.com/@sabbuildersandtradinginc" target="_blank" rel="noreferrer" aria-label="Visit SAB Builders on TikTok" title="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-gold/60">
                <Music2 size={21} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} SAB Builders and Trading Inc. All Rights Reserved.
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full border border-gold/30 bg-gold/15 p-3 text-gold shadow-lg shadow-gold/20"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
