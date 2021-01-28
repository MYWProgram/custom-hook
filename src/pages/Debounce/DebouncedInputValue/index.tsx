import React, { useState } from 'react';
import { useDebounce } from 'Utils/CustomHooks';
import { Input } from 'antd';

const DebouncedInputValue: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number | string>();
  const debouncedValue: ReturnType<typeof useDebounce> = useDebounce(value, { wait: 2000 });
  return (
    <div>
      <h1>Debounced input value:</h1>
      <Input
        type='text'
        placeholder='Typed value'
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
      <p style={{ marginTop: 16 }}>Display the input value after 2 seconds: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedInputValue;
