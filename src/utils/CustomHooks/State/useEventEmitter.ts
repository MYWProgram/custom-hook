import { useRef, useEffect } from 'react';

type Subscription<T> = (val: T) => void;

class Emitter<T> {
  private subscriptions = new Set<Subscription<T>>();

  // ? 发送事件通知。
  emit = (val: T) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const subscription of this.subscriptions) {
      subscription(val);
    }
  };

  // ? 订阅事件。
  useSubscription = (callback: Subscription<T>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const callbackRef = useRef<Subscription<T>>();
    callbackRef.current = callback;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const subscription = (val: T) => {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      };
      this.subscriptions.add(subscription);
      return () => {
        this.subscriptions.delete(subscription);
      };
    }, []);
  };
}

const useEventEmitter = <T = void>() => {
  const ref = useRef<Emitter<T>>();

  if (!ref.current) {
    ref.current = new Emitter();
  }

  return ref.current;
};

export { Emitter, useEventEmitter };
