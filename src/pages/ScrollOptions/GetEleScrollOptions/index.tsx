import React, { useRef } from 'react';
import { useScroll } from 'Src/utils/CustomHooks';
import styles from './index.module.scss';

const GetEleScrollOptions: React.FC = (): JSX.Element => {
  const scrollRef = useRef(null);
  const { left, top }: ReturnType<typeof useScroll> = useScroll(scrollRef);
  return (
    <>
      <h1>Binding scroll position.</h1>
      <span>
        left: {left}
        <br />
        top: {top}
        <br />
      </span>
      <div ref={scrollRef} className={styles.scrollWrapper}>
        <div />
      </div>
    </>
  );
};

export default GetEleScrollOptions;
