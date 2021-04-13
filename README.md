# custom-hook

记录`react`开发过程中用于提升工作效率的自定义`hooks`，同时也是配合`ts`使用`react`的摸索实践

不定期解决在使用中遇到的 Bug，同时更新模板仓库及源仓库

## 模板

[react-ts-template](https://github.com/MYWProgram/react-ts-template)

## Hooks 简介

### BindElement

- useCheckboxBind: 让 checkbox 具有双向绑定能力
- useInputBind: 让输入框具有双向绑定能力
- useTextSelection: 让用户选中文字及相关特性实时显示

### Debounce&Throttle

- useDebounce: 让值具有防抖能力
- useDebounceFn: 让函数具有防抖能力
- useThrottle: 让值具有节流能力
- useDebounce: 让函数具有节流能力

### Dom

- useClickAway: 监听非目标 Dom 内的点击
- useClickOutside: 监听指定 Dom 外的点击
- useKeyPress: 监听键盘按下

### Draggable

- useDrag: 在 HTML 节点上加入可拖动配置
- useDrop: 一系列判断拖动的事件

### Observer

- useSize: 监听 Dom 动态返回元素宽高

### RenderPerformance

- useVirtualList： 用于展示大量数据时，首屏加载慢、滚动卡顿的问题

### Scroll

- useScroll: 获取元素的滚动位置

### State

- useEventEmitter: 类似 Vue EventBus 功能
- useHistory: 可以存取的状态管理集

### Timer

- useInterval: 封装的一个定时器

### toolHook

- useCreation: useMemo 或 useRef 的替代品
- useDocumentEvents: 组件注册时添加监听器，组件移除时销毁监听器
- usePersistFn: 创建地址永远不会改变的函数
