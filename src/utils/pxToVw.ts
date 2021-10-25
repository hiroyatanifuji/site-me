const pxToVw = (px: number, width = 1440) => `${(px / width) * 100}vw`;

export default pxToVw;
