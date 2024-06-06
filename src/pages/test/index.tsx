import React, { FC } from 'react';

const useDebounce = (cb: Function, delay: number) => {
  const ref = React.useRef(Date.now());

  return (...arg: unknown[]) => {
    if (Date.now() - ref.current < delay) return;
    ref.current = Date.now();
    cb(...arg);
  };
};

export const Test: FC = () => {
  const cb = useDebounce(() => {
    console.log('click');
  }, 3000);

  return (
    <>
      <div>hello gbl;lioweu toiquet,.,lkvklfhnfg rietknf kgljdgrtv</div>
      <button onClick={cb}>click</button>
      {/* <input onChange={(e)=>e.target.value}/> */}
    </>
  );
};
