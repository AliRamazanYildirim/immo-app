"use client";

/**
 * Önce/sonra karşılaştırma galerisinin etkileşimli kısmı.
 * Başlık bloğu sunucuda kalır; metinler BeforeAfter'dan prop olarak gelir.
 */

import { useCallback, useRef, useState, type CSSProperties } from "react";
import type { HomeDict } from "@/lib/i18n/locales/de/home";

export type BeforeAfterGalleryProps = {
  content: Omit<
    HomeDict["beforeAfter"],
    "eyebrow" | "titleLine1" | "titleLine2" | "text"
  >;
};

const DEFAULT_POSITION = 50;
const KEY_STEP = 2.5;
const KEY_STEP_LARGE = 10;
/** Tutamaç kenara bu kadar yaklaşınca o taraftaki rozet gizlenir. */
const BADGE_HIDE_EDGE = 15;

const presets = [
  { key: "before", titleKey: "beforeTitle", position: 100 },
  { key: "split", titleKey: "splitTitle", position: 50 },
  { key: "after", titleKey: "afterTitle", position: 0 },
] as const;

function badgeStyle(isHidden: boolean): CSSProperties {
  return {
    opacity: isHidden ? 0 : 1,
    transform: `translateY(${isHidden ? "-6px" : "0"})`,
  };
}

function DragHandleIcon() {
  return (
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
  );
}

export default function BeforeAfterGallery({ content }: BeforeAfterGalleryProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(DEFAULT_POSITION);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentProject = content.projects[activeTab];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clampedX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition(Math.round((clampedX / rect.width) * 1000) / 10);
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
    const step = e.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
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

  return (
    <>
      {/* Minimalist Segment Switcher */}
      <div className="before-after__nav">
        <div
          className="before-after__tabs"
          role="tablist"
          aria-label={content.tablistAria}
        >
          {content.projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`before-after__tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(DEFAULT_POSITION);
              }}
            >
              <span className="before-after__tab-number">{project.tabNumber}</span>
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
              style={badgeStyle(sliderPosition > 100 - BADGE_HIDE_EDGE)}
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
              style={badgeStyle(sliderPosition < BADGE_HIDE_EDGE)}
            >
              <span className="before-after__badge-dot"></span>
              <span>{currentProject.beforeBadge}</span>
            </div>
          </div>

          {/* Central Luminous Divider Line & Precision Dial */}
          <div className="before-after__divider" style={{ left: `${sliderPosition}%` }}>
            <div
              className={`before-after__handle ${isDragging ? "dragging" : ""}`}
              role="slider"
              tabIndex={0}
              aria-label={content.sliderAria}
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={handleKeyDown}
            >
              <DragHandleIcon />
            </div>
          </div>
        </div>

        {/* Luxury Interactive Control & Meta Bar */}
        <div className="before-after__bar">
          <div className="before-after__meta">
            <span className="before-after__meta-tag">{currentProject.category}</span>
            <span className="before-after__meta-title">{currentProject.subtitle}</span>
          </div>

          <div className="before-after__controls">
            {presets.map((preset) => (
              <button
                key={preset.key}
                type="button"
                className={`before-after__preset-btn ${sliderPosition === preset.position ? "active" : ""}`}
                onClick={() => setSliderPosition(preset.position)}
                title={content.presets[preset.titleKey]}
              >
                {content.presets[preset.key]}
              </button>
            ))}
            <div className="before-after__percentage">
              {Math.round(sliderPosition)}% / {100 - Math.round(sliderPosition)}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
