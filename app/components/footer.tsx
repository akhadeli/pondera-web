import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full h-64 mt-20">
        <div className="flex flex-row justify-start max-w-[1024px] lg:w-[1024px] px-6 mt-8 gap-10">
            <div>
                <Image
                src="/pondero_logo.svg"
                alt="Pondero Logo"
                width={150}
                height={39}
                priority
                />
                <p className='text-[#030303] text-sm'>2023 © Neuron.com<br></br>All rights reserved.</p>
            </div>
            <div className='grid grid-cols-3 items-center gap-x-16 gap-y-5 my-2 mx-16'>
                <p className='text-[#262626] text-sm font-semibold'>Home</p>
                <p className='text-[#262626] text-sm font-semibold'>TikTok</p>
                <p className='text-[#262626] text-sm font-semibold'>Privacy Policy</p>
                <p className='text-[#262626] text-sm font-semibold'>Pricing</p>
                <p className='text-[#262626] text-sm font-semibold'>Instagram</p>
                <p className='text-[#262626] text-sm font-semibold'>Terms Of Service</p>
                <p className='text-[#262626] text-sm font-semibold'>About Us</p>
                <p className='text-[#262626] text-sm font-semibold'>LinkedIn</p>
                <span></span>
                <p className='text-[#262626] text-sm font-semibold'>Contact</p> 
            </div>
        </div>
    </div>
  )
}

export default Footer