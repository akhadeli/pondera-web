import { Link, Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

export default function Curriculum() {
  return (
    <main className='flex flex-col items-center'>
      <div className='flex flex-col justify-center max-w-[1024px] my-20 gap-10 p-10 bg-white rounded-lg'>
        <h1 className='font-bold text-4xl text-black'>Curriculums and Groups that we have supported</h1>
        <Divider className='bg-[#d9d9d9]'></Divider>
        <div className='grid grid-cols-3 gap-12'>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>GCSE</Button>
        <Button as={Link} href="/curriculum/igcse" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>IGCSE</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>AS</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>A Levels</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>AP</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>IB</Button>
        </div>
      </div>
    </main>
  )
}