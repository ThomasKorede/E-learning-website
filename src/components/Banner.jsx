import React from 'react'

const Banner = () => {
  return (
    <div className='bg-blue-400 flex justify-center'>
      <div className='pt-20 pb-20'>
        <h1 className='text-2xl text-white'> <span className='text-yellow-400'>Studying </span>online is now <br />much easier</h1>
        <p className='text-light text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quasi sapiente rerum corrupti.</p>
        <div className='mt-5'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "> Button </button>
          <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full ml-5'>Button</button>
        </div>
      </div>
      <div className='mt-10 px-30'>
        <img src="/src/assets/lady-waving.jpg" alt="" />
      </div>
      </div>
  )
}

export default Banner