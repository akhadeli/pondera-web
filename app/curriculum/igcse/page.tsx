import { Link, Button, Divider } from '@nextui-org/react'

export default function IGCSE() {
  return (
    <main className='flex flex-col items-center'>
      <h1 className='font-bold text-9xl text-white text-center'>IGCSE</h1>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col justify-center max-w-[512px] my-40 gap-5 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Mathematics</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Additional - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Extended - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Core - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Pure Mathematics - Edexcel</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Mathematics - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Chemistry</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Chemistry - CIE</Button>
            <Button as={Link} href="/curriculum/igcse/chemistry-edexcel" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Chemistry - Edexcel</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Chemistry Double Science - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Physics</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Physics - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Physics - Edexcel</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Physics Double Science - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Biology</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Biology - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Biology - Edexcel</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Biology Double Science - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>English Language</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>English Language - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>English Language - Edexcel</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>English Language B - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>English Literature</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>English Literature - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>English Literature - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Computer Science</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Computer Science - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Computer Science - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Economics</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Economics - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Economics - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Business</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Business - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Business - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>History</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>History - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>History - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Geography</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Geography - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Geography - Edexcel</Button>
            </div>
        </div>
        <div className='flex flex-col justify-center max-w-[512px] my-60 gap-10 p-10 bg-white rounded-lg'>
            <h1 className='font-bold text-4xl text-black text-center'>Sociology</h1>
            <Divider className='bg-[#d9d9d9]'></Divider>
            <div className='grid grid-cols-1 gap-12'>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Sociology - CIE</Button>
            <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Sociology - Edexcel</Button>
            </div>
        </div>
      </div>
    </main>
  )
}