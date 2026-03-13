import { useState, useEffect, useRef } from "react";

function Counter({ end, duration = 1, style }: { end: number; duration?: number; style?: React.CSSProperties }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const durationMs = duration * 1000;

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} style={style}>{count}</span>;
}

const stats = [
  { end: 25, suffix: "+", label: "Years Of Experience" },
  { end: 5, suffix: "K", label: "Happy Customers" },
  { end: 97, suffix: "%", label: "Customer Satisfaction Rate" },
  { end: 2, suffix: "K", label: "Years Of Experience" },
];

export function FunfactSection() {
  return (
    <div className="oit-funfact-area oit-funfact-bdr" data-bg-color="#F5F5F5" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {stats.map((stat, i) => (
            <div key={i} className="col">
              <div className="oit-funfact-item text-center">
                <h4 className="oit-funfact-title">
                  <Counter end={stat.end} duration={1} style={{ fontSize: "100px" }} />
                  {stat.suffix}
                </h4>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
