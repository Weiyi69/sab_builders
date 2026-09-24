import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const values = ['Quality', 'Durability', 'Reliability', 'Integrity', 'Customer Satisfaction'];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">About SAB Builders</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A studio shaped by architecture, discipline, and trust.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">SAB Builders focuses on a build-and-sell model, specializing in houses and small to medium construction projects. While targeting prospective clients in the retail sector, an area which they have significant expertise.</p>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{title:'Mission', text:'To provide quality construction services through skilled workmanship, reliable materials, and professional service. We are committed to building projects that meet our clients’ needs, stand the test of time, and deliver lasting value.'}, {title:'Vision', text:'To be a trusted construction company known for quality service, durable workmanship, and projects made to last, creating spaces that people can rely on for years to come.'}, {title:'Values', text:'Quality, durability, reliability, integrity, and customer satisfaction.'}].map((item) => (
            <div key={item.title} className="glass rounded-[1.75rem] p-8">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
            </div>
          ))}
        </div>                                                                                                                                                                                                                                                                                       
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow="Core Values" title="The principles behind every project." description="Our standards shape how we build, how we lead, and how we partner with clients." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <motion.div key={value} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="glass rounded-[1.75rem] p-8 text-center">
              <BadgeCheck className="mx-auto text-gold" size={24} />
              <h3 className="mt-4 text-xl font-semibold text-white">{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
