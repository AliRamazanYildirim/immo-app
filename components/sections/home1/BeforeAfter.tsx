"use client";

import React, { useState, useRef, useCallback } from "react";

interface TransformationProject {
  id: string;
  tabNumber: string;
  tabTitle: string;
  category: string;
  title: string;
  subtitle: string;
  beforeImg: string;
  beforeAlt: string;
  beforeBadge: string;
  afterImg: string;
  afterAlt: string;
  afterBadge: string;
}

const transformationProjects: TransformationProject[] = [
  {
    id: "luxury-villa-exterior",
    tabNumber: "01",
    tabTitle: "Exklusives Villenanwesen",
    category: "Architektur & Rohbau",
    title: "Vom Rohbau zur architektonischen Landmarke",
    subtitle:
      "Beton-Tragwerk & Poolaushub ➔ Bezugsfertige Luxusresidenz mit Infinity-Pool & Panoramaverglasung",
    beforeImg: "/assets/img/project/villa-transformation-before.webp",
    beforeAlt:
      "Exklusive Villa während der Rohbauphase mit Betonstruktur, Gerüst und Pool-Aushub",
    beforeBadge: "Rohbauphase",
    afterImg: "/assets/img/project/villa-transformation-after.webp",
    afterAlt:
      "Vollendete Luxusvilla mit Swimmingpool, Glasgeländern und moderner Fassadengestaltung",
    afterBadge: "Schlüsselfertig",
  },
  {
    id: "luxury-living-interior",
    tabNumber: "02",
    tabTitle: "Meisterhafter Innenausbau",
    category: "Interieur & Kernsanierung",
    title: "Vom Installationsrohbau zum Luxus-Wohnsalon",
    subtitle:
      "Rohboden & Kamin-Rohbau ➔ Vollendete Raumkultur mit Travertin-Kamin & Fischgrätparkett",
    beforeImg: "/assets/img/project/interior-transformation-before.webp",
    beforeAlt:
      "Wohnbereich in der Rohbauphase mit unverputzten Wänden und Fußbodenheizungsverrohrung",
    beforeBadge: "Rohbauphase",
    afterImg: "/assets/img/project/interior-transformation-after.webp",
    afterAlt:
      "Schlüsselfertiger Designer-Wohnsalon mit beleuchtetem Kamin und edlem Eichenparkett",
    afterBadge: "Schlüsselfertig",
  },
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentProject = transformationProjects[activeTab];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = Math.round((clampedX / rect.width) * 1000) / 10;
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // no-op if capture was already released
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2.5;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  const setPreset = (targetPosition: number) => {
    setSliderPosition(targetPosition);
  };

  return (
    <section className="before-after-one" id="transformation">
      <div className="container">
        {/* Section Title Header */}
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>// TRANSFORMATION GALLERY</h5>
          </div>
          <h2>
            Vom Rohbau zur Perfektion <br />
            Erleben Sie unsere Bauqualität im Detail
          </h2>
          <p>
            Verschieben Sie die vertikale Trennlinie mit der Maus oder per
            Touch, um den 1:1 Unterschied zwischen der baulichen Rohbauphase und
            der vollendeten, bezugsfertigen Architektur zu entdecken.
          </p>
        </div>

        {/* Minimalist Segment Switcher */}
        <div className="before-after__nav">
          <div
            className="before-after__tabs"
            role="tablist"
            aria-label="Transformations-Beispiele"
          >
            {transformationProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={`before-after__tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(index);
                  setSliderPosition(50);
                }}
              >
                <span className="before-after__tab-number">
                  {project.tabNumber}
                </span>
                <span>{project.tabTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Stage Wrapper */}
        <div className="before-after__stage-wrapper">
          <div
            ref={containerRef}
            className="before-after__stage"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* After Layer (Bottom / Complete) */}
            <div className="before-after__layer before-after__layer--after">
              <img
                src={currentProject.afterImg}
                alt={currentProject.afterAlt}
                className="before-after__img"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
              <div
                className="before-after__badge before-after__badge--after"
                style={{
                  opacity: sliderPosition > 85 ? 0 : 1,
                  transform: `translateY(${sliderPosition > 85 ? "-6px" : "0"})`,
                }}
              >
                <span className="before-after__badge-dot"></span>
                <span>{currentProject.afterBadge}</span>
              </div>
            </div>

            {/* Before Layer (Top / Clipped Inset) */}
            <div
              className="before-after__layer before-after__layer--before"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src={currentProject.beforeImg}
                alt={currentProject.beforeAlt}
                className="before-after__img"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
              <div
                className="before-after__badge before-after__badge--before"
                style={{
                  opacity: sliderPosition < 15 ? 0 : 1,
                  transform: `translateY(${sliderPosition < 15 ? "-6px" : "0"})`,
                }}
              >
                <span className="before-after__badge-dot"></span>
                <span>{currentProject.beforeBadge}</span>
              </div>
            </div>

            {/* Central Luminous Divider Line & Precision Dial */}
            <div
              className="before-after__divider"
              style={{ left: `${sliderPosition}%` }}
            >
              <div
                className={`before-after__handle ${isDragging ? "dragging" : ""}`}
                role="slider"
                tabIndex={0}
                aria-label="Vorher-Nachher Vergleichs-Schieberegler"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={handleKeyDown}
              >
                <svg
                  className="before-after__handle-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 7L3.5 12L8.5 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 7L20.5 12L15.5 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Luxury Interactive Control & Meta Bar */}
          <div className="before-after__bar">
            <div className="before-after__meta">
              <span className="before-after__meta-tag">
                {currentProject.category}
              </span>
              <span className="before-after__meta-title">
                {currentProject.subtitle}
              </span>
            </div>

            <div className="before-after__controls">
              <button
                type="button"
                className={`before-after__preset-btn ${sliderPosition === 100 ? "active" : ""}`}
                onClick={() => setPreset(100)}
                title="Vollständig Vorher (Rohbau)"
              >
                Vorher
              </button>
              <button
                type="button"
                className={`before-after__preset-btn ${sliderPosition === 50 ? "active" : ""}`}
                onClick={() => setPreset(50)}
                title="50/50 Ansicht"
              >
                50 / 50
              </button>
              <button
                type="button"
                className={`before-after__preset-btn ${sliderPosition === 0 ? "active" : ""}`}
                onClick={() => setPreset(0)}
                title="Vollständig Nachher (Schlüsselfertig)"
              >
                Nachher
              </button>
              <div className="before-after__percentage">
                {Math.round(sliderPosition)}% /{" "}
                {100 - Math.round(sliderPosition)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
