
import React from 'react'
import { FcClock } from 'react-icons/fc'
import { HiOutlineCheckCircle } from "react-icons/hi";
import EditChapters from './EditChapters';

function ChapterList({course,refreshData,edit=true}) {
  return (
    <div className='mt-10'>
        <h2 className='font-medium text-xl'>Chapters </h2>
        <div className='mt-2'>
            {course?.courseOutput?.chapters.map((chapter,index)=>(
                <div className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                <div className='flex items-center   gap-5'>
                    <h2 className='bg-primary flex-none  h-10 w-10 rounded-full text-center p-2 text-white'>{index+1}</h2>
                    <div >
                        <h2 className='font-bold text-lg'>{chapter?.name}{edit&& <EditChapters course={course} index={index} refreshData={()=>refreshData(true)}/>}</h2>
                        <p className='text-sm text-gray-400'>{chapter?.about}</p>
                        <p className='flex gap-2 text-primary items-center'><FcClock/>{chapter?.duration}</p>
                    </div>
                </div>
                <HiOutlineCheckCircle className='text-4xl flex-none  text-gray-300' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList