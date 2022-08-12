const ref = useClickOutside(callback, dom);

注意：返回的ref必须传给一个dom的ref

| 属性名      | 说明                  | 类型       | 默认值           |
|----------|---------------------|----------|---------------|
| callback | 模拟的失去焦点事件触发后执行的回调   | function | -             |
| dom      | 可以触发点击的外部区域，默认为body | dom      | document.body |

