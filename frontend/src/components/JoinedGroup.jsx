import React from 'react'

const JoinedGroup = () => {
  return (
    <div>
        <div className='p-4'>
            <h1 className='font-semibold text-lg'>Joined Group</h1>
            <div className='bg-blue-100 rounded-lg p-2 px-4 flex justify-between items-center mt-2'>
                <div>
                    <p className='text-sm font-semibold'>Wakaf Che Yeh</p>
                    <p className='text-xs'>230k joined</p>
                </div>
                <div>
                    <p className=' text-black'>&gt;</p>
                </div>           
            </div>
            <div className='bg-blue-100 rounded-lg p-2 px-4 flex justify-between items-center mt-2'>
                <div>
                    <p className='text-sm font-semibold'>Kota Bharu</p>
                    <p className='text-xs'>280k joined</p>
                </div>
                <div>
                    <p className=' text-black'>&gt;</p>
                </div>           
            </div>
            <div className='bg-blue-100 rounded-lg p-2 px-4 flex justify-between items-center mt-2'>
                <div>
                    <p className='text-sm font-semibold'>Kuala Krai</p>
                    <p className='text-xs'>180k joined</p>
                </div>
                <div>
                    <p className=' text-black'>&gt;</p>
                </div>           
            </div>
            <div className='bg-blue-100 rounded-lg p-2 px-4 flex justify-between items-center mt-2'>
                <div>
                    <p className='text-sm font-semibold'>Rantau Panjang</p>
                    <p className='text-xs'>300k joined</p>
                </div>
                <div>
                    <p className=' text-black'>&gt;</p>
                </div>           
            </div>
        </div>
    </div>
    
  )
}

export default JoinedGroup