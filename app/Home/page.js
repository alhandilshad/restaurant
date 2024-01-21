"use client"
import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div id='bg-mains' className='gap-8'>
        <div id='bg1'>

        </div>
        <div id='bg2'>
           <div className='w-[100%] bg-[#0505075c] pb-7 mt-[232px]'>
                <p className='text-white text-[21px] leading-[25px] font-semibold pt-5'>Food<br /> Delivery</p>
                <div className='flex bg-white items-center justify-center h-[37px] font-semibold w-[140px] ml-[67px] mt-5 hover:bg-[#738373] hover:text-white hover:transition-[o.6s]'>
                    <Link href="/Breakfast">Go to Menu</Link>
                    <p><MdArrowRightAlt /></p>
                </div>
            </div>
        </div>
        <div id='bg3'>
           <div className='w-[100%] bg-[#0505075c] pb-7 mt-[232px]'>
                <p className='text-white text-[21px] leading-[25px] font-semibold pt-5'>Reserve<br /> a Table</p>
                <div className='flex bg-white items-center justify-center h-[37px] font-semibold w-[140px] ml-[67px] mt-5 hover:bg-[#738373] hover:text-white hover:transition-[o.6s]'>
                    <Link href="/Reserve">Hall Layout</Link>
                    <p><MdArrowRightAlt /></p>
                </div>
            </div>
        </div>
        <div id='bg4'>
           <div className='w-[100%] bg-[#0505075c] pb-7 mt-[232px]'>
                <p className='text-white text-[21px] leading-[25px] font-semibold pt-5'>About<br /> Us</p>
                <div className='flex bg-white items-center justify-center h-[37px] font-semibold w-[140px] ml-[67px] mt-5 hover:bg-[#738373] hover:text-white hover:transition-[o.6s]'>
                    <Link href="/About">Go to About</Link>
                    <p><MdArrowRightAlt /></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page;

