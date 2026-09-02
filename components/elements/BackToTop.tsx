export interface BackToTopProps {
  scroll?: boolean;
}

export default function BackToTop({ scroll }: BackToTopProps) {
  return (
    <>
      {scroll && (
        <a className="scroll-top scroll-to-target" href="#top">
          <i className="icon-top-arrow"></i>
        </a>
      )}
    </>
  );
}
