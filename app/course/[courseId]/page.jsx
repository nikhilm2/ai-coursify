"use client"
import Header from '@/app/_components/Header'
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList'
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo'
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function Course({params}) {
    const [course,setCourse] = useState([])
    useEffect(()=>{
        params&&GetCourse()
    },[])
    const GetCourse=async()=> {
        const result = await db.select().from(CourseList)
        .where(eq(CourseList?.courseId,params?.courseId))

        setCourse(result[0])
        console.log(result)
    }
  return (
    <div>
        <Header/>
        
        <div className='px-10 p-10 md:px-20 lg:px-44'>
        {
          course?.id>0?
        <div>
        <CourseBasicInfo course={course} edit={false}/>
        <CourseDetail course={course}/>
        <ChapterList course={course} edit={false}/>
        </div>
        :
        [1,2,3,4,5].map((item,index)=>(
          <div key={index} className='w-full mt-5
          bg-slate-200 animate-pulse rounded-lg h-[270px]'>

          </div>
        ))

      }
        </div>
        
    </div>
  )
}

export default Course