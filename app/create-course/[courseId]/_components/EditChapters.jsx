import React, { useEffect, useState } from 'react'
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
import { HiPencilSquare } from 'react-icons/hi2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
import { CourseList } from '@/configs/schema'
  
function EditChapters({course,index,refreshData}) {

    const Chapters = course?.courseOutput?.chapters
    const [name,setName] = useState()
    const [about,setAbout] = useState()

    useEffect(()=>{
        setName(Chapters[index]?.name)
        setAbout(Chapters[index]?.about)
    },[course])

    const onUpdateHandler =async () => {
        course.courseOutput.chapters[index].name= name
        course.courseOutput.chapters[index].about = about
        const result = await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id})
        console.log(result)
        refreshData(true)
    }   
  return (<>
    <Dialog>
  <DialogTrigger><HiPencilSquare/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter</DialogTitle>
      <DialogDescription>
      <div className='mt-3'>
        <div>
        <label>Chapter Title</label>
        <Input defaultValue={Chapters[index]?.name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
        <label>About</label>
        <Textarea onChange={(e)=>setAbout(e.target.value)} className='h-40' defaultValue={Chapters[index]?.about}/>
        </div>
        
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogClose>
        <Button onClick={onUpdateHandler}>Update</Button>
    </DialogClose>
  </DialogContent>
</Dialog>
</>

  )
}

export default EditChapters