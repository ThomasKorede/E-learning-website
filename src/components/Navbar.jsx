import React from 'react'

const Navbar = () => {
  return (
     <div className='bg-blue-400'>
      <div className='flex justify-between'> 
          <img src="src/assets/logo.png" alt="" className='mt-5'/>
          <ul className='flex justify-center mt-15 gap-20'>
            <li className='font-semibold text-2xl text-white hover:font-bold '>Home</li>
            <li className='font-semibold text-2xl text-white hover:font-bold'>About</li>
            <li className='font-semibold text-2xl text-white hover:font-bold'>Contact Us</li>
            <li className='font-semibold text-2xl text-white hover:font-bold'>Contact Us</li>
            <li className='font-semibold text-2xl text-white hover:font-bold'>Contact Us</li>
            <a className='g-blue-500 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full pb-5'>Sign up</a>
         <a className='g-blue-500 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full pb-5'>Sign up</a>
          </ul>
      </div>
      
    </div>
  )
}

export default Navbar