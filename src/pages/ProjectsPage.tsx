import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/content';

const categories = [
  'All',
  'Retail & Commercial Spaces',
  'Residential Projects',
  'Offices & Warehouses',
  'Restaurants',
  'Sprinkler Installation',
  'Modular Cabinetry',
];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filteredProjects = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Projects</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected work across architecture, infrastructure, and luxury living.</h1>
        </div>
        <div className="mt-10 border-y border-white/10 py-5" role="group" aria-label="Filter projects by service">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-400">Browse by service</p>
            <p className="text-sm text-stone-500" aria-live="polite">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}{active !== 'All' ? ` in ${active}` : ''}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-black ${active === category ? 'bg-gold text-black' : 'border border-white/10 bg-white/5 text-stone-300 hover:border-gold/50 hover:text-white'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.06]">
              <Link to={`/projects/${project.id}`} className="block overflow-hidden">
                <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              </Link>
              <div className="p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">{project.category}</p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">{project.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-stone-500">{project.location}</span>
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold">View details <ArrowRight size={16} /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-[1.75rem] border border-dashed border-white/15 bg-white/[0.03] px-6 py-12 text-center">
            <p className="text-lg font-semibold text-white">No projects listed for this service yet.</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-stone-400">Tell us what you are planning and our team can help shape the right solution.</p>
            <Link to={`/contact?service=${encodeURIComponent(active)}`} className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black">Discuss this service</Link>
          </div>
        )}
      </section>
    </div>
  );
}
