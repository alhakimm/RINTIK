import React from "react";
import {useState, useEffect} from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Education = () => {

  const [materials, setMaterials] = useState([
        {title: 'Imminent risk of a global water crisis, warns the UN World Water Development Report 2023', 
        body: 'The report states that between two and three billion people worldwide experience water shortages, and these shortages will worsen in the coming decades, especially in cities, if international cooperation in this area is not boosted. The report also highlights that globally, 2 billion people (26% of the population) do not have safe drinking water and 3.6 billion (46%) lack access to safely managed sanitation 1.', 
        author: 'UNESCO', 
        id: "https://www.unesco.org/en/articles/imminent-risk-global-water-crisis-warns-un-world-water-development-report-2023", 
        type:'Report'},

        {title: 'Water Stress: A Global Problem That’s Getting Worse', 
        body: "lThis article from the Council on Foreign Relations discusses how water scarcity threatens the health and development of communities around the globe. It also highlights how climate change is intensifying the problem, pushing governments to find more innovative, collaborative ways to address water stress.", 
        author: 'Claire Klobucista and Kali Robinson', 
        id: "https://www.cfr.org/backgrounder/water-stress-global-problem-thats-getting-worse", 
        type: 'Article'},

        {title: 'The Water Crisis: Shortage, Problems, Solutions', 
        body: "This article from the World Wildlife Fund discusses the causes and consequences of the global water crisis. It also highlights the importance of water conservation and sustainable water management practices.", 
        author: 'World Wildlife Fund', 
        id: "https://water.org/our-impact/water-crisis/", 
        type: 'Article'},

        {title: 'Water Scarcity: A threat to global security', 
        body: "This article from the Brookings Institution discusses how water scarcity is a growing threat to global security. It also highlights how water scarcity can lead to conflict and instability, particularly in regions where water resources are shared across borders.", 
        author: 'Peter Gleick', 
        id: "https://www.nature.com/articles/d41586-023-03899-2", 
        type: 'Article'},

        {title: 'The Water Crisis is Worsening. Researchers must tackle it together', 
        body: "It’s unacceptable that millions living in poverty still lack access to safe water and basic sanitation. Nature Water will help researchers to find a way forward.", 
        author: 'Nature.com', 
        id: "https://www.nature.com/articles/d41586-023-00182-2", 
        type: 'Article'},

        {title: 'The scarcity of water is emerging as a global economic threat. With China and India looking the most at risk', 
        body: "Water scarcity is seen as the most significant and potentially most impactful component of the wider climate crisis, and researchers say that large Asian economies like India and China will be the most affected from these water shortages.", 
        author: 'Charmaine Jacob', 
        id: "https://www.cnbc.com/2023/06/13/water-scarcity-china-and-india-look-the-most-threatened-from-shortages.html", 
        type: 'Article'},

        {title: 'Water Rights and Water Fights: Preventing and Resolving Conflicts Before They Boil Over', 
        body: "Scarcity of freshwater is an increasingly critical public health problem in many parts of the world. World leaders, including United Nations Secretary-General Ban Ki-moon, have urged that this issue be given high priority. Inadequate access to safe freshwater contributes to waterborne disease, malnutrition, poverty, economic and political instability, and conflict—potentially violent conflict—between countries or groups within countries.", 
        author: 'Barry S. Levy, MD, MPH and Victor W. Sidel, MD', 
        id: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3076402/", 
        type: 'Article'},

        {title: 'The Water Crisis: A health emergency', 
        body: "This article from Water.org highlights how the water crisis is a health emergency. It discusses how nearly 1 million people die each year from water, sanitation, and hygiene-related diseases which could be reduced with access to safe water or sanitation.", 
        author: 'Water.org', 
        id: 5, 
        type: 'Article'},
    ]);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  const handleClosePopup = () => {
    setSelectedMaterial(null);
  };

    const MaterialPopup = ({ material }) => {
      const handleReadOriginalPost = () => {
        window.location.href = material.id;
      };

      return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <Typography variant="h1" color="black" className="text-2xl mb-4">
              {material.title}
            </Typography>
            <Typography variant="paragraph" color="black" className="mb-4">
              {material.body}
            </Typography>
            <Button
              color="blue"
              buttonType="link"
              onClick={handleClosePopup}
              ripple="dark"
            >
              Close
            </Button>
            <button className="text-blue-500 mt-2 block" onClick={handleReadOriginalPost}>
               Read Original Post
            </button>
          </div>
        </div>
      );
    };

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
                  Water outage in Kota Bharu!
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                  Kota Bharu faces water outage crisis, impacting residents with shortages. Urgent measures needed for immediate relief and long-term water security.<Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
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
                  Save Water Now
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                    Kota Bharu is currently scheduled to face a water crisis. Remember to start saving water from today to avoid any unwanted difficulties.
                <Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
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
                  Scheduled Water Interruption in Kampung Penambang
                </Typography>
                <Typography 
                  variant="paragraph"
                  color="white"
                  className="mb-12 opacity-80">
                  Kampung Penambang is set to face a water supply interruption starting from 28th January 2024 to 30th January 2024. 
                  Make all necessary preparations to face this crisis such as saving water for necessary use.
                  <Link to="/" className="justify-center mt-4 rounded-xl custom-read-more-width flex transition duration-500 hover:font-bold hover:bg-blue-500">Read More</Link>
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      );
  }

    // Filter materials based on the searchQuery
    const filteredMaterials = materials.filter((material) =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-gradient-to-b from-[#0A2236] to-[#15436E] w-full px-20 py-6 justify-between min-=h-screen gap-2'>

      {/* <div className='rounded-lg border border-gray-300 h-60 w-full flex-none mb-6'></div> */}

      {CarouselTransition()}

      <div className="grid grid-cols-3 flex-1">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-6 border border-gray-300 bg-transparent h-10 py-5 px-4 pr-5 custom-search-bar-width rounded-lg text-sm text-white focus:outline-none"
          />


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
              {filteredMaterials.map((material) => (
                <div
                  className="p-4 pl-1 mb-5 border-b border-[#15436E] rounded-lg text-white hover:shadow-xl cursor-pointer"
                  key={material.id}
                  onClick={() => handleMaterialClick(material)}
                >
                  <h2 className="text-blue-200 mb-2 text-2xl transition duration-500 hover:font-bold hover:text-3xl">
                    {material.title}
                  </h2>
                  <p className="text-xs">
                    {material.type} | {material.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      
      
        {selectedMaterial && <MaterialPopup material={selectedMaterial} />}
    </div>
  );
};

export default Education;
