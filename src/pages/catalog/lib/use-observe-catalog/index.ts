import React from 'react';

export const useObserveCatalog = (bg: Function) => {
  const area = React.useRef<HTMLDivElement>(null);
  const isReady = React.useRef(false);
  const endOfScroll = React.useRef<HTMLDivElement>(null);
  const options: IntersectionObserverInit = {
    root: area.current,
    threshold: 0.8,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    let entry = entries[0];
    if (entry.isIntersecting && isReady.current) {
      bg();
    }
    isReady.current = true;
  };
  let observer = new IntersectionObserver(callback, options);

  const connect = () => {
    if (endOfScroll.current) observer.observe(endOfScroll.current);
  };

  const disconnect = () => {
    observer.disconnect();
  };
  return { area, endOfScroll, connect, disconnect };
};
