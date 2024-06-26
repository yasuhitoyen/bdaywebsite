import { useEffect, useRef, useState } from 'react';

const useIntersection = ({ threshold = 0.1, root = null, rootMargin = '0%' }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, root, rootMargin, threshold]);

  return [ref, isIntersecting];
};

export default useIntersection;
