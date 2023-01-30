import React, { FC } from 'react'

const UnderConstructionPage: FC = (): JSX.Element => {
  return (
    <section className="relative flex flex-col h-full w-full z-10">
      <img
        src="/images/under-construction.png"
        className=" max-w-md w-full mx-auto"
        alt="Under Contruction"
      />
      <h1 className="text-center text-xl font-medium text-slate-600">
        This page is currently under construction.
      </h1>
      <span className="text-lg font-medium text-slate-500">
        Please comeback soon!
      </span>
    </section>
  )
}

export default UnderConstructionPage
