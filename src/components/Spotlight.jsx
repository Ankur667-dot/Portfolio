import React from "react";
import { twMerge } from "tailwind-merge";

export const Spotlight = ({
  className,
  fill,
  x = 82,    
  y = 45,    
  rx = 950,   
  ry = 450,   
  rotate = -35,  
  opacity = 0.2
}) => {
  const vbW = 3000, vbH = 2000;
  const cx = (x / 100) * vbW;
  const cy = (y / 100) * vbH;

  return (
    <svg
      className={twMerge(
        "pointer-events-none absolute inset-0 z-[10] opacity-100",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbW} ${vbH}`}
      fill="none"
    >
      <g filter="url(#spot_blur)">
        <ellipse
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          transform={`rotate(${rotate} ${cx} ${cy})`}
          fill={fill || "white"}
          fillOpacity={opacity}
        />
      </g>
      <defs>
        <filter
          id="spot_blur"
          x="0"
          y="0"
          width={vbW}
          height={vbH}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="blur" />
        </filter>
      </defs>
    </svg>
  );
};
