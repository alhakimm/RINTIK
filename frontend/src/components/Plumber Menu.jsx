import React from "react";
import {useState, useEffect} from 'react';
import useFetch from "./useFetch";
import { CgPin } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { Typography, Tooltip, Button } from "@material-tailwind/react";

const PlumberMenu = () =>{

    const {data: plumberList, isLoading, error} = useFetch("http://localhost:5000/testingfirebase-3e0f7/us-central1/getPlumbers");

    const [searchQuery, setSearchQuery] = useState("");
    const [filterByLocation, setFilterByLocation] = useState("");
    const [filterByPrice, setFilterByPrice] = useState("");
    const [selectedPlumber, setSelectedPlumber] = useState(null);

    const LoadingSpinner = () =>{
        return (
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    const filteredPlumbers = plumberList
    ?.filter((plumber) =>
      plumber.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    ?.filter((plumber) =>
      filterByLocation ? plumber.location === filterByLocation : true
    )
    ?.filter((plumber) =>
      filterByPrice ? plumber.price <= filterByPrice : true
    );

    const openContactPopup = (plumber) => {
      setSelectedPlumber(plumber);
    };
  
    const closeContactPopup = () => {
      setSelectedPlumber(null);
    };

    return(
        <div className=' flex items-center justify-center bg-blue-500 w-full px-20 py-6 min-h-screen gap-2'>
            <div className="rounded-2xl w-[900px] h-full bg-white">
                <div className="p-6 pt-6">
                  {/* search box , icon search, button search*/}
                  <div className="flex items-center justify-between w-full">
                    <input
                    type="text"
                    placeholder="   Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-2 border-blue-500 bg-transparent h-10 custom-search-bar-width rounded-lg text-sm text-black focus:outline-none"
                    />
                    <button type="submit" className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                  </div>
                  {/* filter location*/}
                  <div className="mt-4 flex gap-4 items-center">
                    <h3 className="text-black">Location: </h3>
                    <div className="flex gap-2">
                        <button
                        onClick={() => setFilterByLocation("Kampung Penambang")}
                        className="p-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Kampung Penambang
                      </button>
                      <button
                        onClick={() => setFilterByLocation("Kampung Cina")}
                        className="p-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Kampung Cina
                      </button>
                      <button
                        onClick={() => setFilterByLocation("")}
                        className="p-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Clear Location Filter
                      </button>
                    </div>
                </div>
                {/* price slider*/}
                <div className="mt-6">
                <label htmlFor="priceSlider" className="text-black mr-2">
                  Filter by Price:
                </label>
                <input
                  id="priceSlider"
                  type="range"
                  min="1"
                  max="1000"
                  value={filterByPrice}
                  onChange={(e) => setFilterByPrice(parseInt(e.target.value))}
                  className="text-white w-full"
                />
                <div className="flex justify-between text-black">
                  <label htmlFor="priceSlider">Cheap</label>
                  <label htmlFor="priceSlider">Exclusive</label>
                </div>
                
                <div className="text-black mt-2 font-bold text-2xl">Price RM: {filterByPrice}</div>
              </div>
              {/* end price slider*/}
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
                      {/* <h2 className="text-white font-black text-5xl static">Plumbers</h2> */}
                      <div className="space-y-5">
                      {error && <div className="load-error-message">{error}</div>}
                    {isLoading && LoadingSpinner()}
                    {filteredPlumbers &&
                      filteredPlumbers.map((plumber) => (
                        <div
                          className="p-4 pl-1 mb-5 border-b border-[#15436E] rounded-lg hover:shadow-xl cursor-pointer grid grid-cols-4 grid-rows-2"
                          key={plumber.id}
                          onClick={() => openContactPopup(plumber)}
                        >
                          <h2 className="text-blue-500 text-2xl transition duration-500 hover:font-bold hover:text-3xl col-span-2">
                            {plumber.name}
                          </h2>
                          <div className="flex items-center text-xs row-start-2 col-span-2">
                            <CgPin className="relative mr-1" />
                            <p className="pr-1 text-xl">
                              {plumber.location} | {plumber.rating}
                            </p>
                          </div>
                          <p className="text-xs col-start-3 text-right pr-4 pt-1">from</p>{" "}
                          <h2 className="col-start-4 text-3xl font-black">
                            RM {plumber.price}
                          </h2>
                          <div className="flex justify-center text-xs row-start-2 col-start-3 col-span-2 p-1 pl-20">
                            <Tooltip
                              content={"Whatsapp  " + plumber.phone + "  now"}
                              placement="bottom"
                              animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                              }}
                              styles={{
                                bg: "bg-white",
                                color: "text-black",
                              }}
                            >
                                          <Button>Contact Now</Button>
                                      </Tooltip>
                                  </div>
                              </div>
                      ))}
                      </div>
                  </div>
                  </div>

              </div>
            </div>
            
            
{/* Pop-up menu */}
{selectedPlumber && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <Typography variant="h2" color="black" className="text-xl font-bold mb-4">
              {selectedPlumber.name}
            </Typography>
            <div className="flex flex-col mb-4">
              <Typography variant="paragraph" color="black" className="text-sm mb-1">
                Phone: {selectedPlumber.phone}
              </Typography>
              <Typography variant="paragraph" color="black" className="text-sm">
                Email: {selectedPlumber.email}
              </Typography>
            </div>
            <Button onClick={closeContactPopup}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlumberMenu;