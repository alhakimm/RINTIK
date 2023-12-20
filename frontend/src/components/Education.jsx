import React from "react";
import {useState, useEffect} from 'react';

const Education = () => {

  const [materials, setMaterials] = useState([
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 1, type:'article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 2, type: 'article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 3, type: 'article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 4, type: 'article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 5, type: 'article'},
        {title: 'Water 4.0: The Past, Present, and Future of the World\'s Most Vital Resource', body: "lorem ipsum ching chong ling long", author: 'David Sedlak', id: 6, type:'article'},
        {title: 'Blue Future: Protecting Water for People and the Planet Forever', body: "lorem ipsum ching chong ling long", author: 'Maude Barlow', id: 7, type: 'article'},
        {title: 'The Big Thirst: The Secret Life and Turbulent Future of Water', body: "lorem ipsum ching chong ling long", author: 'Charles Fishman', id: 8, type: 'article'},
        {title: 'Cadillac Desert: The American West and Its Disappearing Water', body: "lorem ipsum ching chong ling long", author: 'Marc Reisner', id: 9, type: 'article'},
        {title: 'A Twenty-First Century US Water Policy', body: "lorem ipsum ching chong ling long", author: 'Juliet Christian-Smith, Peter H. Gleick, Heather Cooley, and Lucy Allen', id: 10, type: 'article'}
    ]);


  return (
    <div className='flex-col flex-grow bg-gradient-to-b from-[#0A2236] to-[#15436E] w-full px-20 py-6 justify-between h-screen gap-2 '>

      <div className='bg-transparent rounded-lg border border-gray-300 h-60 w-full'></div>

      <div className="bg-transparent h-60 custom-article-section-width mt-3 custom-article-section-margin-left p-4 absolute">
        <div className="ml-4">
          <h2 className="text-white font-bold text-5xl">Educational Materials</h2>
          {materials.map((mats) => (
            <div className="p-4 pl-1 mb-5 border-b border-[#15436E] rounded-lg text-white hover:shadow-xl" key={mats.id}>
              <h2 className="text-blue-200 mb-2 text-2xl transition duration:500 hover:font-bold hover:text-3xl">{ mats.title }</h2>
              <p>Written by {mats.author}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 bg-transparent h-10 py-5 px-4 pr-5 custom-search-bar-width rounded-lg text-sm text-white focus:outline-none relative z-10"
        />
       <button type="submit" class="absolute p-2.5 ms-2 mt-0.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
      
      <div id='bookmark-bar' className="bg-transparent rounded-lg border border-gray-300 h-60 w-1/4 mt-6 p-4"></div>

     
        
    </div>
  );
};

export default Education;
