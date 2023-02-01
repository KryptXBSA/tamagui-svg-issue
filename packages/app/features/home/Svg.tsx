
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#D9D9D9"
      d="M.502 0h26v26h-26z"
    />
    <Path
      d="m23.703 6.951-9.975-5.868-9.976 5.868v11.736l9.976 5.868 9.975-5.867V6.95Z"
      stroke="#FEB95A"
      strokeWidth={1.95}
      strokeLinejoin="round"
    />
    <Path
      d="M9.033 13.993v2.347m4.695-4.694v4.694-4.694Zm4.694-2.347v7.041V9.3Z"
      stroke="#FEB95A"
      strokeWidth={1.95}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
