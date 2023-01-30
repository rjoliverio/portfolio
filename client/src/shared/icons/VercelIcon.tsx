import React from 'react'

type Props = {
  className?: string
  isActive?: boolean
}

export const VercelIcon: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      width="256px"
      height="256px"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M12 1L24 22H0L12 1Z" fill="#ffffff" />{' '}
      </g>
    </svg>
  )
}
