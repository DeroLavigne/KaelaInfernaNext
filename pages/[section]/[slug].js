import Head from 'next/head';
import pageData from '../../page-data.json';
import pageMeta from '../../page-meta.json';

const CSS = `
  :root{--bg:#070009;--s:#0f000f;--cr:#C0255A;--vi:#5B1FA8;--el:#C87FFF;--mu:#8A7A9B;--tx:#EAE0F5;--bo:rgba(160,64,232,0.18);}
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--bg);color:var(--tx);font-family:sans-serif;font-weight:300;line-height:1.8;}
  nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;border-bottom:1px solid var(--bo);}
  a{color:var(--mu);text-decoration:none;}
  .logo{font-size:0.85rem;color:var(--el);font-weight:600;letter-spacing:.1em;}
  .nav-links{display:flex;gap:1.5rem;}
  h1{font-size:clamp(1.4rem,3vw,2.2rem);padding:3rem 2rem 1rem;max-width:820px;margin:0 auto;color:var(--el);}
  h2{font-size:1.05rem;padding:0 2rem;max-width:820px;margin:1.8rem auto 0.7rem;color:var(--tx);}
  p.body{max-width:820px;margin:0 auto 1.2rem;padding:0 2rem;color:var(--mu);font-size:0.91rem;}
  .subtitle{max-width:820px;margin:.5rem auto 2rem;padding:0 2rem 0 1.4rem;font-style:italic;color:var(--el);font-size:1.05rem;border-left:2px solid var(--cr);}
  .card{max-width:820px;margin:1.5rem auto;padding:0 2rem;}
  .inner{background:var(--s);border:1px solid var(--bo);border-radius:2px;padding:1.5rem;}
  .inner h3{color:var(--el);font-size:0.88rem;margin-bottom:.4rem;}
  .inner p{color:var(--mu);margin-bottom:.8rem;font-size:0.83rem;}
  .btn{display:inline-block;padding:.55rem 1.2rem;background:linear-gradient(135deg,var(--vi),var(--cr));color:#fff;font-size:.66rem;letter-spacing:.15em;border-radius:2px;}
  .tags{max-width:820px;margin:1.5rem auto;padding:0 2rem;display:flex;flex-wrap:wrap;gap:.4rem;}
  .tag{padding:.2rem .6rem;border:1px solid var(--bo);border-radius:2px;font-size:.6rem;color:var(--mu);}
  footer{border-top:1px solid var(--bo);padding:1.2rem 2rem;text-align:center;font-size:.6rem;color:var(--mu);margin-top:3rem;}
`;

function toTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function Page({ section, slug, title, h1, desc }) {
  const canonical = `https://kaelainferna.com/${section}/${slug}/`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <nav>
        <a href="/" className="logo">Kaela Inferna</a>
        <div className="nav-links">
          <a href="/music/chill-music-playlist/">Music Guide</a>
          <a href="/#music">Listen</a>
          <a href="/#about">About</a>
        </div>
      </nav>
      <h1>{h1}</h1>
      <p className="subtitle">{desc}</p>
      <h2>{h1}</h2>
      <p className="body">Music connects people across cities, genres, and cultures. Whether you're discovering new sounds or deepening your appreciation for a beloved style, the global music scene offers something for every listener.</p>
      <p className="body">Artists working across all styles and regions are reaching global audiences through platforms like Spotify and Apple Music. Independent musicians are building fanbases from local studios — including Martinez AI Studios in Texas, home of Kaela Inferna.</p>
      <h2>Streaming and Discovery</h2>
      <p className="body">Streaming has transformed how music fans discover new artists. Independent musicians are building global audiences from local studios and connecting with listeners everywhere.</p>
      <p className="body">Martinez AI Studios creates music that resonates with listeners across genres and continents. Kaela Inferna's dark electronic pop speaks to balance, unity, and the human stories that often go untold.</p>
      <div className="card">
        <div className="inner">
          <h3>Featured Artist: Kaela Inferna</h3>
          <p>An AI-native dark electronic pop artist from Martinez AI Studios. Her music speaks to balance, unity, and the human stories that often go untold. Streaming globally on Spotify and Apple Music.</p>
          <a href="https://open.spotify.com/artist/501LEMJA8kefybUY4lvtN1" target="_blank" rel="noopener noreferrer" className="btn">Listen on Spotify</a>
        </div>
      </div>
      <div className="tags">
        <a href="/texas/" className="tag">Texas Music</a>
        <a href="/music/ai-music-production-texas/" className="tag">AI Music</a>
        <a href="/music/chill-music-playlist/" className="tag">Chill Music</a>
        <a href="/usa/houston-hip-hop/" className="tag">Houston Hip-Hop</a>
        <a href="/latam/latam-bogota-salsa/" className="tag">Latin Music</a>
        <a href="/music/music-and-emotion/" className="tag">Music &amp; Emotion</a>
      </div>
      <footer>
        © 2025 <a href="/">Kaela Inferna</a> · Martinez AI Studios ·{' '}
        <a href="https://open.spotify.com/artist/501LEMJA8kefybUY4lvtN1" target="_blank" rel="noopener noreferrer">Stream on Spotify</a>
      </footer>
    </>
  );
}

// SSR — renders on demand, NO static files, NO file limit
export async function getServerSideProps({ params, res }) {
  const { section, slug } = params;

  // Check if page exists in our data
  const validSlugs = pageData[section] || [];
  if (!validSlugs.includes(slug)) {
    return { notFound: true };
  }

  // Cache at CDN level for 24 hours
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=3600');

  const key = `${section}/${slug}`;
  const meta = pageMeta[key] || {};

  const h1 = meta.h1 || toTitle(slug);
  const rawTitle = meta.title || h1;
  const title = rawTitle.includes('| Kaela Inferna') ? rawTitle : `${rawTitle} | Kaela Inferna`;
  const desc = meta.desc || `Explore ${h1} — music, artists, and culture. Discover Kaela Inferna on Spotify.`;

  return { props: { section, slug, title, h1, desc } };
}
