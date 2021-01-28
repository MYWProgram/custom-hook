import React, { useState } from 'react';
import { useVirtualList, OptionType } from 'Utils/CustomHooks';
import { Input, Button } from 'antd';
import styles from './index.module.scss';

const VirtualList: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
    [...new Array(600000).keys()] as number[],
    {
      overscan: 30,
      itemHeight: 50
    } as OptionType
  );
  return (
    <>
      <div className={styles.mainWrapper}>
        <h1>High-performance scrolling list.</h1>
        <div className={styles.functionalWrapper}>
          <Input
            style={{ width: '120px' }}
            type='number'
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(Number(event.target.value))}
          />
          <Button
            style={{ marginLeft: '5px' }}
            type='primary'
            onClick={() => {
              scrollTo(Number(value));
            }}
          >
            scroll to
          </Button>
        </div>
        <div {...containerProps} className={styles.listWrapper}>
          <div {...wrapperProps}>
            {list.map(ele => (
              <div className={styles.item} key={ele.index}>
                Row: {ele.data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualList;
