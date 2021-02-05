import React, { useState } from 'react';
import { useKeyPress } from 'Utils/CustomHooks';
import { CheckOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const KeyPress: React.FC = () => {
  const [num, setNum] = useState<string>();
  const [letter, setLetter] = useState<string>();
  const [state, setState] = useState<number>();

  useKeyPress(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], event => {
    setNum(event.key);
  });
  useKeyPress([65, 83, 68, 70], event => {
    setLetter(event.key);
  });
  useKeyPress(['shift.c'], () => {
    setState(1);
  });
  useKeyPress('ctrl.alt.c', () => {
    setState(2);
  });

  return (
    <div className={styles.KeyPressWrapper}>
      <h1>Try pressing the following keyboard:</h1>
      <p>
        1. Press key 0-9: <span>{num}</span>
      </p>
      <p>
        2. Press key a, s, d, f: <span>{letter}</span>
      </p>
      <p>3. Press key shift + c: {state === 1 && <CheckOutlined />}</p>
      <p>4. Press key ctrl + alt + c: {state === 2 && <CheckOutlined />}</p>
    </div>
  );
};

export default KeyPress;
