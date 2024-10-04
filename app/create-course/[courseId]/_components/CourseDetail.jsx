import React from 'react'
import { FcBarChart, FcBookmark, FcClock, FcTimeline, FcVideoFile } from 'react-icons/fc'

function CourseDetail({course}) {
  return (
    <div className='border p-6 roundedxl shadow-sm mt-3'>
        <div className='grid grid-cols-2 md:grid-cols-4'>
            <div className='flex gap-2'>
                <FcBarChart className='text-4xl text-primary'/>
                <div>
                    <h2>Skill Level</h2>
                    <h2 className='font-medium'>{course?.level}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <FcBookmark className='text-4xl text-primary'/>
                <div>
                    <h2>No. of Chapters</h2>
                    <h2 className='font-medium'>{course?.courseOutput?.numberOfChapters}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <FcClock className='text-4xl text-primary'/>
                <div>
                    <h2>Duration</h2>
                    <h2 className='font-medium'>{course?.courseOutput?.duration}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <FcVideoFile className='text-4xl text-primary'/>
                <div>
                    <h2>Video Included</h2>
                    <h2 className='font-medium'>{course?.includeVideo}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail