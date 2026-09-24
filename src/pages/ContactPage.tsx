import { motion } from 'framer-motion';
import { Clock3, MapPin, Mail, Phone, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('service') || 'Retail & Commercial Spaces';

  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Start a conversation with the team.</h1>
            <p className="mt-6 text-lg leading-8 text-stone-400">We welcome conversations around private residences, commercial developments, and bespoke transformation projects.</p>
            <div className="mt-8 space-y-4">
              <div className="glass rounded-[1.75rem] p-6"><div className="flex items-start gap-3"><MapPin className="mt-1 text-gold" size={18} /><div><p className="font-semibold text-white">Global Headquarters</p><p className="mt-1 text-sm leading-7 text-stone-400">
Lot 11 Blk 3 Unit 2, Pineda Compound, Camia Rd. Nepo Subd. Cutcut, Angeles City, Philippines</p></div></div></div>
              <div className="glass rounded-[1.75rem] p-6"><div className="flex items-start gap-3"><Phone className="mt-1 text-gold" size={18} /><div><p className="font-semibold text-white">Call us</p><p className="mt-1 text-sm leading-7 text-stone-400">0917 800 2483</p></div></div></div>
              <div className="glass rounded-[1.75rem] p-6"><div className="flex items-start gap-3"><Mail className="mt-1 text-gold" size={18} /><div><p className="font-semibold text-white">Email</p><p className="mt-1 text-sm leading-7 text-stone-400">sab_builders2021@yahoo.com</p></div></div></div>
              <div className="glass rounded-[1.75rem] p-6"><div className="flex items-start gap-3"><Clock3 className="mt-1 text-gold" size={18} /><div><p className="font-semibold text-white">Business Hours</p><p className="mt-1 text-sm leading-7 text-stone-400">Mon – Fri : 8am – 5pm</p></div></div></div>
            </div>
          </div>
          <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-[2rem] p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm text-stone-300">Name<input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none" /></label>
              <label className="text-sm text-stone-300">Email<input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none" /></label>
            </div>
            <label className="mt-6 block text-sm text-stone-300">Project Type<select defaultValue={selectedService} className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"><option className="bg-neutral-950 text-white">Retail &amp; Commercial Spaces</option><option className="bg-neutral-950 text-white">Residential Projects</option><option className="bg-neutral-950 text-white">Offices &amp; Warehouses</option><option className="bg-neutral-950 text-white">Restaurants</option><option className="bg-neutral-950 text-white">Sprinkler Installation</option><option className="bg-neutral-950 text-white">Modular Cabinetry</option></select></label>
            <label className="mt-6 block text-sm text-stone-300">Message<textarea className="mt-2 min-h-36 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none" /></label>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-black">Send message <Send size={16} /></button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
