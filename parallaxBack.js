import { TweenLite } from 'gsap';

const onMouseMove = (e, delay, element, val) => {
  if (window.innerWidth >= 1024) {
    const win = { width: window.innerWidth, height: window.innerHeight };
    const xVal = (-val / (win.height / 2)) * e.clientY + 1;
    const yVal = (val / (win.width / 2)) * e.clientX - 1;
    TweenLite.set(element, { transformStyle: 'preserve-3d' });
    TweenLite.to(element, delay, {
      x: xVal,
      y: yVal,
      overwrite: 'all',
      perspective: 2000,
    });
  }
};

export default onMouseMove;
