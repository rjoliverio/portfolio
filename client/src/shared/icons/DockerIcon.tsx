import React from 'react'

type Props = {
  className?: string
  isActive?: boolean
}

export const DockerIcon: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Docker"
      role="img"
      width="256px"
      height="256px"
      className={className}
      viewBox="0 0 420 420"
    >
      <rect width="420" height="420" rx="15%" fill="none" />
      <path
        stroke="#FFFFFF"
        strokeWidth="38"
        d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
      />
      <path
        fill="#FFFFFF"
        d="m472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"
      />
    </svg>
  )
}
