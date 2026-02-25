import gsap from 'gsap';
import React, { useEffect } from 'react';

export default function ScrollPower3Out({
  children,
  childrenRef
}: {
  children: React.ReactNode;
  childrenRef: React.RefObject<HTMLElement> | null;
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!childrenRef?.current) return;

      gsap.fromTo(
        childrenRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: childrenRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, childrenRef?.current || undefined);

    return () => ctx.revert();
  }, [childrenRef]);

  return <>{children}</>;
}
