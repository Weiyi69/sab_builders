import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  { title: 'Senior Project Manager', location: 'Dubai', type: 'Full-time' },
  { title: 'Architectural Designer', location: 'London', type: 'Full-time' },
  { title: 'Site Supervisor', location: 'Copenhagen', type: 'Contract' },
];

export default function CareersPage() {
  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Careers</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Join a team building exceptional places with precision and care.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-400">We are always looking for talented professionals who value quality, collaboration, and design excellence.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {roles.map((role, index) => (
            <motion.div key={role.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="glass rounded-[1.75rem] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">{role.type}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{role.title}</h3>
              <p className="mt-3 text-sm text-stone-400">Based in {role.location}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">Apply now <ArrowRight size={16} /></Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
