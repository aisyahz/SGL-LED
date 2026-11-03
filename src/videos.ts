// Add approved YouTube or Vimeo video URLs here. Blank/invalid entries stay hidden.
export const SHOWCASE_VIDEOS = [
  { title: 'SGL LED showcase', url: 'https://vimeo.com/1242768365?fl=tl&fe=ec' },
  { title: 'SGL LED installation', url: 'https://vimeo.com/reviews/4dfadf41-e3a1-4742-95e2-b0d8d771d075/videos/1242769122' },
];

export function videoEmbedUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return null;

    const host = url.hostname.toLowerCase();
    let id: string | null = null;
    if (host === 'youtu.be') {
      id = url.pathname.slice(1).split('/')[0] || null;
    } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
      id = url.pathname === '/watch' ? url.searchParams.get('v') : url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)$/)?.[1] || null;
    } else if (host === 'vimeo.com' || host === 'www.vimeo.com') {
      id = url.pathname.match(/^\/([1-9]\d*)\/?$/)?.[1] || null;
    } else if (host === 'player.vimeo.com') {
      id = url.pathname.match(/^\/video\/([1-9]\d*)\/?$/)?.[1] || null;
    }

    if (!id) return null;
    if (host.includes('youtube') || host === 'youtu.be') {
      return /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    const privateHash = url.searchParams.get('h');
    if (privateHash && !/^[\w-]+$/.test(privateHash)) return null;
    const embedUrl = new URL(`https://player.vimeo.com/video/${id}`);
    if (privateHash) embedUrl.searchParams.set('h', privateHash);
    return embedUrl.toString();
  } catch {
    return null;
  }
}
