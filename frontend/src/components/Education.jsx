import React from "react";
import {useState, useEffect} from 'react';

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


  return (
    <div className='bg-gradient-to-b from-[#0A2236] to-[#15436E] w-full px-20 py-6 justify-between min-=h-screen gap-2'>

      {/* <div className='rounded-lg border border-gray-300 h-60 w-full flex-none mb-6'></div> */}

      <div id="default-carousel" class="relative w-full" data-carousel="slide">
    
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/frontend/src/assets/water_pic_1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="error"></img>
          </div>
          
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/frontend/src/assets/water_pic_2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
          </div>
        
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="C:\Users\Danish Irfan\OneDrive\Desktop\RINTIK\frontend\src\assets\water_pic_3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
          </div>
          
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="C:\Users\Danish Irfan\OneDrive\Desktop\RINTIK\frontend\src\assets\logo.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
          </div>
          
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
          </div>
    </div>
    
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>

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
            <h2 className="text-white font-bold text-5xl static">Educational Materials</h2>
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
