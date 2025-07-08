import React from 'react'

const Banner = () => {
  return (
    <div className='bg-blue-400 pt-10 pl-10'>
      <div className=''>
        <h1 className='font-bold text-2xlxl text-xl '><span className='text-yellow-400'> Studying</span> online is now <br/>much easier </h1>
        <p className='font-medium mt-5'>stydying is now made easy with chat gpt and ai </p>
        <div className='flex pt-7'>
          <button class="bg-transparent hover:bg-blue-700 hover:font-bold text-white font-bold py-2 px-4 rounded-full border-2"> Join Us </button>
          <button class="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border-2 ">Button </button>
        </div>
        <div className='flex justify-center'>
          <img src="src/assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner