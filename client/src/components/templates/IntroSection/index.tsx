import React from 'react'

type Props = {}

const IntroSection = (props: Props) => {
  return (
    <section className="h-full w-full  bg-gray-50">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
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
        <div className="relative flex-1 h-[680px]">
          <img
            src="/images/background-shape.png"
            className="absolute h-[530px] object-cover inset-0"
            alt="background-shape"
          />
          <img
            src="/images/standing-portrait.png"
            className="absolute w-full inset-0 h-full object-contain object-center mx-auto "
            alt="background-shape"
          />
        </div>
      </div>
    </section>
  )
}

export default IntroSection
