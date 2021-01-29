// ? 一级菜单列表。
export const rootSubmenuKeys = [
  'BindElement',
  'Dom',
  'Debounce',
  'DraggableElement',
  'ResizeObserver',
  'State',
  'ScrollOptions',
  'Timer',
  'Throttle'
];
// ? 子级菜单列表。
export const hookSubmenuList = [
  {
    name: 'BindElement',
    children: [
      {
        name: 'InputBind',
        path: '/BindElement/InputBind'
      },
      {
        name: 'CheckboxBind',
        path: '/BindElement/CheckboxBind'
      },
      {
        name: 'TextSelectionBind',
        path: '/BindElement/TextSelectionBind'
      }
    ]
  },
  {
    name: 'Dom',
    children: [
      {
        name: 'ClickAway',
        path: '/Dom/ClickAway'
      },
      {
        name: 'ClickOutside',
        path: '/Dom/ClickOutside'
      }
    ]
  },
  {
    name: 'Debounce',
    children: [
      {
        name: 'DebouncedInputValue',
        path: '/Debounce/DebouncedInputValue'
      },
      {
        name: 'DebouncedFunction',
        path: '/Debounce/DebouncedFunction'
      }
    ]
  },
  {
    name: 'DraggableElement',
    children: [
      {
        name: 'DragDrop',
        path: '/DraggableElement/DragDrop'
      }
    ]
  },
  {
    name: 'ResizeObserver',
    children: [
      {
        name: 'WindowResize',
        path: '/ResizeObserver/WindowResize'
      }
    ]
  },
  {
    name: 'State',
    children: [
      {
        name: 'TodoHistoryManager',
        path: '/State/TodoHistoryManager'
      }
    ]
  },
  {
    name: 'ScrollOptions',
    children: [
      {
        name: 'GetEleScrollOptions',
        path: '/ScrollOptions/GetEleScrollOptions'
      },
      {
        name: 'VirtualList',
        path: '/ScrollOptions/VirtualList'
      }
    ]
  },
  {
    name: 'Timer',
    children: [
      {
        name: 'Interval',
        path: '/Timer/Interval'
      }
    ]
  },
  {
    name: 'Throttle',
    children: [
      {
        name: 'ThrottledInputValue',
        path: '/Throttle/ThrottledInputValue'
      },
      {
        name: 'ThrottledFunction',
        path: '/Throttle/ThrottledFunction'
      }
    ]
  }
];
