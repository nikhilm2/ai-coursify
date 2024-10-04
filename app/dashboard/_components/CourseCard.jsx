import Image from 'next/image'
import React from 'react'
import {  HiOutlineBookOpen } from 'react-icons/hi'
import { HiEllipsisVertical } from 'react-icons/hi2'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DropDownOption from './DropDownOption'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'

function CourseCard({course,refreshData,displayUser=false}) {
  const handleOnDelete = async() => {
    const resp = await db.delete(CourseList)
    .where(eq(CourseList.id,course?.id))
    .returning({id:CourseList?.id})
    
    if(resp){
      refreshData()
    }
  }
  return (
    <div className='shadow-sm rounded-lg border-b p-2 transition-all cursor-pointer mt-4 hover:bg-blue-50'>
        <Link href={'/course/'+course?.courseId}>
        <Image className='w-full h-[200px] object-cover' src={course?.courseBanner} width={300} height={200} alt='banner'/>
        </Link>
        
        <div className='p-2 justify-between items0-center'>
            <h2 className='font-medium text-lg flex justify-between items-center '>{course?.courseOutput?.courseName}
              {!displayUser &&<DropDownOption handleOnDelete={()=>handleOnDelete()}><HiEllipsisVertical/></DropDownOption>}</h2>
            
            <p className='text-sm text-gray-400 my-1'>{course?.category}</p>
            <div className='flex items-center justify-between'>
                <h2 className='flex gap-2 items-center p-1 text-primary text-sm rounded-sm bg-purple-50'><HiOutlineBookOpen/> {course?.courseOutput?.numberOfChapters} Chapters</h2>
                <h2 className='bg-blue-50 text-primary rounded-sm text-sm'>{course?.level}</h2>
            </div>

            {displayUser && <div className='gap-3 flex items-center'>
              <Image src={course?.userProfileImage} width={35} height={35} className='rounded-full'/>
              <h2 className='text-sm text-gray-500'>{course?.username}</h2>
            </div>}
        </div>
    </div>
  )
}

export default CourseCard