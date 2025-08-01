import { SVGProps } from 'react';

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#ECECEA"
      fillRule="evenodd"
      d="M18.094.516C16.74.204 14.515 0 12 0S7.26.204 5.906.516a6.988 6.988 0 0 0-5.39 5.39C.204 7.26 0 9.485 0 12s.204 4.74.516 6.094a6.988 6.988 0 0 0 5.39 5.39C7.26 23.796 9.485 24 12 24s4.74-.204 6.094-.516a6.988 6.988 0 0 0 5.39-5.39C23.796 16.74 24 14.515 24 12s-.204-4.74-.516-6.094a6.988 6.988 0 0 0-5.39-5.39Z"
      clipRule="evenodd"
    />
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.094.516C16.74.204 14.515 0 12 0S7.26.204 5.906.516a6.988 6.988 0 0 0-5.39 5.39C.204 7.26 0 9.485 0 12s.204 4.74.516 6.094a6.988 6.988 0 0 0 5.39 5.39C7.26 23.796 9.485 24 12 24s4.74-.204 6.094-.516a6.988 6.988 0 0 0 5.39-5.39C23.796 16.74 24 14.515 24 12s-.204-4.74-.516-6.094a6.988 6.988 0 0 0-5.39-5.39Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#101820"
        fillRule="evenodd"
        d="M8.083 8.268a1.25 1.25 0 1 1 0-2.501 1.25 1.25 0 0 1 0 2.501Zm-1.08 7.887H9.16V9.217H7.004v6.938Zm8.078 0h2.155v-3.806c0-1.868-.403-3.305-2.587-3.305-1.049 0-1.752.575-2.04 1.12h-.029v-.947h-2.068v6.938h2.154v-3.433c0-.904.172-1.781 1.295-1.781 1.105 0 1.12 1.035 1.12 1.84v3.374Z"
        clipRule="evenodd"
        opacity={0.4}
      />
    </g>
  </svg>
);
export { LinkedInIcon };
