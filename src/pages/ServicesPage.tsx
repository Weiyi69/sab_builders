import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Factory, HardHat, Home, Landmark, PanelsTopLeft, RefreshCcw, ClipboardList, MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { services } from '../data/content';

const icons: Record<string, React.ReactNode> = {
  Building2: <Building2 size={20} />,
  Home: <Home size={20} />,
  Factory: <Factory size={20} />,
  RefreshCcw: <RefreshCcw size={20} />,
  PanelsTopLeft: <PanelsTopLeft size={20} />,
  ClipboardList: <ClipboardList size={20} />,
  Landmark: <Landmark size={20} />,
  HardHat: <HardHat size={20} />,
  Compass: <Compass size={20} />,
  MessageCircleMore: <MessageCircleMore size={20} />,
};

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <SectionTitle eyebrow="Services" title="A complete construction and design delivery platform." description="Our team works across commercial, residential, and industrial sectors with a clear focus on beauty, performance, and peace of mind." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="glass rounded-[1.75rem] p-8 transition hover:-translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">{icons[service.icon]}</div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-stone-300">
                {service.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><span className="text-gold">•</span> {benefit}</li>)}
              </ul>
              <Link to={`/contact?service=${encodeURIComponent(service.title.replace(' and ', ' & '))}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-gold">Learn more <ArrowRight size={16} /></Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
