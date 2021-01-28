import useClickAway from './Dom/useClickAway';
import useCheckboxBind from './Bind/useCheckboxBind';
import useDrag from './Draggable/useDrag';
import useDrop, { DropAreaOptions } from './Draggable/useDrop';
import useDebounce from './Debounce&Throttle/useDebounce';
import useDebounceFn from './Debounce&Throttle/useDebounceFn';
import useHistory from './State/useHistory';
import useInterval from './Timer/useInterval';
import useInputBind, { Result } from './Bind/useInputBind';
import useSize, { Size } from './Observer/useSize';
import useScroll from './Scroll/useScroll';
import useThrottle from './Debounce&Throttle/useThrottle';
import useThrottleFn from './Debounce&Throttle/useThrottleFn';
import useTextSelection, { IState } from './Bind/useTextSelection';
import useVirtualList, { OptionType } from './RenderPerformance/useVirtualList';

export type { DropAreaOptions, IState, OptionType, Result, Size };

export {
  useClickAway,
  useCheckboxBind,
  useDrag,
  useDrop,
  useDebounce,
  useDebounceFn,
  useHistory,
  useInterval,
  useInputBind,
  useSize,
  useScroll,
  useThrottle,
  useThrottleFn,
  useTextSelection,
  useVirtualList
};
