import React from 'react'
import dashboard from "../assest/dashboard.svg"
import assessment from "../assest/note_alt.svg"
import myLibrary from '../assest/quiz.svg'
import roundStatus from "../assest/admin_meds.svg"

console.log('10')

const Aside = () => {
  return (
    <div className='inline-flex bg-white items-start gap-5 flex-shrink-0 rounded-t-xl mt-1 overflow-hidden'>
        <div className='w-auto  h-screen flex flex-col px-6 pt-1
    items-center'>

        <div className='w-24 h-24 cursor-pointer 
        rounded-lg flex items-center justify-center flex-col'>
                <img src={dashboard} alt="dashboard" className='w-5 h-5' />
                <p className='text-[#1c4980] text-xs font-medium
                leading-4 pt-2'>Dashboard</p>
        </div>

        <div className='w-auto h-auto p-3 cursor-pointer border border-[#0073E6] 
        rounded-lg flex items-center justify-center flex-col bg-[#E5F1FC]'>
          <div className='flex flex-col items-center '>
          <img src={assessment} alt="assessment" className='w-5 h-5' />
                <p className='text-[#0073E6] text-xs font-medium
                leading-4 pt-2'>Assessment</p>
          </div>
                
        </div>

        <div className='w-24 h-24 cursor-pointer 
        rounded-lg flex items-center justify-center flex-col'>
                <img src={myLibrary} alt="myLibrary" className='w-5 h-5' />
                <p className='text-[#1c4980] text-xs font-medium
                leading-4 pt-2'>My Library</p>
        </div>
        <div  className='h-[1px] w-20 border border-b-[#BACBD5] border-dashed'/>
        
        <div className=' w-24 h-24 cursor-pointer pt-10
        rounded-lg flex items-center justify-center flex-col gap-3'>
            <div className='flex h-5 px-2 py-1 items-center border 
            border-[#D63500] rounded-3xl pb-[-10px] bg-[#FBEBEA]'>
                <p className='text-[#D63500] text-[10px]'>Admin</p>
            </div>
            
                <img src={roundStatus} alt="roundStatus" className='w-5 h-5' />
                <p className='text-[#1c4980] text-xs font-medium
                leading-4 '>Round Status</p>
        </div>

        
    </div>
        
    </div>
  )
}

export default Aside