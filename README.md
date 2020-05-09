# useClickOutside
点击空白响应事件的hooks

```shell script
npm i @kne/use-click-outside
```

# 使用说明

```jsx
import useClickOutSide from '@kne/use-click-outside';

const SomeComponent = ()=>{
  const ref = useClickOutSide(()=>{
    console.log('我的外部被点击了');
  });
  return (
    <span ref={ref}>我是内部元素</>
  );
};
```

上述示例，点击span之外的区域可以触发事件，点击span内部区域不能触发事件
