"use client";

/**
 * Paylaşılan SSS akordeonu.
 *
 * Projede aynı mantık altı yerde kopyalanmıştı (anasayfa, SSS sayfası ve
 * dört hizmet detayı). Tek bileşene indirildi ve klavye erişimi eklendi:
 * başlık artık <button> olduğu için Tab + Enter/Space ile açılıp kapanır.
 */

import { useId, useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionProps = {
  items: AccordionItem[];
  /** Başlangıçta açık olan öğenin sırası; hiçbiri için null. */
  defaultOpenIndex?: number | null;
  className?: string;
};

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  className = "accrodion-grp faq-one__accrodion",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <ul className={className} data-grp-name="faq-one-accrodion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li key={item.question} className={isOpen ? "accrodion active" : "accrodion"}>
            <div className="accrodion-title">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  className="accrodion-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                </button>
              </h3>
            </div>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "accrodion-content current" : "accrodion-content"}
            >
              <div className="inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
