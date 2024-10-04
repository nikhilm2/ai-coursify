
import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)
    const handleCategoryChange=(category)=>{
        setUserCourseInput(prev=>({
            ...prev,
            category:category
        }))
    }
  return (
    <div >
    <h2 className='my-10'>Select the Course Category:</h2>
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        
        {
            CategoryList.map((item,index)=>(
                <div className={`flex flex-col p-5 border items-center justify-center rounded-xl hover:border-primary hover:bg-blue-100 cursor-pointer ${userCourseInput.category==item.name && 'border-primary bg-blue-300' }`} onClick={()=>handleCategoryChange(item.name)}>
                    <Image src={item.icon} width={50} height={50} alt='logo'/>
                    <h2>{item.name}</h2>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default SelectCategory