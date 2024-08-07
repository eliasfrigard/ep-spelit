import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimateIn = ({
  children,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  animationType = 'fade',
  slideDirection = 'left',
  disabled = false,
  delay = 0,
  ...rest
} : {
  children?: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  animationType?: 'fade' | 'slide' | 'zoom';
  slideDirection?: 'left' | 'right' | 'top' | 'bottom';
  disabled?: boolean;
  delay?: number;

}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce });
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [inView, delay]);

  const getSlideDirection = () => {
    switch (slideDirection) {
      case 'left':
        return 'lg:-translate-x-24';
      case 'right':
        return 'lg:translate-x-24';
      case 'top':
        return 'lg:-translate-y-24';
      case 'bottom':
        return 'lg:translate-y-24';
      default:
        break;
    }
  };

  const getAnimationClasses = () => {
    switch (animationType) {
      case 'slide':
        return `${className} duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : `opacity-0 lg:opacity-90 ${getSlideDirection()}`
        }`;
      case 'zoom':
        return `${className} duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
        }`;
      default:
        return `${className} duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  if (disabled) {
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }

  return (
    <div {...rest} className={getAnimationClasses()} ref={ref}>
      {children}
    </div>
  );
};

export default AnimateIn;
