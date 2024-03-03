/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clouds = ({ className }) => {
  return (
    <svg
      className={`clouds ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 93 56"
      width="93"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_b_68_1547)">
        <g className="g" filter="url(#filter1_i_68_1547)">
          <path
            className="path"
            d="M82.1004 28.5533C82.3375 27.2073 82.4611 25.8225 82.4611 24.4092C82.4611 11.1876 71.643 0.46936 58.2981 0.46936C48.3773 0.46936 39.853 6.39298 36.1317 14.865C33.117 12.2863 29.205 10.7293 24.9301 10.7293C15.3981 10.7293 7.6708 18.4703 7.6708 28.0192C7.6708 28.5509 7.69476 29.077 7.74166 29.5965C3.15691 31.8215 -7.62939e-06 36.49 -7.62939e-06 41.8891C-7.62939e-06 49.4443 6.1818 55.569 13.8074 55.569H79.0093C86.6349 55.569 92.8167 49.4443 92.8167 41.8891C92.8167 35.3868 88.2378 29.944 82.1004 28.5533Z"
            fill="url(#paint0_linear_68_1547)"
          />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="109.1"
          id="filter0_b_68_1547"
          width="146.817"
          x="-27"
          y="-26.5306"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_68_1547"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_68_1547"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="65.0997"
          id="filter1_i_68_1547"
          width="92.8167"
          x="0"
          y="0.46936"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="11" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="5" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_68_1547" />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_68_1547"
          x1="5.90353"
          x2="99.5402"
          y1="50.6494"
          y2="-19.3731"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0.58" />
        </linearGradient>
      </defs>
    </svg>
  );
};
