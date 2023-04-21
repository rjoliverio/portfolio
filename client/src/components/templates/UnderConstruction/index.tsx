import Image from 'next/image'
import React, { FC } from 'react'

const UnderConstructionPage: FC = (): JSX.Element => {
  return (
    <section className="relative z-10 flex h-full w-full flex-col">
      <Image
        src="/images/under-construction.png"
        className=" mx-auto w-full max-w-md"
        alt="Under Contruction"
        fill
      />
      <h1 className="text-center text-xl font-medium text-slate-600">
        This page is currently under construction.
      </h1>
      <span className="text-lg font-medium text-slate-500">Please comeback soon!</span>
    </section>
  )
}

export default UnderConstructionPage
