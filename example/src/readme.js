import * as component_30 from '@kne/use-click-outside';
import * as component_31 from 'antd/lib/message';
const readmeConfig = {
    name: `@kne/use-click-outside`,
    description: `用于捕获dom以外的元素点击事件`,
    summary: `<p>实现了一个点击容器之外触发回调函数的hooks</p>`,
    api: `<p>const ref = useClickOutside(callback, dom);</p>
<p>注意：返回的ref必须传给一个dom的ref</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>callback</td>
<td>模拟的失去焦点事件触发后执行的回调</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>dom</td>
<td>可以触发点击的外部区域，默认为body</td>
<td>dom</td>
<td>document.body</td>
</tr>
</tbody>
</table>`,
    example: {
        isFull: false,
        className: `use_click_outside_4ca77`,
        style: `.use_click_outside_4ca77 .container {
  width: 200px;
  height: 200px;
  border: solid 1px #ccc;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center; }
`,
        list: [{
    title: `基本示例`,
    description: `点击容器外部就弹窗提示`,
    code: `const {default: useClickOutside} = _useClickOutside;
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

`,
    scope: [{
    name: "_useClickOutside",
    packageName: "@kne/use-click-outside",
    component: component_30
},{
    name: "_message",
    packageName: "antd/lib/message",
    component: component_31
}]
}]
    }
};
export default readmeConfig;
