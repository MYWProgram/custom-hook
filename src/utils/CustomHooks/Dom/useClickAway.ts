import { useEffect, useRef, MouseEvent } from 'react';
import { Arbitrary } from 'Src/types/replaceAny';
import { BasicTarget, getTargetElement } from '../../Tools/getTargetElement';

// * 默认鼠标左键点击事件，可根据传入参数进行修改。
const leftClickEvent = 'click';

type EventType = MouseEvent | TouchEvent;

/**
 * ? 管理非目标元素内点击事件。
 * @param { (event) => void } onClickAway
 * @param { Target | Target[] } target
 * @param { String } eventName
 */
const useClickAway = (
  onClickAway: (event: EventType) => void,
  target: BasicTarget | BasicTarget[],
  eventName: string = leftClickEvent
) => {
  const onClickAwayRef = useRef(onClickAway);
  onClickAwayRef.current = onClickAway;

  useEffect(() => {
    // ? 设置触发函数。
    const handler = (event: Arbitrary) => {
      const targets = Array.isArray(target) ? target : [target];
      if (
        targets.some(targetItem => {
          const targetElement = getTargetElement(targetItem) as HTMLElement;
          return !targetElement || targetElement?.contains(event.target);
        })
      ) {
        return;
      }
      onClickAwayRef.current(event);
    };
    document.addEventListener(eventName, handler);

    return () => {
      document.removeEventListener(eventName, handler);
    };
  }, [target, eventName]);
};

export default useClickAway;
