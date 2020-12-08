import React, { forwardRef } from 'react';

export const EyeOffIcon = forwardRef((props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.875 18.825c-.618.117-1.246.175-1.875.175-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 014.243 4.243M9.878 9.879l4.243 4.243M9.878 9.879l4.242 4.241m.001.002l3.291 3.29M9.88 9.88L6.59 6.59m0 0L3 3m3.59 3.59A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411M6.59 6.59l10.821 10.821m0 0L21 21"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
EyeOffIcon.displayName = 'EyeOffIcon';
