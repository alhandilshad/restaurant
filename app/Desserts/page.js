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
            <h1 className='text-[44px] text-white font-bold text-center pt-5'>Desserts</h1>
        </div>
    </div>
    <div className='w-[120px] h-[120px] bg-[#cdc0bc] rounded-full absolute mt-[-60px] ml-[700px]'>
        <IoFastFood className='ml-[25px] text-[70px] mt-[20px]' />
    </div>
    <div className='w-[100%] h-[160vh] bg-[#251e1c]'>
        <div className='flex text-[15px] justify-center items-center text-white pt-24'>
            <Link href="/Breakfast" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>BREAKFAST</Link>
            <Link href="/Starters" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>STARTERS</Link>
            <Link href="/Salads" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>SALADS</Link>
            <Link href="/Soups" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>SOUPS</Link>
            <Link href="/Pasta" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>PASTA</Link>
            <Link href="/Fish" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>FISH & SEAFOODS</Link>
            <Link href="/Desserts" className='bg-[#738373] text-white transition-[o.6s] text-center' id='links'>DESSERTS</Link>
            <Link href="/Drinks" className='hover:bg-[#738373] hover:text-white hover:transition-[o.6s] text-center' id='links'>DRINKS</Link>
        </div>
        <div className='flex justify-center items-center gap-10 mt-24'>
            <div className='text-center'>
              <img src='/desert1.jpg' width={400} height={300}></img>
              <span className='bg-white py-1 px-7 font-semibold text-xl'>150 Rs.</span>
              <p className='text-white pt-3 text-[15px]'>Lava cake with vanilla sauce</p>
            </div>
            <div className='text-center'>
              <img src='/desert2.jpg' width={400} height={300}></img>
              <span className='bg-white py-1 px-7 font-semibold text-xl'>80 Rs.</span>
              <p className='text-white pt-3 text-[15px]'>Mousses</p>
            </div>
            <div className='text-center'>
              <img src='/desert3.jpg' width={400} height={300}></img>
              <span className='bg-white py-1 px-7 font-semibold text-xl'>120 Rs.</span>
              <p className='text-white pt-3 text-[15px]'>“Black rabbit” cake</p>
            </div>
        </div>
        <div className='flex justify-start items-center mt-20 ml-[120px] gap-10'>
            <div className='text-center'>
              <img src='/desert4.jpg' width={400} height={300}></img>
              <span className='bg-white py-1 px-7 font-semibold text-xl'>120 Rs.</span>
              <p className='text-white pt-3 text-[15px]'>Pistachio cheesecake</p>
            </div>
            <div className='text-center'>
              <img src='/desert5.jpg' width={400} height={300}></img>
              <span className='bg-white py-1 px-7 font-semibold text-xl'>125 Rs.</span>
              <p className='text-white pt-3 text-[15px]'>Pastry Pancake</p>
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

