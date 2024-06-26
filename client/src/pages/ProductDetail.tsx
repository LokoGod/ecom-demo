import React from 'react'
import image  from '../assets/Rectangle 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const ProductDetail = () => {
  return (
    <div className='m-12'>
      <div className='grid grid-cols-12  gap-8'>
        <div className=' grid grid-rows-6 grid-flow-col justify-end rounded-sm '>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
        <img src={image} alt='img' className='w-20 rounded-sm'/>
       
        </div>

        <div className=' col-span-5 '>
        <img src={image} alt='img' className='w-110 h-130'/>
        </div>

        <div className=' col-span-6  m-10'>

          <p className='text-3xl font-poppins font-semibold'>Double Breasted Full Suit</p>
          <div className=' flex gap-10  mt-3'>
              <p className='font-medium text-xl'>LKR 8500.00</p>
              <p className=' font-light text-lg rounded-sm bg-gray-300 text-black px-2 py-0.5'>Free Shipping</p>
              
          </div>

          <div className=' flex gap-1 mt-3 text-gray-500 '>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>

          <div>
            <p className='mt-14 text-xl'>CLASSICS:Kaikoura White (White Sole)</p>
          </div>
          <div className='flex mt-5 gap-5'>
        {/* Outer circle with border */}
        <div className='border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center  hover:visible'>
          {/* Inner filled circle */}
          <div className='bg-slate-600 w-12 h-12 rounded-full ' />
        </div>
        <div className='border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center'>
          {/* Inner filled circle */}
          <div className=' bg-red-800 w-12 h-12 rounded-full' />
        </div>
        <div className='border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center'>
          {/* Inner filled circle */}
          <div className=' bg-green-950 w-12 h-12 rounded-full' />
        </div>
        <div className='border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center'>
          {/* Inner filled circle */}
          <div className='bg-yellow-500 w-12 h-12 rounded-full' />
        </div>
        <div className='border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center'>
          {/* Inner filled circle */}
          <div className='bg-slate-600 w-12 h-12 rounded-full' />
        </div>
      </div>

     

      <div>
            <p className='mt-10 text-xl'>Select a size </p>
          </div>

      <div className=' flex gap-6 mt-10'>
        <div className=' border border-gray-700 rounded-sm size-14 '>
          <p className='text-center mt-3.5'>M</p>
          </div>
          <div className=' border border-gray-700 rounded-sm size-14'>
          <p className='text-center mt-3.5'>L</p>
          </div>
          <div className=' border border-gray-700 rounded-sm size-14'>
          <p className='text-center mt-3.5'>XL</p>
          </div>
          <div className=' border border-gray-700 rounded-sm size-14'>
          <p className='text-center mt-3.5'>2XL</p>
          </div>
          <div className=' border border-gray-700 rounded-sm size-14'>
          <p className='text-center mt-3.5'>3XL</p>
          </div>
      </div>

      <div className=' flex mt-10  '>
        <button className='bg-gray-600 p-4 font-poppins font-semibold w-96 rounded-sm hover:bg-slate-400 '>Add to Cart</button>
      </div>

        </div>

      </div>
    
    </div>
  )
}

export default ProductDetail