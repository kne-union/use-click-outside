import {useEffect, useRef, useCallback} from 'react'

export default (onClickOutside, dom) => {
    const outerRef = useRef(null);
    const clickOutSideRef = useRef(onClickOutside);
    clickOutSideRef.current = onClickOutside;
    const outerClickHandler = useCallback((e) => {
        if (outerRef.current && !outerRef.current.contains(e.target)) {
            clickOutSideRef.current && clickOutSideRef.current(e);
        }
    }, []);

    useEffect(() => {
        const eventDom = dom || document.body;
        eventDom.addEventListener('click', outerClickHandler);
        return () => {
            eventDom.removeEventListener('click', outerClickHandler);
        }
    }, [dom, outerClickHandler]);
    return outerRef;
};
