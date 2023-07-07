import React from 'react'

type Props = {
  className?: string
  isActive?: boolean
}

export const ArrowIcon: React.FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      width="21"
      className={className}
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.4991 7.70327L1.11684 0.0594564C0.814738 -0.0616937 0.468909 0.00645288 0.234383 0.226037C0.00383094 0.445622 -0.0637445 0.774999 0.0634565 1.06652L8.08904 19.523C8.21624 19.8145 8.50642 20 8.83635 20H8.8443C9.17423 19.9962 9.47235 19.8031 9.5916 19.5078L12.6285 12.0268L20.4832 9.13435C20.7932 9.02456 20.996 8.74062 20.9999 8.4226C21.0039 8.10837 20.8012 7.82442 20.4991 7.70327Z" />
    </svg>
  )
}