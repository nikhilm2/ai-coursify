import { UserInputContext } from '@/app/_context/UserInputContext'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)
    const handleInputChange=(fieldName,value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
  return (
    <div className='mx-20 lg:mx-44'>
        {/*Topic*/}
            <div className='mt-5'>
                <label >Write the topic for which you want to generate a course:</label>
                <Input placeholder='Topic' onChange={(e)=>handleInputChange('topic',e.target.value)} defaultValue={userCourseInput?.topic}></Input>
            </div>
            <div className='mt-5'>
                <label>Tell us more, what you to include? (Optional)</label>
                <Textarea placeholder='About Your Course' onChange={(e)=>handleInputChange('description',e.target.value)} defaultValue={userCourseInput?.description}></Textarea>
            </div>
        {/* Text Area Desc */}
    </div>
  )
}

export default TopicDescription