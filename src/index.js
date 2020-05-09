/**
 * @name: use-click-outside ;
 * @author: admin ;
 * @description: 点击空白响应事件的hooks ;
 * */

import {useEffect, useRef} from 'react'

export default (onClickOutside, dom) => {
  const outerRef = useRef(null);

  const outerClickHandler = (e) => {
    if (!outerRef.current.contains(e.target)) {
      onClickOutside && onClickOutside(e);
    }
  };

  useEffect(() => {
    const eventDom = dom || document.body;
    eventDom.addEventListener('click', outerClickHandler);
    return () => {
      eventDom.removeEventListener('click', outerClickHandler);
    }
  }, [dom]);
  return outerRef;
};