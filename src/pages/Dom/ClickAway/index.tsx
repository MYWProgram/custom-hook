import React, { useState, useRef } from 'react';
import { useClickAway } from 'Utils/CustomHooks';
import { Button, Space } from 'antd';
import styles from './index.module.scss';

const ClickAway: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useClickAway(() => {
    setCounter(pre => pre + 1);
  }, [ref1, ref2]);

  return (
    <>
      <h1>Click out of button to increase counter.</h1>
      <div className={styles.buttonWrapper}>
        <Space>
          <div ref={ref1}>
            <Button type='primary'>Click1</Button>
          </div>
          <div ref={ref2}>
            <Button type='primary'>Click2</Button>
          </div>
        </Space>
      </div>
      <p className={styles.counterWrapper}>counter: {counter}</p>
    </>
  );
};

export default ClickAway;
