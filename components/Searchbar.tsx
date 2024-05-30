"use client"

import React from 'react'

const Searchbar = () => {
  return (
   <form
    className='flex flex-wrap mt-10 gap-4 '
   >
    <input
      type='text'
      placeholder='Enter your product link'
      className='searchbar-input'

    
    />

    <button type='submit' className='searchbar-btn'>
      Search
    </button>

   </form>
  )
}

export default Searchbar
