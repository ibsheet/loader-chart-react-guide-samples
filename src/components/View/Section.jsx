import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { FaGithub, FaTable } from 'react-icons/fa';
import styles from '../../assets/styles/components/View/section.module.css';
import useScrollToTop from '../../hooks/useScrollToTop';

const Section = () => {
  const title = 'IBChart';
  const subTitle = 'Loader를 사용하여 IBChart를 React 환경에서 제공합니다.';
  const topButtonRef = useRef(null);

  const { scrollY, handleTop } = useScrollToTop(topButtonRef);

  return (
    <div className={styles.content}>
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
      <Container>
        <div className={styles.header}>
          <FaTable className={styles.icon} size='40' />
          <span className={styles.title}>
            {title}
          </span>
          <p className={styles.subTitle}>
            {subTitle}
          </p>
          <Stack spacing={2} direction='row' className={styles.buttonWrapper}>
            <Link underline='none' color='inherit' href='https://github.com/ibsheet/loader-react-guide-samples'>
              <Button variant='contained' startIcon={<FaGithub size='24' color='#fff' />} className={styles.buttonGithub}>
                <p className={styles.textGithub}>
                  GitHub
                </p>
              </Button>
            </Link>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Section;
