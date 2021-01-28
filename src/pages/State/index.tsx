import React, { useState } from 'react';
import { useHistory } from 'Utils/CustomHooks';
import { nanoid } from 'nanoid';
import { Input, InputNumber, Button, Space, Card, Timeline, message } from 'antd';
import styles from './index.module.scss';

const TodoHistoryManager = () => {
  const { value, setValue, backLength, forwardLength, back, forward, go } = useHistory<string[]>([
    'Get up',
    'Eat breakfast'
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  // ? 添加 TODO 的方法。
  const onAdd = () => {
    if (inputValue === '') {
      message.warn('TODO name is empty!');
      return;
    }
    setValue([...(value as string[]), inputValue]);
    setInputValue('');
  };
  const [step, setStep] = useState(0);
  // ? 通过数字前进/回退历史记录中的 TODO.
  const onGo = () => {
    go(step);
    setStep(0);
  };
  return (
    <div className={styles.todoWrapper}>
      <h1>History Manager:</h1>
      <Card title='TODO List' bordered={false}>
        {(value as string[]).map((item, index) => (
          <Timeline.Item key={nanoid()}>
            {index + 1}. {item}
          </Timeline.Item>
        ))}
      </Card>
      <Space>
        <Input value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder='Enter TODO name' />
        <Button type='primary' onClick={onAdd}>
          Add TODO
        </Button>
        <Button type='primary' disabled={backLength <= 0} onClick={back}>
          Undo
        </Button>
        <Button type='primary' disabled={forwardLength <= 0} onClick={forward}>
          Redo
        </Button>
      </Space>
      <div>
        <Space>
          <InputNumber
            defaultValue={0}
            value={step}
            min={backLength * -1}
            max={forwardLength}
            onChange={value => setStep(value as number)}
          />
          <Button type='primary' onClick={onGo}>
            Go
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default TodoHistoryManager;
