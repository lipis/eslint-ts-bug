import React from "react";

const Warning = ({ size, color, ...props }: any): JSX.Element => (
  <svg width={size} height={size} fill="none" viewBox="0 0 18 18" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.971 17H1L8.98549 1.02905L16.971 17Z"
      stroke={color}
      strokeWidth="1.42274"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.98566 7.56274V11.9175"
      stroke={color}
      strokeWidth="1.42274"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.98524 13.3705C8.5833 13.3705 8.25989 13.6966 8.25989 14.0959C8.25989 14.4978 8.5833 14.8226 8.98524 14.8226C9.38584 14.8226 9.71058 14.4978 9.71058 14.0959C9.71058 13.6966 9.38584 13.3705 8.98524 13.3705Z"
      fill={color}
    />
  </svg>
);

export default Warning;
