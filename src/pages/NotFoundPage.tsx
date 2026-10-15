import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div data-scroll-reveal className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found.</h1>
        <p className="mt-4 text-base leading-8 text-stone-400">The page you are looking for cannot be found, but the studio is ready to welcome you elsewhere.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3.5 font-semibold text-black">Return home</Link>
      </div>
    </div>
  );
}
