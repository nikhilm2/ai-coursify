import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50" style={{ backgroundImage: 'url("/hero.jpg")' ,backgroundSize: 'cover' }}>
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-10xl font-extrabold sm:text-5xl text-white">
         AI-Driven Course Gen
          <strong className="font-extrabold text-red-400 sm:block"> Increase Learning. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed text-white w-full">
          Create Your Desired Course in Tech, Coding, Finance and many more categories, with AI-driven tech.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero