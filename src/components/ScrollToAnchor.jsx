import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    if (hash === '') {
      window.scrollTo(0, 0);
    } 
    // Scroll to element if hash exists
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToAnchor;
