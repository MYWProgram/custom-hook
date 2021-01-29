import React, { useState, useRef } from 'react';
import { useClickOutside } from 'Src/utils/CustomHooks';
import { Button, Card } from 'antd';
import styles from './index.module.scss';

const ClickOutside: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [modalShown, setModalShown] = useState<boolean>(false);

  useClickOutside(ref, () => setModalShown(false));

  return (
    <>
      <Button type='primary' onClick={() => setModalShown(true)}>
        Open Modal
      </Button>
      {modalShown && (
        <div className={styles.mask}>
          <div ref={ref}>
            <Card title='Modal' className={styles.modal}>
              <p>Click outside to close.</p>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickOutside;
