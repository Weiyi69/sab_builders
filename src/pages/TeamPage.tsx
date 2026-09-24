import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { teamMembers } from '../data/content';

export default function TeamPage() {
  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <SectionTitle eyebrow="Leadership Team" title="A close-knit group of builders, designers, and operators." description="The studio is led by experienced professionals committed to excellence from concept through completion." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {teamMembers.slice(0, 2).map((member, index) => (
            <motion.article key={member.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="rounded-[2rem] border border-white/10 bg-white/5">
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">{member.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">{member.bio}</p>
                <div className="mt-6 flex gap-3">
                  {member.socials.map((social) => (
                    <a key={social.label} href={social.url} className="rounded-full border border-white/10 p-2 text-stone-300 transition hover:text-white">
                      {social.label === 'LinkedIn' ? <Linkedin size={16} /> : <Mail size={16} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
