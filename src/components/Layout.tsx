import { Link, NavLink } from 'react-router-dom';
import { ArrowUp, Facebook, Menu, Music2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
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

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.25em] transition ${isActive ? 'text-gold' : 'text-stone-300 hover:text-white'}`
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
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="uppercase tracking-[0.3em] text-stone-200">
              {link.label}
            </NavLink>
          ))}
        </div>
      </motion.div>}</AnimatePresence>

      <main>{children}</main>

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
