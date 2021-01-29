import { RefObject } from 'react';
import { useDocumentEvent } from 'Utils/CustomHooks';

/**
 * ? 管理目标元素外点击事件。
 * @param { RefObject } ref 目标元素 ref.
 * @param { Function } callback 点击后触发的函数。
 */
const useClickOutside = (ref: RefObject<HTMLElement>, callback: (event: MouseEvent | TouchEvent) => void) => {
  const testAndTrigger = (event: MouseEvent | TouchEvent) => {
    if (!ref.current?.contains(event.target as Element)) {
      callback(event);
    }
  };

  useDocumentEvent('mouseup', testAndTrigger, true);
  useDocumentEvent('touchstart', testAndTrigger, true);
};

export default useClickOutside;
