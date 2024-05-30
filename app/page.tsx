import HeroCarousel from '@/components/HeroCrousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
     <section className='px-6 md:px-20 py-24 border-2 border-red-500'>

      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='small-text'>
            Smart shopping starts here:
            <Image 
              src='/assets/icons/arrow-right.svg'
              width={17}
              height={12}
              alt='image'
            />

          </p>
          <h1 className='head-text'>
            Unleash the power of
            <span className='text-primary'> PriceWise</span>
          </h1>
          <p className='mt-6'>
            PriceWise is a smart shopping app that helps you find the best
            deals on your favourite products.
          </p>

          

        <Searchbar />
        </div>
        <HeroCarousel />

      </div>

     </section>

     <section className='trending-section'>
       <h2 className='section-text'>
        Trending
       </h2>
       <div className='flex flex-wrap gap-x-9 gap-y-16'>
        {['Apple Iphone 15','Book','Sneaker'].map((products)=>(
        <div>{products}</div>
          
        ))}

       </div>


     </section>
    </>
  )
}

export default Home