import React, { useState } from 'react';
import { useThrottle } from 'Utils/CustomHooks';
import { Input } from 'antd';

const ThrottledInputValue: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number | string>();
  const throttledValue: ReturnType<typeof useThrottle> = useThrottle(value, { wait: 2000 });
  return (
    <div>
      <h1>Throttled input value:</h1>
      <Input
        type='text'
        placeholder='Typed value'
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
      <p>The input value changes every 2 seconds: {throttledValue}</p>
    </div>
  );
};

export default ThrottledInputValue;
