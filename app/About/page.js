import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div id='bg-main2'>
        <div className='flex justify-center items-center gap-96'>
            <div>
              <img src='/logo_main.png' className='w-[170px]'></img>
            </div>
            <div className='mr-[90px]'>
              <Link href="/Home" className='text-white'>Home</Link>
            </div>
            <div>
              <img src='/download (1).jfif' className='w-[85px] rounded-full'></img>
            </div>
        </div>
        <div>
            <h1 className='text-[44px] text-white font-bold text-center pt-5'>About Us</h1>
        </div>
    </div>
    <div className='w-[120px] h-[120px] bg-[#cdc0bc] rounded-full absolute mt-[-60px] ml-[700px]'>
        <IoFastFood className='ml-[25px] text-[70px] mt-[20px]' />
    </div>
    <div className='w-[100%] h-[235vh] bg-[#251e1c]'>
        <div className='flex justify-center items-center pt-28 text-white gap-12'>
            <div className='text-center'>
                <h1 className='text-3xl pb-5'>CONCEPT</h1>
                <p className='text-gray-400 text-[13px] leading-6'>Black Rabbit gastro-burrow is a cafe, a restaurant or a bar, depending on the time of day<br /> when you visit us. Every weekday we are open from 10:00 to 24:00, offering classic and<br /> original breakfasts, we continue to work as a restaurant with lunch offers, and at the end<br /> of the day you can find a place in the Black Rabbit as for a quiet, cozy dinner, as well as for<br /> a pre-party at the bar with cocktails.</p>
            </div>
            <div>
                <img src='/bg1.jpg' className='w-[600px] h-[400px]'></img>
            </div>
        </div>
        <div className='flex justify-center items-center pt-28 text-white gap-12'>
            <div>
                <img src='/pasta3.jpg' className='w-[600px] h-[400px]'></img>
            </div>
            <div className='text-center'>
                <h1 className='text-3xl pb-5'>Food Drinks</h1>
                <p className='text-gray-400 text-[13px] leading-6'>Black Rabbit gastro-burrow is a cafe, a restaurant or a bar, depending on the time of day<br /> when you visit us. Every weekday we are open from 10:00 to 24:00, offering classic and<br /> original breakfasts, we continue to work as a restaurant with lunch offers, and at the end<br /> of the day you can find a place in the Black Rabbit as for a quiet, cozy dinner, as well as for<br /> a pre-party at the bar with cocktails.</p>
            </div>
        </div>
        <div className='flex justify-center items-center pt-28 text-white gap-12'>
            <div className='text-center'>
                <h1 className='text-3xl pb-5'>INTERIOR</h1>
                <p className='text-gray-400 text-[13px] leading-6'>Modern design in loft style does not leave <br />anyone indifferent, creates a unique hospitable atmosphere.</p>
            </div>
            <div>
                <img src='/bg2.jpg' className='w-[600px] h-[400px]'></img>
            </div>
        </div>
    </div>
    <div id='footer' className='flex justify-center gap-36'>
      <div className='mt-16'>
        <img src='/logo.png' className='max-w-[150px] pb-4'></img>
        <span className='text-white'>Cooked with <FaHeart className='text-red-600' /> by Alhan</span>
      </div>
      <div className='text-white leading-[30px] mt-16'>
        <h1 className='font-bold text-xl'>Navigation</h1>
        <p className='text-[#b2b2b2] pt-6'>Menu</p>
        <p className='text-[#b2b2b2]'>Reserve A Table</p>
        <p className='text-[#b2b2b2]'>Guest Delivery</p>
        <p className='text-[#b2b2b2]'>About Us</p>
        <p className='text-[#b2b2b2]'>News</p>
        <p className='text-[#b2b2b2]'>Contact</p>
      </div>
      <div className='text-white leading-[30px] mt-16'>
        <h1 className='font-bold text-xl'>Breakfast</h1>
        <p className='text-[#b2b2b2] pt-6'>Summer Menu</p>
        <p className='text-[#b2b2b2]'>Starters</p>
        <p className='text-[#b2b2b2]'>Salads</p>
        <p className='text-[#b2b2b2]'>Soups</p>
        <p className='text-[#b2b2b2]'>Main Course</p>
        <p className='text-[#b2b2b2]'>Fish Seafood</p>
        <p className='text-[#b2b2b2]'>Sides</p>
        <p className='text-[#b2b2b2]'>Deserts</p>
        <p className='text-[#b2b2b2]'>Drinks</p>
      </div>
      <div className='text-white leading-[30px] mt-16'>
        <h1 className='font-bold text-xl'>Contact</h1>
        <p className='text-[#b2b2b2] pt-6'>03313189082</p>
        <p className='text-[#b2b2b2]'>dilshadalhan@gmail.com</p>
        <p className='text-[#b2b2b2]'>China</p>
        <p className='text-[#b2b2b2]'>str. Vlaicu Pîrcalab 45</p>
        <p className='text-[#b2b2b2] pt-4'>Mn-Th: 10:00 - 22:00</p>
        <p className='text-[#b2b2b2]'>Fr: 10:00 - 22:00</p>
        <p className='text-[#b2b2b2]'>St: 10:00 - 22:00</p>
        <p className='text-[#b2b2b2]'>Sn: 10:00 - 22:00</p>
        <p className='text-[#b2b2b2] pt-4'>Breakfast:</p>
        <p className='text-[#b2b2b2]'>Sn: 10:00 - 22:00</p>
        <p className='text-[#b2b2b2]'>Sn: 10:00 - 22:00</p>
      </div>
    </div>
    </>
  )
}

export default page;

