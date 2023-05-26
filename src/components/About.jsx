import React from 'react';
import joaco from '../data/joaco.jpeg';
import pedro from '../data/pedro.jpeg';
import camilo from '../data/camilo.jpeg';
import lorenzo from '../data/lorenzo.jpeg';
import lauti from '../data/lauti.jpeg';
import '../App.css'

const About = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
    <div className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the team</h2>
        <div className="grid md:grid-cols-5 xl:grid-cols-5 gap-x-6 lg:gap-xl-12 align-middle justify-center items-center">
        <div className="mb-12">
            <img src={joaco} className="rounded-full mx-auto max-w-[100px] shadow-lg mb-4 hov" alt=""
             />

            <p className="font-bold mb-2 mt-4">Joaquin Amodio</p>
            <p className="text-gray-500">CEO & Co-Founder</p>
        </div>

        <div className="mb-12">
            <img src={lorenzo} className="max-w-[100px] rounded-full mx-auto shadow-lg mb-4 hov" alt=""
             />

            <p className="font-bold mb-2 mt-4">Lorenzo Barrantes</p>
            <p className="text-gray-500">CTO & Co-Founder</p>
        </div>

        <div className="mb-12">
            <img src={lauti} className="max-w-[100px] rounded-full mx-auto shadow-lg mb-4 hov" alt=""
             />
            <p className="font-bold mb-2 mt-4">Lautaro Colli</p>
            <p className="text-gray-500">CFO & Co-Founder</p>
        </div>
        <div className="mb-12">
            <img src={pedro} className="max-w-[100px] rounded-full mx-auto shadow-lg mb-4 hov" alt=""
             />
            <p className="font-bold mb-2 mt-4">Pedro Mezzadri</p>
            <p className="text-gray-500">CMO & Co-Founder</p>
        </div>

        <div className="mb-12">
            <img src={camilo} className="max-w-[100px] rounded-full mx-auto shadow-lg mb-4 hov" alt=""
             />
            <p className="font-bold mb-2 mt-4">Camilo Formica</p>
            <p className="text-gray-500">COO & Co-Founder</p>
        </div>

        </div>
    </div>

    </div>
  )
}

export default About