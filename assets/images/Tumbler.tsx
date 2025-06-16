import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Tumbler = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.722.067a.75.75 0 0 1 .487.942l-.632 1.986a.75.75 0 0 1-1.43-.455L8.78.554a.75.75 0 0 1 .942-.487Z"
      />
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11 1.712a4.173 4.173 0 0 0-4.172 4.173v.489c0 .017 0 .035.002.053l.422 5.916a1.75 1.75 0 0 0 1.746 1.626h4.005c.918 0 1.68-.71 1.746-1.626l.422-5.916a.733.733 0 0 0 .002-.053v-.49a4.173 4.173 0 0 0-4.172-4.172Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.221 5.624a.75.75 0 1 0 0 1.5h9.78a.75.75 0 0 0 0-1.5H2.22Zm2.393 3.194h4.993l-.245 3.418a.25.25 0 0 1-.249.233H5.108a.25.25 0 0 1-.25-.232l-.244-3.419Z"
      />
    </Svg>
  );
};
