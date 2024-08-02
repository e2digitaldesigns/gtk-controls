import React from "react";
import * as Icons from "react-feather";

export type IconProps = keyof typeof Icons;

interface IntIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  name: IconProps | string;
  size?: string | number;
}

export const Icon: React.FC<IntIconProps> = ({
  color = "currentColor",
  name = "Activity",
  size = 24,
  ...rest
}) => {
  const IconComponent = Icons[name as IconProps];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist in react-feather`);
    return null;
  }

  return <IconComponent color={color} size={size} {...rest} />;
};
