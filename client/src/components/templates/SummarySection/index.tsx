import React from 'react'

type Props = {}

const SummarySection = (props: Props) => {
  return (
    <section id="About" className="h-full w-full px-5 py-40 ">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-4xl mx-auto lg:space-x-20">
        <div className="flex flex-col text-gray-500 text-left my-10 lg:my-0">
          <div className="relative">
            <img
              src="/images/circle-text-bg.png"
              className="absolute lg:scale-[2] h-48 object-contain lg:h-auto lg:right-16 lg:-ml-0 -ml-5 -mt-24 lg:-mt-0"
              alt="background-shape"
            />
          </div>
          <div className="z-10 lg:my-auto mb-5">
            <span className="text-3xl font-bold  border-b-4 pb-2 border-amber-400  text-gray-700">
              About Me
            </span>
          </div>
        </div>
        <div className="text-justify flex max-w-none lg:max-w-xl flex-grow">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </section>
  )
}

export default SummarySection
