import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill }: { fill: string; } = props.style as any;

  return (
    <Svg {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="m10.5 12.5 4 4.107 4-4.107M10.5 8.5l-4-4-4 3.997M6.5 4.5v12M14.5 4.5v12" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
