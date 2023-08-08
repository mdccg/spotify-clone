import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CircleArrowDownSolidIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24v182.1l71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
  </Svg>
);

export default CircleArrowDownSolidIcon;