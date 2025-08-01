import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12.548 19v-6.377h2.072l.31-2.496h-2.382v-1.59c0-.721.193-1.212 1.19-1.212H15V5.098c-.22-.03-.974-.098-1.85-.098-1.832 0-3.086 1.16-3.086 3.29v1.837H8v2.496h2.064V19h2.484Z"
        opacity={0.4}
      />
    </g>
  </svg>
);
export { FacebookIcon };
