import { Link, Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/navigation';

export default function ionicbonding() {
  return (
    <main className='flex flex-col justify-around items-center'>
        <h1 className='font-bold text-7xl text-white text-center'>IGCSE: Chemistry - Edexcel: Ionic Bonding</h1>
        <div className='flex flex-row justify-around items-center max-w-[1200px] lg:w-[1200px] my-20 gap-10 p-10 bg-white rounded-lg border-8 border-amber-300'>
            <h1 className='font-bold text-3xl text-black text-center'>AI Features</h1>
            <div className='grid grid-cols-4 gap-5'>
                <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/revision-notes" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Revision Notes</Button>
                <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/summary" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Summary Generator</Button>
                <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/flashcards" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Flashcards</Button>
                <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/ask-a-question" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Ask a Question</Button>
            </div>
        </div>


        <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-row justify-around items-center max-w-[700px] lg:w-[500px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-blue-400'>
                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='font-bold text-3xl text-black text-center'>UNIT 1</h1>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>States of Matter</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Elements, Compounds & Mixtures</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Atomic Structure</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>The Periodic Table</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Chemical Formulae, Equations, Calculations</Button>
                    <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Ionic Bonding</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Covalent Bonding</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Metallic Bonding</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Electrolysis</Button>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center max-w-[700px] lg:h-[590px] lg:w-[500px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-blue-400'>
                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='font-bold text-3xl text-black text-center'>UNIT 2</h1>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>The Alkali Metals</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>The Halogens</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Gases in the Atmosphere</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Reactivity Series</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Extraction and Uses of Metals</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Acids, Alkalis and Titrations</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Acids, Bases and Salt Preparations</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Chemical Tests</Button>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center max-w-[700px] lg:h-[290px] lg:w-[500px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-blue-400'>
                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='font-bold text-3xl text-black text-center'>UNIT 3</h1>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Energetics</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Rates of Reaction</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Reversible Reactions and Equilibria</Button>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center max-w-[700px] lg:w-[500px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-blue-400'>
                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='font-bold text-3xl text-black text-center'>UNIT 4</h1>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Introduction to Organic Chemistry</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Crude Oil</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Alkanes</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Alkenes</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Alcohols</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Carboxylic Acids</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Esters</Button>
                    <Button className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Synthetic Polymers</Button>
                </div>
            </div>

        </div>
    </main>)}