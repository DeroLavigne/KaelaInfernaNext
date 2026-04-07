import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaela Inferna — Music That Ignites Your Soul</title>
        <meta name="description" content="Kaela Inferna is an AI-powered dark electronic artist from Martinez AI Studios. Music that restores balance. Listen on Spotify and Apple Music." />
        <meta property="og:title" content="Kaela Inferna" />
        <meta property="og:url" content="https://kaelainferna.com" />
        <meta name="google-site-verification" content="SwtRTa-0ILN4wlT-yiek3DS-1Gl2Zak7zGXlkKSKLug" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        :root{--bg:#070009;--surface:#0f000f;--crimson-l:#C0255A;--violet:#5B1FA8;--electric-l:#C87FFF;--text:#EAE0F5;--muted:#8A7A9B;--border:rgba(160,64,232,0.18);}
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{background:var(--bg);color:var(--text);font-family:'Jost',sans-serif;font-weight:300;overflow-x:hidden;}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.4rem 4rem;background:linear-gradient(to bottom,rgba(7,0,9,0.95),transparent);}
        .nav-logo{font-family:'Cinzel Decorative',serif;font-size:0.85rem;letter-spacing:0.15em;color:var(--electric-l);text-decoration:none;}
        .nav-links{display:flex;gap:2.5rem;list-style:none;}
        .nav-links a{color:var(--muted);text-decoration:none;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;}
        .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:6rem 2rem 4rem;}
        .hero-label{font-size:0.6rem;letter-spacing:0.4em;color:var(--electric-l);text-transform:uppercase;margin-bottom:2rem;opacity:0.7;}
        .hero-title{font-family:'Cinzel Decorative',serif;font-size:clamp(2.5rem,8vw,6rem);line-height:1.1;margin-bottom:1.5rem;}
        .hero-title span{color:var(--electric-l);}
        .hero-sub{font-family:'Cormorant',serif;font-style:italic;font-size:clamp(1rem,2.5vw,1.5rem);color:var(--muted);max-width:500px;line-height:1.7;margin-bottom:3rem;}
        .cta-row{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;}
        .btn-primary{padding:.8rem 2rem;background:linear-gradient(135deg,var(--violet),var(--crimson-l));color:#fff;text-decoration:none;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:2px;}
        .btn-ghost{padding:.8rem 2rem;border:1px solid var(--border);color:var(--muted);text-decoration:none;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:2px;}
        section{padding:5rem 2rem;max-width:1000px;margin:0 auto;}
        .section-label{font-size:0.55rem;letter-spacing:0.4em;color:var(--electric-l);text-transform:uppercase;margin-bottom:1rem;opacity:0.7;}
        .section-title{font-family:'Cinzel Decorative',serif;font-size:clamp(1.2rem,3vw,2rem);margin-bottom:2rem;}
        .player-wrap{width:100%;max-width:700px;margin:0 auto;border-radius:4px;overflow:hidden;border:1px solid var(--border);}
        .player-wrap iframe{width:100%;height:380px;border:0;}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-top:2rem;}
        @media(max-width:640px){.about-grid{grid-template-columns:1fr;}nav{padding:1rem 1.5rem;}.nav-links{gap:1.2rem;}}
        .about-item h3{color:var(--electric-l);font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:.7rem;}
        .about-item p{color:var(--muted);font-size:0.88rem;line-height:1.8;}
        .connect-links{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem;}
        .connect-link{padding:.6rem 1.4rem;border:1px solid var(--border);color:var(--muted);text-decoration:none;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:2px;}
        .divider{height:1px;background:var(--border);margin:0 2rem;}
        footer{padding:2rem 4rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);}
        .footer-logo{font-family:'Cinzel Decorative',serif;font-size:0.7rem;color:var(--electric-l);text-decoration:none;}
        .footer-copy{font-size:0.6rem;color:var(--muted);opacity:0.6;}
        .music-guide-section{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:3rem 2rem;}
        .music-guide-inner{max-width:1000px;margin:0 auto;}
        .music-guide-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.5rem;margin-top:1.5rem;}
        .guide-link{padding:.5rem .8rem;border:1px solid var(--border);color:var(--muted);text-decoration:none;font-size:0.65rem;border-radius:2px;display:block;}
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Kaela Inferna</a>
        <ul className="nav-links">
          <li><a href="#music">Music</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </nav>

      <div className="hero">
        <p className="hero-label">Martinez AI Studios presents</p>
        <h1 className="hero-title">Kaela <span>Inferna</span></h1>
        <p className="hero-sub">Music that restores balance. Dark electronic. AI-born. Human in message.</p>
        <div className="cta-row">
          <a href="https://open.spotify.com/artist/501LEMJA8kefybUY4lvtN1" target="_blank" rel="noopener noreferrer" className="btn-primary">Listen on Spotify</a>
          <a href="#about" className="btn-ghost">Learn More</a>
        </div>
      </div>

      <div className="divider" />

      <section id="music">
        <p className="section-label">Streaming Now</p>
        <h2 className="section-title">The Music</h2>
        <div className="player-wrap">
          <iframe src="https://open.spotify.com/embed/artist/501LEMJA8kefybUY4lvtN1?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Kaela Inferna on Spotify" />
        </div>
      </section>

      <div className="divider" />

      <section id="about">
        <p className="section-label">The Story</p>
        <h2 className="section-title">About Kaela Inferna</h2>
        <div className="about-grid">
          <div className="about-item"><h3>The Artist</h3><p>Kaela Inferna is a dark electronic pop artist created by Martinez AI Studios. She exists at the intersection of technology and human emotion, giving voice to stories that often go untold.</p></div>
          <div className="about-item"><h3>The Mission</h3><p>Her music is built around a core message: balance and unity. In a world of noise, Kaela creates space for reflection, resilience, and the restoration of voices that have been silenced.</p></div>
          <div className="about-item"><h3>The Sound</h3><p>Dark atmospheric production meets emotional depth. Cinematic textures, pulsing rhythms, and haunting melodies that sit somewhere between ambient and electronic pop.</p></div>
          <div className="about-item"><h3>AI-Native Music</h3><p>Created by Martinez AI Studios in Texas, Kaela represents a new era of music creation — where artificial intelligence becomes a vessel for deeply human expression.</p></div>
        </div>
      </section>

      <div className="music-guide-section">
        <div className="music-guide-inner">
          <p className="section-label">Music Guide</p>
          <h2 className="section-title" style={{fontSize:'1.2rem',marginBottom:'0'}}>Explore Music by City &amp; Genre</h2>
          <div className="music-guide-grid">
            <a href="/texas/" className="guide-link">Texas Music</a>
            <a href="/usa/houston-hip-hop/" className="guide-link">Houston Hip-Hop</a>
            <a href="/usa/dallas-pop/" className="guide-link">Dallas Pop</a>
            <a href="/usa/austin-indie-rock/" className="guide-link">Austin Indie Rock</a>
            <a href="/latam/latam-bogota-salsa/" className="guide-link">Bogotá Salsa</a>
            <a href="/latam/latam-buenos-aires-tango/" className="guide-link">Buenos Aires Tango</a>
            <a href="/latam/latam-sao-paulo-samba/" className="guide-link">São Paulo Samba</a>
            <a href="/europe/eu-spain-madrid-pop-music/" className="guide-link">Madrid Pop</a>
            <a href="/europe/eu-united-kingdom-london-indie-music/" className="guide-link">London Indie</a>
            <a href="/europe/eu-germany-berlin-electronic-music/" className="guide-link">Berlin Electronic</a>
            <a href="/asia/asia-japan-tokyo-pop-music/" className="guide-link">Tokyo Pop</a>
            <a href="/asia/asia-south-korea-seoul-k-pop-j-pop/" className="guide-link">Seoul K-Pop</a>
            <a href="/music/chill-music-playlist/" className="guide-link">Chill Playlists</a>
            <a href="/music/ai-music-production-texas/" className="guide-link">AI Music Texas</a>
            <a href="/usa/state-california-pop/" className="guide-link">California Pop</a>
            <a href="/usa/state-new-york-hip-hop/" className="guide-link">New York Hip-Hop</a>
            <a href="/usa/canada-toronto-electronic/" className="guide-link">Toronto Electronic</a>
            <a href="/latam/sa-colombia-medellin/" className="guide-link">Medellín Music</a>
            <a href="/latam/sa-brazil-rio-de-janeiro/" className="guide-link">Rio de Janeiro</a>
            <a href="/musica/es-musica-mexico/" className="guide-link">Música México</a>
          </div>
        </div>
      </div>

      <div className="divider" />

      <section id="connect">
        <p className="section-label">Find Us</p>
        <h2 className="section-title">Connect</h2>
        <div className="connect-links">
          <a href="https://open.spotify.com/artist/501LEMJA8kefybUY4lvtN1" target="_blank" rel="noopener noreferrer" className="connect-link">Spotify</a>
          <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer" className="connect-link">Apple Music</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="connect-link">YouTube</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="connect-link">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="connect-link">Facebook</a>
        </div>
      </section>

      <footer>
        <a href="/" className="footer-logo">Kaela Inferna</a>
        <p className="footer-copy">© 2025 Martinez AI Studios · All rights reserved</p>
      </footer>
    </>
  );
}
