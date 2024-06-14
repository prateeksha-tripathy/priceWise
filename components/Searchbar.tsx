"use client"

import { scraoeAndStoreProduct } from '@/lib/actions'
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if(
      hostname.includes('amazon.com') || 
      hostname.includes('amazon.') || 
      hostname.endsWith('amazon')
    ){
      return true
    }
  } catch (error) {
    return false
  }
  return false
}
const Searchbar = () => {

  const [searchPrompt , setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async(event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidLink = isValidAmazonProductURL(searchPrompt)
    // alert(isValidLink ? 'Valid link' : 'Invalid link')
    if(!isValidLink){
      return alert('Please enter a valid Amazon Product Link')
    }
    try {
      setIsLoading(true)
      //Scrape the product page
      const product = await scraoeAndStoreProduct(searchPrompt)
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
   <form
    className='flex flex-wrap mt-10 gap-4 '
    onSubmit={handleSubmit}
   >
    <input
      type='text'
      value={searchPrompt}
      onChange={(e) => setSearchPrompt(e.target.value)}
      placeholder='Enter your product link'
      className='searchbar-input'

    
    />

    <button type='submit' className='searchbar-btn' disabled={searchPrompt === ''}>
      {isLoading ? 'Searching ... ' : 'Search'}
    </button>

   </form>
  )
}

export default Searchbar
