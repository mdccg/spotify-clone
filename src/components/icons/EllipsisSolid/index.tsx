import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EllipsisSolidIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 448 512" {...props}>
    <Path d="M8 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0zm160 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
  </Svg>
);

export default EllipsisSolidIcon;