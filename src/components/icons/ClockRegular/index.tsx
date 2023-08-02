import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClockRegularIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
  </Svg>
);

export default ClockRegularIcon;