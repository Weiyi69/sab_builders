import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="section-shell py-24">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold"><ArrowLeft size={16} /> Back to projects</Link>
        <p className="mt-8 text-xl text-stone-300">Project not found.</p>
      </div>
    );
  }

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery.filter((image) => image !== project.image) : [];
  const selectedIndex = selectedImage ? gallery.indexOf(selectedImage) : 0;

  return (
    <div className="pb-24">
      <section className="section-shell py-24 lg:py-32">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold"><ArrowLeft size={16} /> Back to projects</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">{project.category}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-400">{project.description}</p>

            <button type="button" onClick={() => setSelectedImage(project.image)} className="mt-8 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left transition hover:border-gold/40">
              <img src={project.image} alt={project.title} className="h-[420px] w-full object-cover transition duration-300 hover:scale-[1.02]" />
            </button>

            {gallery.length > 1 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {gallery.map((image, index) => (
                  <button key={`${project.id}-${index}`} type="button" onClick={() => setSelectedImage(image)} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left transition hover:border-gold/40">
                    <img src={image} alt={`${project.title} view ${index + 1}`} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#d4b368]/40 bg-[#18191c]/90 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl font-semibold tracking-[0.08em] text-white">PROJECT JOURNEY</h3>
              <div className="mt-6 space-y-5">
                {project.timeline.map((item, index) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4b368]/80 bg-[#d4b368]/10 text-[10px] font-semibold text-[#f3d9a1]">{index + 1}</span>
                      {index < project.timeline.length - 1 && <span className="mt-2 h-full w-px bg-white/10" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d9a1]">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-stone-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f12] shadow-[0_30px_80px_rgba(0,0,0,0.6)]" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70">
              <X size={20} />
            </button>

            <div className="flex items-center justify-center bg-black/30 p-4 sm:p-6">
              <img src={selectedImage} alt={project.title} className="max-h-[75vh] w-full rounded-[1.25rem] object-contain" />
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-black/30 px-4 py-3 sm:px-6">
                <button
                  type="button"
                  onClick={() => setSelectedImage(gallery[(selectedIndex - 1 + gallery.length) % gallery.length])}
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-200 transition hover:text-white"
                >
                  <ArrowLeft size={16} /> Prev
                </button>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-400">{selectedIndex + 1} / {gallery.length}</p>
                <button
                  type="button"
                  onClick={() => setSelectedImage(gallery[(selectedIndex + 1) % gallery.length])}
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-200 transition hover:text-white"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
