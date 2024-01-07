import Navigation from './components/navigation'
import { Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Footer from './components/footer'
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Navigation></Navigation>

      {/* First Section */}

      <div className='flex flex-row items-center justify-between h-[550px] lg:gap-16 lg:max-w-[1024px] px-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-semibold text-4xl'>Learning,<br></br> Studying, and<br></br> Revising is made <br></br>easier!</h1>
          <p className='max-w-96'>AI has entered to support you in your education to make it easier to learn, study, and revise. Don't miss out on this opportunity.</p>
          <div className='flex flex-row gap-2'>
            <Button className='bg-white text-black font-semibold px-7'>Get Started</Button>
            <Button variant='bordered' className='bg-black text-white font-semibold border-white border-1 px-7'>Learn More</Button>
          </div>
        </div>
        <div className='hidden md:inline pb-10'>
          <Image
            src="/books.png"
            width={500}
            height={500}
            alt='books'
          ></Image>
        </div>
      </div>

      {/* Second Section */}
      <div className='w-full my-20 md:relative lg:w-[1024px] h-[400px]'>
        <div className='md:absolute md:w-[768px] md:h-fit md:left-1/2 md:transform md:translate-x-[-50%] z-30 shadow-md'>
          <div className='flex flex-row justify-center gap-10 p-10 bg-white rounded-xl'>
            <div className='flex flex-col justify-between gap-4'>
              <h2 className='font-semibold text-3xl text-black'>A community of students<br></br>connects here!</h2>
              <p className='text-black'>Join our community of people who help<br></br>each other in their academic progress<br></br>together. Discuss and quiz each other<br></br>to enhance learning, using AI!</p>
              <Button className='bg-[#f4ebe3] text-black font-semibold px-7'>Join the Community</Button>
            </div>
            <div className='hidden md:inline'>
              <Image
                  src="/connections.png"
                  width={300}
                  height={300}
                  alt='connect'
                ></Image>
            </div>
          </div>
        </div>
        <div className='bg-[#f2f2f2] rounded-xl h-10 w-[730px] hidden md:absolute md:inline md:left-1/2 md:transform md:translate-x-[-50%] md:top-[22rem]'></div>
      </div>

      {/* Third Section */}
      <div className='flex flex-row items-center justify-between h-[550px] w-full lg:gap-10 lg:w-[980px] px-3'>
        <div>
          <Image
            src="/robot.png"
            width={500}
            height={500}
            alt='robot'
          ></Image>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-[12px] font-bold'>ENHANCE LEARNING</h3>
          <h1 className='font-semibold text-3xl'>AI helps you by your curriculum!</h1>
          <p className='max-w-96'>We are using a large language model (LLM) called Gemini Pro by Google to power our product to your satisfaction in your academic journey.</p>
          <p className='max-w-96'>As each curriculum and board is different, we use relevant resources to power and enhance the AI to give you quality and relevant responses in order to drive your experience!</p>
          <div className='flex flex-row gap-2'>
            <Button variant='bordered' className='bg-black text-white font-semibold border-white border-1 px-7'>Try Now</Button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className='flex flex-col justify-center max-w-[1024px] my-20 gap-10 p-10 bg-white rounded-lg'>
        <h1 className='font-bold text-4xl text-black'>Curriculums and Groups that we have supported</h1>
        <Divider className='bg-[#d9d9d9]'></Divider>
        <div className='grid grid-cols-3 gap-4'>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>GCSE</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>IGCSE</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>AS</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>A Levels</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>AP</Button>
        <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>IB</Button>
        </div>
      </div>

      {/* Fifth Section */}
      <div className='flex flex-row justify-around items-center max-w-[1024px] lg:w-[900px] my-20 gap-10 p-10 bg-white rounded-lg'>
        <div className='flex flex-col justify-center gap-4'>
          <Image
            src="/ai.png"
            width={250}
            height={250}
            alt='ai'
            className='self-center'
          ></Image>
          <h1 className='mt-6 font-semibold text-3xl text-black'>Our features<br></br>powered by AI</h1>
          <p className='text-black max-w-80'>Read a preview of the great features that we provide to students!</p>
          <Button className='bg-[#f4ebe3] text-black text-md font-semibold'>Create an account</Button>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <h2 className='text-black font-semibold text-xl'>Learn with AI (coming soon)</h2>
            <p className='text-[11px] text-[#606060] max-w-72 my-3'>Interactive AI teaching session with you to teach you any subject topics at your pace and level.</p>
            <Divider className='bg-[#d9d9d9]'></Divider>
          </div>
          <div>
            <h2 className='text-black font-semibold text-xl'>Quick Marking (coming soon)</h2>
            <p className='text-[11px] text-[#606060] max-w-72 my-3'>Mark your testing paper answers with AI instantly, and it gives corresponding feedback to improve for your real exam!</p>
            <Divider className='bg-[#d9d9d9]'></Divider>
          </div>
          <div>
            <h2 className='text-black font-semibold text-xl'>Generate Material with AI</h2>
            <p className='text-[11px] text-[#606060] max-w-72 my-3'>AI generates revision notes, summaries, and flashcards for the best revision material catered to your comfort.</p>
            <Divider className='bg-[#d9d9d9]'></Divider>
          </div>
          <div>
            <h2 className='text-black font-semibold text-xl'>Connect with the community</h2>
            <p className='text-[11px] text-[#606060] max-w-72 my-3'>A community of students and people can interact with each other on forums and can quiz each other!</p>
            <Divider className='bg-[#d9d9d9]'></Divider>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className='my-10 flex flex-col items-center gap-4 w-full lg:w-[768px]'>
        <h1 className='text-white text-[2.5rem] font-semibold'>Testimonials</h1>
        <p className='text-white text-md'>People love what we do and we want to let your know</p>
        <div className='flex flex-row items-center gap-8 my-4 h-60'>
          <div className='flex flex-col gap-4 items-center bg-white rounded-xl md:max-w-56 h-fit md:h-48 p-6'>
            <p className='text-black text-sm font-semibold text-center'>"Since implementing Lando our business has seen significant growth."</p>
            <div className='flex flex-row gap-1'>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
            </div>
            <div>
              <h3 className='text-black text-[1rem] font-bold text-center'>Jack Sibire</h3>
              <h4 className='text-[#4f4f4f] text-[0.7rem] font-semibold text-center'>Lead Manager, Growio</h4>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center bg-white rounded-xl md:max-w-56 h-fit md:h-48 p-6 mb-4'>
            <p className='text-black text-sm font-semibold text-center'>"I recommend Lando to any business looking for improvement."</p>
            <div className='flex flex-row gap-1'>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
            </div>
            <div>
              <h3 className='text-black text-[1rem] font-bold text-center'>Adele Mouse</h3>
              <h4 className='text-[#4f4f4f] text-[0.7rem] font-semibold text-center'>Product Manager, Mousio</h4>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center bg-white rounded-xl md:max-w-56 h-fit md:h-48 p-6'>
            <p className='text-black text-sm font-semibold text-center'>"I can't imagine running our company without it."</p>
            <div className='flex flex-row gap-1'>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
              <FaStar size="15" color="gold"></FaStar>
            </div>
            <div>
              <h3 className='text-black text-[1rem] font-bold text-center'>Ben Clock</h3>
              <h4 className='text-[#4f4f4f] text-[0.7rem] font-semibold text-center'>CTO, Clockwork</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Section */}

      <Footer></Footer>

    </main>
  )
}
