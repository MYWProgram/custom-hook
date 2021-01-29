/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useDrag, useDrop, DropAreaOptions } from 'Utils/CustomHooks';
import { nanoid } from 'nanoid';
import { Button, message } from 'antd';
import { Arbitrary } from 'Src/types/replaceAny';
import styles from './index.module.scss';

const DraggableElement = () => {
  const [dragList, setDragList] = useState<number[]>([1, 2, 3, 4, 5]);
  const [dropList, setDropList] = useState<number[]>([]);
  const getDragProps: ReturnType<typeof useDrag> = useDrag();
  const [props, { isHovering }]: ReturnType<typeof useDrop> = useDrop({
    // * 拖拽文字的回调。
    onText: (text, event) => {
      console.info(event);
      message.success(`'text: ${text}' dropped`);
    },
    // * 拖拽文件的回调。
    onFiles: (files, event) => {
      console.info(event, files);
      message.success(`${files.length} file dropped`);
    },
    // * 拖拽链接的回调。
    onUri: (uri, event) => {
      console.info(event);
      message.success(`uri: ${uri} dropped`);
    },
    // * 拖拽自定义 dom 节点的回调。
    onDom: (content: Arbitrary, event) => {
      console.info(content, event);
      setDropList([...dropList, content]);
      dragList.splice(
        dragList.findIndex(item => item === Number(content)),
        1
      );
    }
  } as DropAreaOptions);

  return (
    <div className={styles.dragDropArea}>
      <h1>Drag Drop functional.</h1>
      <Button
        type='primary'
        danger
        onClick={() => {
          setDragList([1, 2, 3, 4, 5]);
          setDropList([]);
        }}
      >
        clear all
      </Button>
      <div className={styles.dropWrapper} {...props}>
        <div className={styles.displayArea}>
          {dropList.map(item => (
            <div className={styles.draggableItem} key={nanoid()}>
              {item}
            </div>
          ))}
        </div>
        {isHovering ? 'release here' : 'drop here'}
      </div>
      <p>1. Drag below 5 items drop in above box.</p>
      <div className={styles.dragWrapper}>
        {dragList.map(item => (
          // eslint-disable-next-line react/jsx-key
          <div {...getDragProps(`${item}`)} className={styles.draggableItem}>
            {item}
          </div>
        ))}
      </div>
      <p>2. TEXT: Use 'ctrl' + 'c' to clone text, 'ctrl' + 'v' in the box.</p>
      <p>
        3. URI: Drag the <a href='https://www.baidu.com'>baidu</a> in the box.
      </p>
      <p>4. FILE: Frop file into the box.</p>
      All of the operations' information can be seen in console.
    </div>
  );
};

export default DraggableElement;
