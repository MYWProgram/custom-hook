import { lazy } from 'react';

export const routes = [
  {
    path: '/BindElement/InputBind',
    component: lazy(() => import(/* webpackChunkName: "useInputBind" */ 'Pages/BindElement/InputBind'))
  },
  {
    path: '/BindElement/CheckboxBind',
    component: lazy(() => import(/* webpackChunkName: "useCheckboxBind" */ 'Pages/BindElement/CheckboxBind'))
  },
  {
    path: '/BindElement/TextSelectionBind',
    component: lazy(() => import(/* webpackChunkName: "useTextSelection" */ 'Pages/BindElement/TextSelectionBind'))
  },
  {
    path: '/Dom/ClickAway',
    component: lazy(() => import(/* webpackChunkNAme: "useClickAway" */ 'Pages/Dom/ClickAway'))
  },
  {
    path: '/Dom/ClickOutside',
    component: lazy(() => import(/* webpackChunkName: "useClickOutside" */ 'Pages/Dom/ClickOutside'))
  },
  {
    path: '/Debounce/DebouncedInputValue',
    component: lazy(() => import(/* webpackChunkName: "useDebounce" */ 'Pages/Debounce/DebouncedInputValue'))
  },
  {
    path: '/Debounce/DebouncedFunction',
    component: lazy(() => import(/* webpackChunkName: "useDebounceFn" */ 'Pages/Debounce/DebouncedFunction'))
  },
  {
    path: '/DraggableElement/DragDrop',
    component: lazy(() => import(/* webpackChunkName: "useDragDrop" */ 'Pages/DraggableElement'))
  },
  {
    path: '/ResizeObserver/WindowResize',
    component: lazy(() => import(/* webpackChunkName: "useSize" */ 'Pages/ResizeObserver'))
  },
  {
    path: '/State/TodoHistoryManager',
    component: lazy(() => import(/* webpackChunkName: "useHistory" */ 'Pages/State'))
  },
  {
    path: '/ScrollOptions/GetEleScrollOptions',
    component: lazy(() => import(/* webpackChunkName: "useScroll" */ 'Pages/ScrollOptions/GetEleScrollOptions'))
  },
  {
    path: '/ScrollOptions/VirtualList',
    component: lazy(() => import(/* webpackChunkName: useVirtualList */ 'Pages/ScrollOptions/VirtualList'))
  },
  {
    path: '/Timer/Interval',
    component: lazy(() => import(/* webpackChunkName: "useInterval" */ 'Pages/Timer'))
  },
  {
    path: '/Throttle/ThrottledInputValue',
    component: lazy(() => import(/* webpackChunkName: "useThrottle" */ 'Pages/Throttle/ThrottledInputValue'))
  },
  {
    path: '/Throttle/ThrottledFunction',
    component: lazy(() => import(/* webpackChunkName: "useThrottleFn" */ 'Pages/Throttle/ThrottleFunction'))
  }
];
