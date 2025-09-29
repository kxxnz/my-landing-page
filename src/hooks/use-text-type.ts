import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface UseTextTypeOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
}

export const useTextType = (options: UseTextTypeOptions = {}) => {
  const {
    delay = 0,
    duration = 1.5,
    ease = "none",
    stagger = 0.2
  } = options;

  const createTextTypeAnimation = (
    elements: React.RefObject<HTMLElement>[],
    texts: string[],
    startDelay: number = 0
  ) => {
    useEffect(() => {
      const tl = gsap.timeline({ delay: startDelay });

      elements.forEach((elementRef, index) => {
        if (elementRef.current && texts[index]) {
          tl.to(elementRef.current, {
            duration,
            text: texts[index],
            ease,
          }, index * stagger);
        }
      });

      return () => {
        tl.kill();
      };
    }, [elements, texts, startDelay, duration, ease, stagger]);
  };

  const createSequentialTextType = (
    elementRef: React.RefObject<HTMLElement>,
    texts: string[],
    startDelay: number = 0
  ) => {
    useEffect(() => {
      const tl = gsap.timeline({ delay: startDelay });

      texts.forEach((text, index) => {
        tl.to(elementRef.current, {
          duration,
          text,
          ease,
        }, index * stagger);
      });

      return () => {
        tl.kill();
      };
    }, [elementRef, texts, startDelay, duration, ease, stagger]);
  };

  return {
    createTextTypeAnimation,
    createSequentialTextType
  };
};
