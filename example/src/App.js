import useClickoutside from '@kne/use-click-outside';
import {useState} from 'react';

const App = () => {
    const [state, setState] = useState(0);
    const ref = useClickoutside(() => {
        console.log('sssss', state);
    });
    return <div style={{
        height: '100px', background: '#ccc'
    }}>
        <button onClick={(e) => {
            e.stopPropagation();
            setState(1);
        }}>按钮
        </button>
        <div ref={ref} style={{background: 'red'}}>内部</div>
    </div>;
};

export default App;