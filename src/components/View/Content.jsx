import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import styles from '../../assets/styles/components/View/content.module.css';
import IBChart from '../Create/ChartCreate';
import useScrollToTop from '../../hooks/useScrollToTop';

/**
 * HTML 문자열을 안전하게 파싱하여 React 요소로 변환
 * @param {string} htmlString - 파싱할 HTML 문자열
 * @returns {React.ReactNode[]} React 요소 배열
 */
const parseHtmlToReact = (htmlString) => {
  if (!htmlString) return null;

  const elements = [];
  let remaining = htmlString;
  let key = 0;

  while (remaining.length > 0) {
    // <br> 태그 처리
    const brMatch = remaining.match(/^<br\s*\/?>/i);
    if (brMatch) {
      elements.push(<br key={key++} />);
      remaining = remaining.slice(brMatch[0].length);
      continue;
    }

    // <b> 태그 처리
    const bMatch = remaining.match(/^<b>([^<]*)<\/b>/i);
    if (bMatch) {
      elements.push(<b key={key++}>{bMatch[1]}</b>);
      remaining = remaining.slice(bMatch[0].length);
      continue;
    }

    // <strong> 태그 처리
    const strongMatch = remaining.match(/^<strong>([^<]*)<\/strong>/i);
    if (strongMatch) {
      elements.push(<strong key={key++}>{strongMatch[1]}</strong>);
      remaining = remaining.slice(strongMatch[0].length);
      continue;
    }

    // <i> 태그 처리
    const iMatch = remaining.match(/^<i>([^<]*)<\/i>/i);
    if (iMatch) {
      elements.push(<i key={key++}>{iMatch[1]}</i>);
      remaining = remaining.slice(iMatch[0].length);
      continue;
    }

    // 일반 텍스트 처리
    const textMatch = remaining.match(/^[^<]+/);
    if (textMatch) {
      elements.push(<span key={key++}>{textMatch[0]}</span>);
      remaining = remaining.slice(textMatch[0].length);
      continue;
    }

    // 알 수 없는 태그는 이스케이프하여 텍스트로 표시
    const unknownTagMatch = remaining.match(/^<[^>]*>/);
    if (unknownTagMatch) {
      elements.push(<span key={key++}>{unknownTagMatch[0]}</span>);
      remaining = remaining.slice(unknownTagMatch[0].length);
      continue;
    }

    // 나머지 문자 처리
    elements.push(<span key={key++}>{remaining[0]}</span>);
    remaining = remaining.slice(1);
  }

  return elements;
};

const Content = () => {
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);
  const chart = useSelector((state) => state.chart);
  const topButtonRef = useRef(null);

  const { scrollY, handleTop } = useScrollToTop(topButtonRef);

  return (
    <Container maxWidth='lg' component='main' className={styles.container}>
      <div className={styles.main}>
        <button
          ref={topButtonRef}
          className={styles.topButtons}
          onClick={handleTop}
          style={{
            opacity: scrollY > 100 ? 1 : 0,
            cursor: scrollY > 100 ? 'pointer' : 'default'
          }}
        >
          TOP
        </button>
        <div className={styles.sub}>
          <span className={styles.title}>
            {title}
          </span>
          <div className={styles.subTitle}>
            {parseHtmlToReact(subTitle)}
          </div>
          <div className={styles.sheetWrapper}>
            {chart && <IBChart />}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Content;
