import React from 'react'

const Alert = () => {
  return (
    <div className='bg-red-200 p-4 rounded-lg'>
        <div>
            <h1 className='text-xl font-bold'>Alert!</h1>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Water Shortage</h1>
                    <h3 className='text-xs'>Rantau Panjang</h3>
                    <h3 className='text-xs'>13 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Quality Alert</h1>
                    <h3 className='text-xs'>Pasir Mas</h3>
                    <h3 className='text-xs'>19 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Flood Warning</h1>
                    <h3 className='text-xs'>Kuala Krai</h3>
                    <h3 className='text-xs'>29 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
            <div className='bg-red-100 flex items-center justify-between p-2 rounded-lg mt-2'>
                <div>
                    <h1 className='text-md font-semibold leading-4'>Reservoir Level Warning</h1>
                    <h3 className='text-xs'>Rantau Panjang</h3>
                    <h3 className='text-xs'>13 January 2024</h3>
                </div>
                <p>&gt;</p>
            </div>
        </div>
    </div>
  )
}

export default Alert