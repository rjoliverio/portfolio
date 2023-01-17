import React from 'react'

type Props = {}

const IntroSection = (props: Props) => {
  return (
    <section className="h-full w-full bg-gray-50 px-5 py-40 lg:py-0">
      <div className="flex justify-center lg:justify-between items-center max-w-4xl mx-auto">
        <div className="flex flex-col text-gray-500 text-left">
          <span className="font-semibold text-sm ">HELLO</span>
          <span className="text-5xl font-bold my-3 text-gray-700">
            I'm Rogelio John
          </span>
          <span className="font-medium text-lg">
            IT Graduate & Junior Web Developer
          </span>
          <div>
            <button className="rounded-md shadow-md border-2 border-amber-400 hover:bg-white hover:text-amber-400 font-semibold text-xs my-10 p-3 bg-amber-400 text-white">
              GET TO KNOW ME
            </button>
          </div>
        </div>
        <div className="relative hidden lg:flex-1 lg:flex h-[680px] lg:flex-shrink-0">
          <img
            src="/images/background-shape.png"
            className="absolute h-[530px] flex-shrink-0 flex-grow-0 object-contain inset-0 hidden lg:flex "
            alt="background-shape"
          />
          <img
            src="/images/standing-portrait.png"
            className="absolute w-full inset-0 h-full flex-shrink-0 flex-grow-0 object-contain hidden lg:flex  object-center mx-auto "
            alt="background-shape"
          />
        </div>
      </div>
    </section>
  )
}

export default IntroSection
