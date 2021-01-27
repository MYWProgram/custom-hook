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
    path: '/DraggableElement/DragDrop',
    component: lazy(() => import(/* webpackChunkName: "useDragDrop" */ 'Pages/DraggableElement'))
  },
  {
    path: '/ResizeObserver/WindowResize',
    component: lazy(() => import(/* webpackChunkName: "useSize" */ 'Pages/ResizeObserver'))
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
    path: '/State/TodoHistoryManager',
    component: lazy(() => import(/* webpackChunkName: "useHistory" */ 'Pages/State'))
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
    path: '/Throttle/ThrottledInputValue',
    component: lazy(() => import(/* webpackChunkName: "useThrottle" */ 'Pages/Throttle/ThrottledInputValue'))
  },
  {
    path: '/Throttle/ThrottledFunction',
    component: lazy(() => import(/* webpackChunkName: "useThrottleFn" */ 'Pages/Throttle/ThrottleFunction'))
  }
];
