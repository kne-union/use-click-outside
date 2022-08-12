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
