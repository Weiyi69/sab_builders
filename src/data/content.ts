import { Project, Service, TeamMember } from '../types';
import retail1 from '../assets/images/retail1.jpg';
import retail2 from '../assets/images/retail2.jpg';
import retail3 from '../assets/images/retail3.jpg';
import retail4 from '../assets/images/retail4.jpg';
import retail5 from '../assets/images/retail5.jpg';
import retail6 from '../assets/images/retail6.jpg';
import rp1 from '../assets/images/rp1.jpg';
import rp2 from '../assets/images/rp2.jpg';
import rp3 from '../assets/images/rp3.jpg';
import rp4 from '../assets/images/rp4.jpg';
import rp5 from '../assets/images/rp5.jpg';
import rp6 from '../assets/images/rp6.jpg';
import mc1 from '../assets/images/mc1.jpg';
import mc2 from '../assets/images/mc2.jpg';
import mc3 from '../assets/images/mc3.jpg';
import mc4 from '../assets/images/mc4.jpg';
import mc5 from '../assets/images/mc5.jpg';
import mc6 from '../assets/images/mc6.jpg';

export const services: Service[] = [
  {
    title: 'Retail and Commercial Spaces',
    description: 'Tailored buildouts for storefronts, showrooms, and premium retail destinations.',
    benefits: ['Brand-driven design', 'Operational efficiency', 'Customer-focused flow'],
    icon: 'Building2',
  },
  {
    title: 'Residential Projects',
    description: 'Custom homes and residential developments crafted for comfort and refinement.',
    benefits: ['Personalized finishes', 'Thoughtful space planning', 'Luxury detailing'],
    icon: 'Home',
  },
  {
    title: 'Offices and Warehouses',
    description: 'Flexible workplaces and industrial facilities built for productivity and performance.',
    benefits: ['Efficient layouts', 'Durable systems', 'Scalable design'],
    icon: 'Factory',
  },
  {
    title: 'Restaurants',
    description: 'Hospitality interiors designed to deliver memorable dining atmospheres.',
    benefits: ['Service-ready kitchens', 'Inviting ambience', 'Code-compliant fit-out'],
    icon: 'Sparkles',
  },
  {
    title: 'Sprinkler Installation',
    description: 'Reliable fire protection systems integrated across building types.',
    benefits: ['Safety-first execution', 'Regulatory compliance', 'System testing'],
    icon: 'Flame',
  },
  {
    title: 'Modular Cabinetry',
    description: 'Precision-crafted millwork for kitchens, offices, and bespoke interiors.',
    benefits: ['Efficient production', 'Seamless installation', 'High-end finishes'],
    icon: 'PanelsTopLeft',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'MR DIY',
    category: 'Retail & Commercial Spaces',
    location: 'Vista Mall Pampanga Branch',
    year: 2024,
    image: retail1,
    gallery: [retail1, retail2, retail3, retail4, retail5, retail6],
    description: 'A large-format retail fit-out focused on efficient customer flow, strong brand visibility, and practical, durable construction.',
    stats: [
      { label: 'Floor Area', value: 'Large format' },
      { label: 'Completion', value: 'On schedule' },
    ],
    timeline: [
      { title: 'Planning', description: 'Store layout, merchandising strategy, and build planning.' },
      { title: 'Execution', description: 'Interior construction, finishes, and fixture installation.' },
      { title: 'Delivery', description: 'Operational launch and final handover.' },
    ],
  },
  {
    id: 2,
    title: 'Two Storey Residential with mini pool',
    category: 'Residential Projects',
    location: 'Forest Park Subdivision Angeles City Pampanga',
    year: 2023,
    image: rp1,
    gallery: [rp1, rp2, rp3, rp4, rp5, rp6],
    description: 'A contemporary two-storey residence designed for relaxed family living, natural light, and refined modern comfort.',
    stats: [
      { label: 'Volume', value: '14,800 m³' },
      { label: 'Awards', value: '2 Gold' },
    ],
    timeline: [
      { title: 'Planning', description: 'Site strategy and cost model refinement.' },
      { title: 'Build', description: 'Precision premium construction delivery.' },
      { title: 'Finish', description: 'Interior fit-out and landscape completion.' },
    ],
  },
  {
    id: 6,
    title: 'Modular Cabinetry',
    category: 'Modular Cabinetry',
    location: 'Enclave Exclusive Subd. Angeles City Pampanga',
    year: 2025,
    image: mc1,
    gallery: [mc1, mc2, mc3, mc4, mc5, mc6],
    description: 'A refined modular cabinetry package bringing efficient storage and crafted finishes to a contemporary residence.',
    stats: [
      { label: 'Cabinetry', value: '42 units' },
      { label: 'Installation', value: '6 weeks' },
    ],
    timeline: [
      { title: 'Planning', description: 'Detailed measurements, material selection, and shop drawings.' },
      { title: 'Fabrication', description: 'Precision production with quality checks at every stage.' },
      { title: 'Installation', description: 'Clean installation, adjustment, and final detailing.' },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Pineda, Fel V. II',
    role: 'PRESIDENT & CEO',
    bio: 'Visionary leader shaping the studio’s portfolio of destination projects.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    socials: [
      { label: 'LinkedIn', url: '#' },
      { label: 'Email', url: '#' },
    ],
  },
  {
    name: 'Sebastian, Nazar C.',
    role: 'VICE PRESIDENT & C0-FOUNDER',
    bio: 'Creates spaces that feel both timeless and deeply contemporary.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    socials: [
      { label: 'LinkedIn', url: '#' },
      { label: 'Instagram', url: '#' },
    ],
  },
  {
    name: 'Noor Bensaid',
    role: 'Operations Director',
    bio: 'Keeps complex project delivery calm, elegant, and impeccably coordinated.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    socials: [
      { label: 'LinkedIn', url: '#' },
      { label: 'X', url: '#' },
    ],
  },
];


