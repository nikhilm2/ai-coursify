"use client"

import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { FcDocument, FcRadarPlot, FcRatings } from 'react-icons/fc'
import SelectCategory from './_components/SelectCategory'
import TopicDescription from './_components/TopicDescription'
import SelectOption from './_components/SelectOption'
import { UserInputContext } from '../_context/UserInputContext'
import { GenerateCourseLayout_AI } from '@/configs/AiModel'
import LoadingDialog from './_components/LoadingDialog'
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs'
import { CourseList } from '@/configs/schema'
import { db } from '@/configs/db'
import { useRouter } from 'next/navigation'

function CreateCourse() {

    const stepperOption = [
        {
            id:1,
            name: 'Category',
            icon: <FcDocument/>
        },
        {
            id:2,
            name: 'Topic & Desc.',
            icon: <FcRadarPlot/>
        },
        {
            id:3,
            name: 'Options',
            icon: <FcRatings/>
        }
    ]
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)
    const [loading,setLoading] = useState(false)
    const [activeIndex,setActiveIndex] = useState(0)
    const {user} = useUser()
    const router = useRouter()
    useEffect(()=>{
        console.log(userCourseInput)
    },[userCourseInput])

    const checkStatus = () =>{
      
       if(activeIndex==0 && (userCourseInput?.category?.length==0 || userCourseInput?.category==undefined)){
            return true
             
        }
        if(activeIndex==1 && (userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined)){
            return true
             
        }

        else if(activeIndex==2 && (userCourseInput?.level==undefined || userCourseInput?.displayVideo==undefined || userCourseInput?.duration==undefined || userCourseInput?.chapters?.length==0 || userCourseInput?.chapters==undefined )){
            return true
        }
        
     
        return false;
    }

    const GenerateCourseLayout = async() => {
        setLoading(true)
        const BASIC_PROMPT = 'Generate A Course Tutorial on following detail with field as Course Name, Description, along with Chapter Name, about, Duration.'
        const USER_INPUT_PROMPT = 'Category:'+ userCourseInput?.category+', Topic:'+userCourseInput?.topic+', Level:'+userCourseInput?.level+', Duration:'+ userCourseInput?.duration+ ', No of Chapters:'+userCourseInput?.chapters+', in JSON format'
        const FINAL_PROMPT =BASIC_PROMPT+USER_INPUT_PROMPT
        console.log(FINAL_PROMPT)
        const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT)
        console.log(result.response?.text())
        console.log(JSON.parse(result.response?.text()))
        setLoading(false)
        SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
    }

    const SaveCourseLayoutInDb = async(courseLayout) =>{
        setLoading(true)
        var id = uuid4()
        const result = await db.insert(CourseList).values({
            courseId:id,
            name: userCourseInput?.topic,
            level: userCourseInput?.level,
            category: userCourseInput?.category,
            courseOutput: courseLayout,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            username: user?.fullName,
            userProfileImage: user?.imageUrl

        })
        console.log("Finish")
       
        setLoading(false)
        router.replace('/create-course/'+id)
    }
  return (
    <div>{/*stepper*/}
    <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-4xl text-primary font-medium mb-10'>Create Course</h2>
        <div className='flex'>
            {stepperOption.map((item,index)=>(
                <div className='flex items-center'>
                    <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                        <div className={`text-3xl bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index && 'bg-blue-200'}`}>
                        {item.icon}
                        </div>
                        <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                       
                    </div>
                    {index!=stepperOption.length-1 && <div className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-300 ${activeIndex-1>=index && 'bg-blue-400'}`}>

                    </div>}
                </div>
            ))}
        </div>
    </div>
    <div className='px-10 md:px-20 lg:px-44 mt-10'>
    {/*Compo*/}
            {activeIndex==0?<SelectCategory/>: 
            activeIndex==1?<TopicDescription/>:
            <SelectOption/>}
    {/* Next Previous Button */}
    <div className='flex justify-between mt-10'>
        <Button disabled={activeIndex==0} variant='ghost' onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
        {activeIndex<2 && <Button disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
       {activeIndex==2 && <Button disabled={checkStatus()} onClick={()=>GenerateCourseLayout()}>Generate Course</Button>}
    </div>
    </div>
    <LoadingDialog loading={loading}/>
    </div>
  )
}

export default CreateCourse


// stepperOption.map((item,index)=>(
//     <div>
//       <div className='flex flex-col items-center w-[50px] md:w-[100px] gap-2'>
//          <div className='flex flex-col items-center'>
//          <div className={`text-2xl bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index && 'bg-primary' }`} >{item.icon}</div>
             
//              <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
//          </div>
//          <div className='h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-500 '>

//          </div>
             
//               </div>
              
         
//     </div>
        
             
//  ))