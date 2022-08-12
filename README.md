
# use-click-outside


### 描述

用于捕获dom以外的元素点击事件


### 安装

```shell
npm i --save @kne/use-click-outside
```


### 概述

实现了一个点击容器之外触发回调函数的hooks


### 示例


#### 示例样式

```scss
.container{
  width: 200px;
  height: 200px;
  border: solid 1px #ccc;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### 示例代码

- 基本示例
- 点击容器外部就弹窗提示
- _useClickOutside(@kne/use-click-outside),_message(antd/lib/message)

```jsx
const {default: useClickOutside} = _useClickOutside;
const {default: message} = _message;

const BaseExample = () => {
    const ref = useClickOutside(() => {
        message.success('点击了容器外部');
    });
    return <div ref={ref} className="container">
        这是组件内部，点击外部试试
    </div>;
};

render(<BaseExample/>);

```


### API

const ref = useClickOutside(callback, dom);

注意：返回的ref必须传给一个dom的ref

| 属性名      | 说明                  | 类型       | 默认值           |
|----------|---------------------|----------|---------------|
| callback | 模拟的失去焦点事件触发后执行的回调   | function | -             |
| dom      | 可以触发点击的外部区域，默认为body | dom      | document.body |


