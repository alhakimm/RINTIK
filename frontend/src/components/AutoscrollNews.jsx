import React from 'react'
import { Carousel } from "@material-tailwind/react";

const AutoscrollNews = () => {
  return (
    <div className='my-2'>
        <Carousel transition={{ duration: 1 }} className="rounded-xl h-80" autoplay="true" loop="true">
            <div className='relative h-full w-full'>
                <a href="https://www.thestar.com.my/news/nation/2024/01/17/new-water-tariff-rates-from-feb-1" target="_blank">
                    <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-80 w-full object-cover opacity-40"
                    />
                    <div className='absolute inset-0 h-full w-full bg-black/50'>
                        <div className='w-full p-4 max-h-60 text-white'>
                            <div className='text-2xl font-bold pb-4'>Water Tariff Adjustment</div>
                            <div className='text-xs'>The National Water Services Commission (SPAN) announced that water tariff rates for domestic users in Peninsular Malaysia and the Federal Territory of Labuan will be increased by 22 sen per cubic meter from February 1, 2024. The adjustment is under the Tariff Setting Mechanism (TSM) and will see an average increase of 22 sen per cubic meter of water.</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='relative h-full w-full'>
                <a href="https://www.msn.com/en-my/news/national/possible-water-disruptions-in-penang-again-after-pipe-burst/ar-BB1h7wbB" target="_blank">
                    <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-80 w-full object-cover opacity-40"
                    />
                    <div className='absolute inset-0 h-full w-full bg-black/50'>
                        <div className='w-full p-4 max-h-60 text-white'>
                            <div className='text-2xl font-bold pb-4'>PBAPP to Minimise Water Flow</div>
                            <div className='text-xs'>The Penang Water Supply Corporation (PBAPP) said that 200,000 water consumers in the state would face water supply disruption as the Perai riverbed pipe gave way again. This is the fourth time that the pipe ruptured since last month</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='relative h-full w-full'>
                <a href="" target="_blank">
                    <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-80 w-full object-cover opacity-40"
                    />
                    <div className='absolute inset-0 h-full w-full bg-black/50'>
                        <div className='w-full p-4 max-h-60 text-white'>
                            <div className='text-xl font-bold pb-4'>Malaysia Needs Comprehensive Water Restructuring</div>
                            <div className='text-xs'>Ong Kian Ming, former deputy investment, trade and industry minister, proposed the establishment of a fair and transparent system for capital expenses (capex) spending on new developments as part of the restructuring effort.</div>
                        </div>
                    </div>
                </a>
            </div>
        </Carousel>
    </div>
  )
}

export default AutoscrollNews

