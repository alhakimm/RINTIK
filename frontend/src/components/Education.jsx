import React from "react";
import {useState, useEffect} from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Education = () => {

  const [materials, setMaterials] = useState([
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 1, type:'Article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 2, type: 'Article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 3, type: 'Article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 4, type: 'Article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 5, type: 'Article'},
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 6, type:'Article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 7, type: 'Article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 8, type: 'Article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 9, type: 'Article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 10, type: 'Article'},
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 11, type:'Article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 12, type: 'Article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 13, type: 'Article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 14, type: 'Article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 15, type: 'Article'},
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 16, type:'Article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 17, type: 'Article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 18, type: 'Article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 19, type: 'Article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 20, type: 'Article'},
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 21, type:'Article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 22, type: 'Article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 23, type: 'Article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 24, type: 'Article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 25, type: 'Article'},
    ]);

    const CarouselTransition = () =>{
      return (
        <Carousel transition={{ duration: 1 }} className="rounded-xl h-60" autoplay="true" loop="true">
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-60 w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
              <div className="w-full p-12 pl-16 max-h-60">
                <Typography 
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-4xl">
                  Water outage in Penang!
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit. It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews..... <Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
                </Typography>
                
              </div>  
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-60 w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
              <div className="w-full p-12 pl-16 max-h-60">
                <Typography 
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-4xl">
                  Mak Kau Hijau
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit. It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews......<Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-60 w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
              <div className="w-full p-12 pl-16 max-h-60">
                <Typography 
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-4xl">
                  Bapak Kau Kuning
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit. It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews.....<Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      );
  }

  return (
    <div className='bg-gradient-to-b from-[#0A2236] to-[#15436E] w-full px-20 py-6 justify-between min-=h-screen gap-2'>

      {/* <div className='rounded-lg border border-gray-300 h-60 w-full flex-none mb-6'></div> */}

      {CarouselTransition()}

      <div className="grid grid-cols-3 flex-1">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search..."
            className="mt-6 border border-gray-300 bg-transparent h-10 py-5 px-4 pr-5 custom-search-bar-width rounded-lg text-sm text-white focus:outline-none"
          />
          <button type="submit" className="mt-6 absolute p-2.5 ms-2 mt-0.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className='custom-bookmark-bar-width h-1/2 justify-start mt-4 rounded-lg border border-gray-300 p-4'>
          {/* Bookmark bar */}
        </div>

        </div>

        <div className="custom-article-section-width custom-article-section-margin-left p-4 overflow-y-auto h-screen flex-1 col-span-2" style={{ scrollbarWidth: 'thin' }}>
          <style>
            {`
              
              ::-webkit-scrollbar {
                width: 2px; 
              }

              ::-webkit-scrollbar-thumb {
                background: white; 
                border-radius: 10px; 
              }
            `}
          </style>
          <div className="ml-4">
            <h2 className="text-white font-black text-5xl static">Educational Materials</h2>
            <div className="space-y-5">
              {materials.map((mats) => (
                <div className="p-4 pl-1 mb-5 border-b border-[#15436E] rounded-lg text-white hover:shadow-xl cursor-pointer" key={mats.id}>
                  <h2 className="text-blue-200 mb-2 text-2xl transition duration-500 hover:font-bold hover:text-3xl">{mats.title}</h2>
                  <p className="text-xs">{mats.type} | {mats.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      
      

    </div>
  );
};

export default Education;
