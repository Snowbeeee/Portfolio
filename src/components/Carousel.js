import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function isYouTube(item) {
  return item && typeof item === 'object' && item.type === 'youtube';
}

export default function Carousel({ media, images, projectName }) {
  const items = media || images || [];
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState({});
  const [lightbox, setLightbox] = useState(null); // index or null

  // Indices of images navigable in lightbox (no YouTube, no failed)
  const lbItems = items
    .map((item, i) => ({ item, i }))
    .filter(({ item, i }) => !isYouTube(item) && !failed[i]);

  const lbPos = lightbox !== null ? lbItems.findIndex(x => x.i === lightbox) : -1;

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft')  setLightbox(lbItems[(lbPos - 1 + lbItems.length) % lbItems.length]?.i ?? null);
      if (e.key === 'ArrowRight') setLightbox(lbItems[(lbPos + 1) % lbItems.length]?.i ?? null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, lbPos, lbItems]);

  if (!items || items.length === 0) return null;

  const isAlive = (item, i) => isYouTube(item) || !failed[i];
  const aliveCount = items.filter(isAlive).length;
  const showNav = aliveCount > 1;
  const allDead = aliveCount === 0;

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i - 1 + items.length) % items.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i + 1) % items.length);
  };

  const lbPrev = (e) => {
    e.stopPropagation();
    setLightbox(lbItems[(lbPos - 1 + lbItems.length) % lbItems.length].i);
  };

  const lbNext = (e) => {
    e.stopPropagation();
    setLightbox(lbItems[(lbPos + 1) % lbItems.length].i);
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          {allDead ? (
            <div className="carousel-placeholder">
              <span className="carousel-placeholder-name">{projectName}</span>
            </div>
          ) : (
            items.map((item, i) => {
              if (isYouTube(item)) {
                if (i !== current) return null;
                return (
                  <div key={`yt-${item.id}`} className="carousel-video-wrapper visible">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.id}?rel=0`}
                      title={`${projectName} video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="carousel-video"
                    />
                  </div>
                );
              }
              if (failed[i]) return null;
              return (
                <img
                  key={item}
                  src={item}
                  alt={`${projectName} screenshot ${i + 1}`}
                  draggable={false}
                  className={`carousel-img${i === current ? ' visible' : ''}`}
                  onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                  onClick={i === current ? (e) => { e.stopPropagation(); setLightbox(i); } : undefined}
                />
              );
            })
          )}

          {showNav && (
            <>
              <button className="carousel-btn carousel-prev" onClick={prev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none" aria-hidden="true"><path d="M8 1.5L2 8.5L8 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="carousel-btn carousel-next" onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none" aria-hidden="true"><path d="M2 1.5L8 8.5L2 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </>
          )}
        </div>

        {showNav && (
          <div className="carousel-dots">
            {items.map((item, i) =>
              !isAlive(item, i) ? null : (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? ' active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Slide ${i + 1}`}
                />
              )
            )}
          </div>
        )}
      </div>

      {lightbox !== null && createPortal(
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar">✕</button>
            <img
              src={items[lightbox]}
              alt={`${projectName} ${lbPos + 1} / ${lbItems.length}`}
              className="lightbox-img"
              draggable={false}
            />
          </div>

          {lbItems.length > 1 && (
            <>
              <button className="lightbox-btn lightbox-prev" onClick={lbPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none" aria-hidden="true"><path d="M10 2L3 11L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="lightbox-btn lightbox-next" onClick={lbNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none" aria-hidden="true"><path d="M3 2L10 11L3 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <span className="lightbox-counter">{lbPos + 1} / {lbItems.length}</span>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
