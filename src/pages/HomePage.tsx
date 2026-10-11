import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Building2, Compass, Factory, Flame, Gauge, Home, PanelsTopLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { projects, services } from '../data/content';
import heroVideo from '../assets/images/video.mp4';

const serviceIcons: Record<string, ReactNode> = {
  Building2: <Building2 size={20} />,
  Home: <Home size={20} />,
  Factory: <Factory size={20} />,
  Sparkles: <Sparkles size={20} />,
  Compass: <Compass size={20} />,
  Flame: <Flame size={20} />,
  PanelsTopLeft: <PanelsTopLeft size={20} />,
};

const stats = [
  { value: '4', label: 'Years delivering excellence' },
  { value: '140+', label: 'Projects completed' },
  { value: '96%', label: 'Client retention' },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-screen overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-30">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.25),_transparent_30%),linear-gradient(135deg,_rgba(0,0,0,0.9),_rgba(0,0,0,0.65))]" />
        <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-24 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              From bare ground to fully finished spaces, we build it all!
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              SAB Builders and Trading Inc. delivers expert fit-out renovations and ground-up construction tailored for your business and home needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="rounded-full bg-gold px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]">Explore Projects</Link>
              <Link to="/contact" className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/20">Book a Consultation</Link>
            </div>
          </motion.div>
          <div className="mt-16 flex flex-wrap gap-4 lg:mt-24">
            {stats.map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl px-5 py-4 min-w-[180px]">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-stone-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold">
          <ChevronDown className="animate-bounce" size={24} />
        </div>
      </section>

      <section className="section-shell py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="Company Overview" title="A refined construction partner for ambitious clients." description="We combine architectural intelligence, engineering precision, and elite project governance to create enduring spaces that feel effortless and exceptional." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-3xl p-6">
                <ShieldCheck className="text-gold" />
                <h3 className="mt-4 text-xl font-semibold text-white">Trusted delivery</h3>
                <p className="mt-2 text-sm leading-7 text-stone-400">Meticulous planning and transparent communication at each milestone.</p>
              </div>
              <div className="glass rounded-3xl p-6">
                <Building2 className="text-gold" />
                <h3 className="mt-4 text-xl font-semibold text-white">Built to last</h3>
                <p className="mt-2 text-sm leading-7 text-stone-400">Robust materials, elegant detailing, and future-ready systems.</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <div className="flex items-center gap-3 text-gold">
              <Sparkles size={18} />
              <span className="text-sm uppercase tracking-[0.3em]">Crafted Experience</span>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-sm text-stone-400"><span>Design clarity</span><span>94%</span></div>
                <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[94%] rounded-full bg-gold" /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm text-stone-400"><span>Execution precision</span><span>98%</span></div>
                <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[98%] rounded-full bg-gold" /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm text-stone-400"><span>Client satisfaction</span><span>99%</span></div>
                <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-[99%] rounded-full bg-gold" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle eyebrow="Featured Projects" title="Selected work with enduring presence." description="A collection of landmark projects shaped by collaboration, craft, and a clear architectural vision." />
          <Link to="/projects" className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-gold md:block">View all</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">{project.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-stone-500">{project.location}</span>
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white">View details <ArrowRight size={16} /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-24">
        <SectionTitle eyebrow="Construction Services" title="An integrated suite of services for complex delivery." description="Every engagement is shaped by our multidisciplinary team and guided by a single point of accountability." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass rounded-[1.75rem] p-8 transition hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                {serviceIcons[service.icon] ?? <Building2 size={20} />}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-stone-300">
                {service.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><Gauge size={14} className="text-gold" /> {benefit}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Why choose us</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">A calm, sophisticated approach to high-stakes delivery.</h3>
            <p className="mt-4 text-sm leading-8 text-stone-400">Our team combines design sensibility with rigorous execution to create projects that feel effortless and elevated.</p>
            <div className="mt-8 space-y-4">
              {['Strategic advisory from day one', 'Elite subcontractor coordination', 'Transparent reporting and premium communication'].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-stone-300"><ShieldCheck className="text-gold" size={16} /> {item}</div>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-gold/10 via-white/5 to-transparent p-8">
            <SectionTitle eyebrow="Process Timeline" title="A clear path from first brief to final handover." description="Each phase is planned, coordinated, and reviewed carefully so your project moves forward with confidence." />
            <div className="mt-8 space-y-6">
              {[
                ['Vision & feasibility', 'We review your goals, site conditions, budget, and priorities to establish a practical project direction.'],
                ['Design coordination', 'We develop the design, materials, and technical details while coordinating the decisions needed for construction.'],
                ['Construction delivery', 'Our team manages site execution, trades, quality checks, and progress updates from the first build phase through completion.'],
                ['Turnover & aftercare', 'We complete final inspections, address outstanding details, and guide you through a clear handover of the finished space.'],
              ].map(([step, description], index) => <div key={step} className="flex gap-4"><div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">0{index + 1}</div><div><h4 className="font-semibold text-white">{step}</h4><p className="mt-1 text-sm leading-7 text-stone-400">{description}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="rounded-[2rem] border border-gold/20 bg-gradient-to-r from-gold/10 via-black to-gold/5 p-8 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let’s create something exceptional together.</h2>
              <p className="mt-4 text-base leading-8 text-stone-400">Whether you’re imagining a private residence or a visionary commercial landmark, we’re ready to help shape it.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-black">Start a conversation <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
