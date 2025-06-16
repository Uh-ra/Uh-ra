import React from "react";
import { Svg, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Glasses = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.75 9h4.808v2.885a.961.961 0 0 1-.962.961H1.712a.962.962 0 0 1-.962-.961V9Zm7.692 0h4.808v2.885a.962.962 0 0 1-.961.961H9.404a.962.962 0 0 1-.962-.961V9Z"
        clipPath="url(#a)"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.615 1a.75.75 0 0 1 .75-.75h.962A2.673 2.673 0 0 1 14 2.923v8.962a1.712 1.712 0 0 1-1.711 1.711H9.404a1.712 1.712 0 0 1-1.712-1.711V9.75H6.308v2.135a1.712 1.712 0 0 1-1.712 1.711H1.712A1.712 1.712 0 0 1 0 11.885V2.923A2.673 2.673 0 0 1 2.673.25h.962a.75.75 0 0 1 0 1.5h-.962A1.173 1.173 0 0 0 1.5 2.923V8.25h11V2.923a1.173 1.173 0 0 0-1.173-1.173h-.962a.75.75 0 0 1-.75-.75ZM1.5 9.75v2.135a.212.212 0 0 0 .212.211h2.884a.211.211 0 0 0 .212-.211V9.75H1.5Zm7.692 0v2.135a.212.212 0 0 0 .212.211h2.885a.212.212 0 0 0 .211-.211V9.75H9.192Z"
        clipPath="url(#a)"
      />
    </Svg>
  );
};
