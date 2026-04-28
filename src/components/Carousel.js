import React, { useState } from 'react';

export default function Carousel({ images, projectName }) {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState({});

  if (!images || images.length === 0) return null;

  const allFailed = images.every((_, i) => failed[i]);
  const showNav = images.length > 1 && !allFailed;

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-track">
        {allFailed ? (
          <div className="carousel-placeholder">
            <span className="carousel-placeholder-name">{projectName}</span>
          </div>
        ) : (
          images.map((src, i) =>
            failed[i] ? null : (
              <img
                key={src}
                src={src}
                alt={`${projectName} screenshot ${i + 1}`}
                className={`carousel-img${i === current ? ' visible' : ''}`}
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
              />
            )
          )
        )}

        {showNav && (
          <>
            <button className="carousel-btn carousel-prev" onClick={prev}>&#8249;</button>
            <button className="carousel-btn carousel-next" onClick={next}>&#8250;</button>
          </>
        )}
      </div>

      {showNav && (
        <div className="carousel-dots">
          {images.map((_, i) =>
            failed[i] ? null : (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Imagen ${i + 1}`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
