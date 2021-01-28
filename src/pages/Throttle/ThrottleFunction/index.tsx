import React, { useState } from 'react';
import { useThrottleFn } from 'Utils/CustomHooks';
import { Button } from 'antd';

const ThrottledFunction: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 2000,
      // * 上升沿触发副作用函数，必须为 true，可不传。
      trailing: true,
      // * 下降沿触发副作用函数，必须为 true，可不传。
      leading: true
    }
  );
  return (
    <div>
      <h1>Throttled function:</h1>
      <p>Add 1 every 2 seconds during click, try more click: {value}</p>
      <Button type='primary' onClick={run}>
        Fast Click
      </Button>
    </div>
  );
};

export default ThrottledFunction;
