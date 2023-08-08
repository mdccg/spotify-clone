import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SquaresRegularIcon = (props: SvgProps) => {
  const { fill }: { fill: string; } = props.style as any;

  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M48 48h64v64H48zM144 48h64v64h-64zM48 144h64v64H48zM144 144h64v64h-64z"
      />
    </Svg>
  );
}

export default SquaresRegularIcon;