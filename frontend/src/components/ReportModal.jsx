import React from 'react'

const ReportModal = ({visible}) => {

    if (!visible) return null

  return (
    <div className='flex items-center justify-center fixed inset-0 bg-black/80 z-[99] text-black backdrop-blur-sm'>
        <div className='bg-white p-4 rounded-full'>my new report</div>
    </div>
  )
}

export default ReportModal