// TickSvg.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TickSvg = ({ width = 24, height = 24 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M8.5 12L11 14.5L16 9.5" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);

export default TickSvg;
