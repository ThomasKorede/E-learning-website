import React from 'react'

const Card = () => {
  return (
    <div className='bg-red-300 flex justify-center pt-5 pb-5'>
     <div className='border-1 rounded-md border-solid  '>
       <div className='px-30'>
        <img src="/src/assets/Ellipse 6.png" alt=""/>
       </div>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold px-30'>Online Billing <br />Invoice & Contracts</h1>
       <p className='px-20'>Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Quae asperiores<br></br>  dolorem optio quasi necessitatibus quo repellendus <br />iste quod atque </p>
      </div>
      </div>
    </div>
    
  )
}

export default Card