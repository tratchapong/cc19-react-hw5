import React from 'react'

function PageNavigate() {
  return (
    <div className='flex items-baseline'>
      <button className='border bg-pink-300 px-1'>prev</button>
      <input className='w-10' />
      <button className='border bg-pink-300 px-1'>next</button>
      <p className='ms-2'>1-10 of 100</p>
    </div>
  )
}

export default PageNavigate