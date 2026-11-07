import React from "react";

export function GouniCrestSvg({ className = "w-12 h-12" }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/images/logo.png"
      alt="Godfrey Okoye University Teaching Hospital Logo"
      width={64}
      height={64}
      className={`${className} object-contain rounded-full bg-white p-0.5 shadow-2xs`}
    />
  );
}

export function HopkinsShieldSvg({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Johns Hopkins Medicine Shield and Dome"
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heritage Shield */}
      <path
        d="M32 3L8 12V30C8 45.5 18.2 57.6 32 61C45.8 57.6 56 45.5 56 30V12L32 3Z"
        fill="#002D72"
        stroke="#F2A900"
        strokeWidth="2.5"
      />
      {/* Quartered Shield Lines */}
      <line x1="32" y1="7" x2="32" y2="57" stroke="#F2A900" strokeOpacity="0.45" strokeWidth="1.2" />
      <line x1="11" y1="30" x2="53" y2="30" stroke="#F2A900" strokeOpacity="0.45" strokeWidth="1.2" />
      {/* Billings Building Iconic Dome Silhouette */}
      <path
        d="M32 11V16M29.5 13.5H34.5"
        stroke="#F2A900"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21 31C21 23.8 25.9 18 32 18C38.1 18 43 23.8 43 31H21Z"
        fill="#FFFFFF"
      />
      <rect x="19" y="31" width="26" height="4" rx="1" fill="#F2A900" />
      <rect x="21" y="35" width="3" height="10" fill="#FFFFFF" />
      <rect x="27" y="35" width="3" height="10" fill="#FFFFFF" />
      <rect x="34" y="35" width="3" height="10" fill="#FFFFFF" />
      <rect x="40" y="35" width="3" height="10" fill="#FFFFFF" />
      <rect x="18" y="45" width="28" height="3.5" rx="1" fill="#FFFFFF" />
    </svg>
  );
}
