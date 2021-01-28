import React, { useState } from 'react';
import { useDebounceFn } from 'Utils/CustomHooks';
import { Button } from 'antd';

const DebouncedFunction: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 3000,
      // * 上升沿触发副作用函数，默认 true，本例中点击按钮之后开始计数。
      trailing: true,
      // * 下降沿触发副作用函数，默认 false，本例中先计数再进行时间间隔。
      leading: false
    }
  );
  return (
    <div>
      <h1>Debounced function:</h1>
      <p>Add 1 for 3 seconds after clicking: {value}</p>
      <Button type='primary' onClick={run}>
        Fast Click
      </Button>
    </div>
  );
};

export default DebouncedFunction;
