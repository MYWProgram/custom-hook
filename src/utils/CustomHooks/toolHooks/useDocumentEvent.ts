import { useRef, useLayoutEffect } from 'react';
import { Arbitrary } from 'Src/types/replaceAny';

type EventNames = keyof DocumentEventMap;
type DocumentEventHandler<K extends EventNames> = (event: DocumentEventMap[K]) => Arbitrary;

/**
 * ? 组件注册时添加监听器，组件移除时销毁监听器。
 * @param { String } eventName 事件名称。
 * @param { Function } fn 用于注册的函数。
 * @param { boolean | AddEventListenerOptions } options eventListener 的第三个参数。
 */
const useDocumentEvent = <K extends EventNames>(
  eventName: K,
  fn: DocumentEventHandler<K>,
  options?: boolean | AddEventListenerOptions
) => {
  const handler = useRef(fn);
  useLayoutEffect(() => {
    handler.current = fn;
  }, [fn]);
  useLayoutEffect(() => {
    const trigger: DocumentEventHandler<K> = event => handler.current(event);
    document.addEventListener(eventName, trigger, options);
    return () => document.removeEventListener(eventName, trigger, options);
  }, [eventName, options]);
};

export default useDocumentEvent;
