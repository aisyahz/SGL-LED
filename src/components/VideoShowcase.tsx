import { SHOWCASE_VIDEOS, videoEmbedUrl } from '../videos';
import SectionHeader from './ui/SectionHeader';

export default function VideoShowcase() {
  const videos = SHOWCASE_VIDEOS.flatMap(video => {
    const embed = videoEmbedUrl(video.url);
    return embed ? [{ ...video, embed }] : [];
  });
  if (!videos.length) return null;
  return (
    <section id="videos-section" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader badgeText="SGL in action" title="See our LED displays in motion" />
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map(video => (
            <article key={video.url} className="overflow-hidden border border-white/10 bg-[#111827]">
              <iframe src={video.embed} title={video.title} loading="lazy" className="aspect-video w-full border-0" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              <h3 className="p-5 font-display text-lg text-white">{video.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
