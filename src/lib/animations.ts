
interface AnimateElementsOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export const animateElements = (selector: string, options: AnimateElementsOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'animated',
  } = options;

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    elements.forEach((element) => observer.unobserve(element));
  };
};

export const initAnimations = () => {
  // Animate elements with class 'animate-on-scroll'
  animateElements('.animate-on-scroll');
};
