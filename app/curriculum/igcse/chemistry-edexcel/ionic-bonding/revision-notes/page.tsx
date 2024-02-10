"use client";

import { Link, Button, Divider } from '@nextui-org/react'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/navigation';
import { json } from 'stream/consumers';

export default function RevisionNotes() {
    const [messages, setMessage] = useState("Loading");

    useEffect(() => {
        fetch("http://localhost:5000/api/revision_notes", {method: 'POST', body: JSON.stringify({"subject": "Chemistry", "curriculum": "IGCSE", "board": "Edexcel", "topic": "Ionic Bonding", "explanation_description": "Year 10 IGCSE", "length_generation": "Long"}), headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then((data) => {setMessage(data.message);});
    }, []);

    return (
        <main className='flex flex-col justify-around items-center'>
            <h1 className='font-bold text-7xl text-white text-center'>IGCSE: Chemistry - Edexcel: Ionic Bonding</h1>
            <div className='flex flex-row justify-around items-center max-w-[1200px] lg:w-[1200px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-amber-300'>
                <h1 className='font-bold text-3xl text-black text-center'>AI Features</h1>
                <div className='grid grid-cols-4 gap-5'>
                    <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/revision-notes" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Revision Notes</Button>
                    <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/summary" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Summary Generator</Button>
                    <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/flashcards" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Flashcards</Button>
                    <Button as={Link} href="/curriculum/igcse/chemistry-edexcel/ionic-bonding/ask-a-question" className='bg-[#f4ebe3] text-black text-xl font-semibold px-4'>Ask a Question</Button>
                </div>
            </div>
            <div className='flex flex-row justify-around items-center max-w-[1200px] lg:w-[1200px] my-60 gap-10 p-10 bg-white rounded-lg border-8 border-pink-400'>
                <div className='grid grid-cols-1 gap-5'>
                    <h1 className='font-bold text-3xl text-black text-center'>Revision Notes Generator</h1>
                    <hr></hr>
                    <p className='text-black'>{messages}</p>
                </div>
            </div>
        </main>)}