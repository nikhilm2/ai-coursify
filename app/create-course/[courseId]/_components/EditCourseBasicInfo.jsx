import React, { useEffect, useState } from 'react'
import {HiPencilSquare} from 'react-icons/hi2'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CourseList } from '@/configs/schema'
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
  
function EditCourseBasicInfo({course,refreshData}) {
    const [name,setName] = useState([])
    const [description,setDescription] = useState([])

    useEffect(()=>{
        setName(course?.courseOutput?.courseName)
        setDescription(course?.courseOutput?.description)
    },[course])

    const onUpdateHandler = async () => {
        course.courseOutput.courseName = name;
        course.courseOutput.description = description
        const result = await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id})
        console.log(result)
        refreshData(true)
    }
  return (
    <Dialog>
  <DialogTrigger><HiPencilSquare/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course Title & Description</DialogTitle>
      <DialogDescription>
       <div className='mt-3'>
        <div>
        <label>Course Title</label>
        <Input onChange={(e)=>setName(e.target.value)} defaultValue={course?.courseOutput?.courseName}/>
        </div>
        <div>
        <label>Description</label>
        <Textarea onChange={(e)=>setDescription(e.target.value)} className='h-40' defaultValue={course?.courseOutput?.description}/>
        </div>
        
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogClose>
        <Button onClick={onUpdateHandler}>Update</Button>
    </DialogClose>
  </DialogContent>
</Dialog>

  )
}

export default EditCourseBasicInfo