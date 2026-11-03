// Add approved, embeddable YouTube or Vimeo share URLs here. Vimeo review links
// are not embed URLs and stay hidden.
export const SHOWCASE_VIDEOS = [
  { title: 'sglled1', url: 'https://player.vimeo.com/video/1242768365?badge=0&autopause=0&player_id=0&app_id=58479', aspectRatio: '9 / 16' },
  { title: 'sglled2', url: 'https://player.vimeo.com/video/1242769122?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', aspectRatio: '9 / 16' },
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
    for (const key of ['title', 'byline', 'portrait', 'badge', 'autopause', 'player_id', 'app_id']) {
      const value = url.searchParams.get(key);
      if (value) embedUrl.searchParams.set(key, value);
    }
    if (privateHash) embedUrl.searchParams.set('h', privateHash);
    return embedUrl.toString();
  } catch {
    return null;
  }
}
