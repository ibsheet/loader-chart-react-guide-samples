import { useState, useEffect, useCallback } from 'react';

/**
 * 스크롤 위치에 따라 TOP 버튼을 표시하고 스크롤을 맨 위로 이동하는 커스텀 훅
 * @param {React.RefObject} buttonRef - TOP 버튼의 ref (선택적)
 * @param {number} threshold - 버튼이 표시될 스크롤 임계값 (기본: 100)
 * @returns {{ scrollY: number, handleTop: () => void, isVisible: boolean }}
 */
const useScrollToTop = (buttonRef = null, threshold = 100) => {
  const [scrollY, setScrollY] = useState(0);
  const isVisible = scrollY > threshold;

  const handleTop = useCallback(() => {
    if (scrollY > threshold) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setScrollY(0);
    }
  }, [scrollY, threshold]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, handleTop, isVisible };
};

export default useScrollToTop;
