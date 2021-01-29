/* eslint-disable no-underscore-dangle */
import { useState, useCallback, useRef } from 'react';
import { AList } from 'Src/types/replaceAny';

interface IData<T> {
  present?: T;
  past: T[];
  future: T[];
}

// ? 获取从状态集中取值时对应下标的方法。
const dumpIndex = <T>(step: number, arr: T[]) => {
  let index =
    step > 0
      ? // * 前进。
        step - 1
      : // * 后退。
        arr.length + step;
  if (index >= arr.length - 1) {
    index = arr.length - 1;
  }
  if (index < 0) {
    index = 0;
  }
  return index;
};

// ? 从某个状态集中取出对应值的方法。
const split = <T>(step: number, targetArr: T[]) => {
  const index = dumpIndex(step, targetArr);
  return {
    _current: targetArr[index],
    _before: targetArr.slice(0, index),
    _after: targetArr.slice(index + 1)
  };
};

/**
 * ? 管理状态集。
 * @param { Array } initialValue 初始状态集，对应当前状态集。
 * @return { Object }
 */
const useHistory = <T>(initialValue?: T) => {
  // * 定义三个时间状态集数组，用来管理回退、当前、前进的状态。
  const [history, setHistory] = useState<IData<T | undefined>>({
    present: initialValue,
    past: [],
    future: []
  });
  const { present, past, future } = history;
  const initialValueRef = useRef(initialValue);
  const reset = useCallback(
    (...params: AList) => {
      const _initial = params.length > 0 ? params[0] : initialValueRef.current;
      initialValueRef.current = _initial;
      setHistory({
        present: _initial,
        future: [],
        past: []
      });
    },
    [setHistory]
  );
  // ? 更新当前状态集的方法。
  const updateValue = useCallback(
    (val: T) => {
      // * 更新当前状态，之前存储的当前状态就变成了回退状态；而前进状态集也就清空了。
      setHistory({
        present: val,
        future: [],
        past: [...past, present]
      });
    },
    [past, present, setHistory]
  );
  // ? 更新前进状态集的方法。
  const _forward = useCallback(
    (step = 1) => {
      if (future.length === 0) {
        return;
      }
      const { _before, _current, _after } = split(step, future);
      // * 从状态集取值的方法（split）由 index 来确定时效，返回三个按时间序列化的值；并依次存入对应状态集中。
      setHistory({
        // * 此时的回退状态应包含之前所有的回退，之前所有的当前，以及 split 方法解析的 “之前” 状态。
        past: [...past, present, ..._before],
        present: _current,
        future: _after
      });
    },
    [present, past, future, setHistory]
  );
  // ? 更新回退状态集的方法。
  const _backward = useCallback(
    (step = -1) => {
      if (past.length === 0) {
        return;
      }
      const { _before, _current, _after } = split(step, past);
      setHistory({
        past: _before,
        present: _current,
        future: [..._after, present, ...future]
      });
    },
    [present, past, future, setHistory]
  );
  // ? 根据 step 来确定动作（前进、后退）的方法，用于直接步骤操作历史记录。
  const go = useCallback(
    (step: number) => {
      const stepNum = typeof step === 'number' ? step : Number(step);
      if (stepNum === 0) {
        return;
      }
      if (stepNum > 0) {
        // eslint-disable-next-line consistent-return
        return _forward(stepNum);
      }
      _backward(stepNum);
    },
    [_backward, _forward]
  );

  return {
    value: present,
    setValue: updateValue,
    // * 可回退/可前进的历史长度。
    backLength: past.length,
    forwardLength: future.length,
    go,
    back: useCallback(() => {
      go(-1);
    }, [go]),
    forward: useCallback(() => {
      go(1);
    }, [go]),
    reset
  };
};

export default useHistory;
