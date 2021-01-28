import React from 'react';
import { useSize, Size } from 'Utils/CustomHooks';

const ResizeObserver: React.FC = (): JSX.Element => {
  const dom: HTMLElement | null = document.querySelector('body');
  const size: Size = useSize(dom);
  return (
    <div>
      <h1>Binding element size.</h1>
      Try to resize window. <br />
      Width: {size.width} px, Height: {size.height} px.
    </div>
  );
};

export default ResizeObserver;
