import React, { useState } from 'react';
import { useInterval } from 'Utils/CustomHooks';
import { Space, Button } from 'antd';

const FunctionalTimer = () => {
  const [count, setCount] = useState<number>(0);
  const [interval, setInterval] = useState<number | null>(1000);
  useInterval(
    () => {
      setCount(count + 1);
    },
    interval,
    { immediate: true }
  );
  return (
    <>
      <h1>Functional timer.</h1>
      <p>count: {count}</p>
      <p>interval: {interval}</p>
      <Space>
        <Button type='primary' onClick={() => setInterval((interval as number) + 1000)}>
          interval + 1000
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setInterval(1000);
          }}
        >
          reset interval
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setCount(0);
          }}
        >
          reset timer
        </Button>
        <Button
          type='primary'
          danger
          onClick={() => {
            setInterval(null);
          }}
        >
          destroy
        </Button>
      </Space>
    </>
  );
};

export default FunctionalTimer;
