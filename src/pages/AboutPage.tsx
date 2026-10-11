import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Building2, Handshake, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';

const values = ['Quality', 'Durability', 'Reliability', 'Integrity', 'Customer Satisfaction'];

const strengths = [
  {
    icon: Building2,
    title: 'Build-and-sell expertise',
    text: 'We specialize in residential and small-to-medium construction projects designed for long-term value and market-ready quality.',
  },
  {
    icon: Target,
    title: 'Retail sector focus',
    text: 'Our deep understanding of retail expectations allows us to deliver practical, efficient, and high-performing solutions.',
  },
  {
    icon: Handshake,
    title: 'Partnership-driven execution',
    text: 'We build strong client relationships by aligning project goals, communication, and delivery from start to finish.',
  },
];

const stats = [
  { label: 'Established', value: '2022' },
  { label: 'Leadership', value: '2 Co-founders' },
  { label: 'Focus', value: 'Residential & SME projects' },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">About SAB Builders</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built on trust. Driven by craftsmanship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              SAB Builders and Trading Inc. is a construction company founded in 2022 by Mr. Feliciano V. Pineda II,
              President and Owner, alongside his Co-owner, Mr. Nazar Sebastian. The company was shaped by a vision to
              provide dependable, quality-focused construction solutions during a period of industry challenge and growth.
            </p>
          </div>

          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Company snapshot</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">SAB Builders</h2>
              </div>
              <div className="rounded-full border border-gold/30 bg-gold/10 p-3 text-gold">
                <Building2 size={22} />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-sm text-stone-400">{stat.label}</span>
                  <span className="text-sm font-medium text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-6 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Our story</p>
            <p className="mt-5 text-base leading-8 text-stone-300">
              In 2021, the founders began considering registering the company as a contractor in response to the
              challenges posed by the pandemic and the highly competitive construction sector. With a clear focus on
              quality, resilience, and practical execution, SAB Builders set out to build a company rooted in trust and
              long-term value.
            </p>
          </div>

          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">What we do</p>
            <p className="mt-5 text-base leading-8 text-stone-300">
              SAB Builders focuses on a build-and-sell model, specializing in houses and small to medium construction
              projects. We primarily serve prospective retail clients, an area where our team has significant expertise,
              while delivering dependable construction and project management solutions tailored to client needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <SectionTitle
          eyebrow="Our strengths"
          title="Professional construction services built for lasting results."
          description="From residential development to commercial coordination, we deliver practical expertise and dependable execution across every project phase."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={`/services?service=${encodeURIComponent(item.title)}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="glass h-full rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Learn more <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-8 lg:py-12">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Today</p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-300">
            Today, SAB Builders Inc. serves as the primary contractor for small to medium-sized projects and offers
            project management services to coordinate specialized trades for industrial and commercial projects. We also
            provide design input and engineering solutions, with a commitment to exceptional project performance and the
            long-term success of our clients.
          </p>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionTitle
          eyebrow="Core values"
          title="The principles behind every project."
          description="Our standards guide how we build, how we lead, and how we create enduring value for every client and partner."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="glass rounded-[1.75rem] p-8 text-center"
            >
              <BadgeCheck className="mx-auto text-gold" size={24} />
              <h3 className="mt-4 text-xl font-semibold text-white">{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionTitle
          eyebrow="Site Planning"
          title="Thoughtful preparation before every build."
          description="We evaluate every site with care to ensure the project is properly scoped, compliant, and ready for efficient execution from day one."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Zoning Review',
              text: 'Reviewing the property\'s location, zoning requirements, and site conditions to ensure the project is properly planned before construction.',
              step: '1',
            },
            {
              title: 'Land Survey',
              text: 'Checking property boundaries, measurements, elevations, and existing site conditions to provide accurate information for construction planning.',
              step: '2',
            },
            {
              title: 'Access Routes',
              text: 'Planning practical entry and exit routes for workers, vehicles, equipment, and material deliveries to keep site activities organized and efficient.',
              step: '3',
            },
          ].map(({ title, text, step }) => (
            <div key={title} className="glass rounded-[1.75rem] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold text-xl font-semibold">
                {step}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
