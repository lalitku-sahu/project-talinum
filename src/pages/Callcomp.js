import React from 'react'

const Callcomp = () => {
  return (
    <div className=' flex flex-col  p-4 lg:flex-row '>
        
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl lg:pl-15 lg:mt-20 tracking-tight font-bold text-teal-500 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">The home of</span>
            </h1>
            <h1 className="text-4xl lg:pl-15 tracking-tight font-bold text-teal-500 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">fresh products</span>
            </h1>
            <p className="lg:pl-15 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:pl-15">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 md:py-4 md:text-lg md:px-10"> Learn about us </a>
            </div>
            </div>
          </div>
        </div>
        <div className='flex lg:min-h-auto pr-20 lg:min-w-max lg:mt-10 mt-12 justify-center'>
          <img src='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3ccac76b5c6_Group%2033.png'  />
        </div>
        
    </div>
  )
}

export default Callcomp