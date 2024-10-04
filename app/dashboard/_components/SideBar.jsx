"use client"
import { FcHome, FcEngineering, FcShop, FcUndo } from "react-icons/fc";
import React, { useContext } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function SideBar() {
    const {userCourseList,setUserCourseList} = useContext(UserCourseListContext)
    const Menu =[
        {
            id:1,
            name: 'Home',
            icon: <FcHome/>,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Explore',
            icon:<FcEngineering />,
            path: '/dashboard/explore'
        },
        {
            id:3,
            name: 'Upgrade',
            icon: <FcShop/>,
            path:'/dashboard/upgrade'
        },
        {
            id:4,
            name: 'Logout',
            icon: <FcUndo/>,
            path:'/dashboard/logout'
        }
    ]

    const path= usePathname()
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
       <ul>
        {   
            Menu.map((item,index)=>(
                <Link href={item.path}>
                <div className={`flex items-center gap-2 text-gray-500 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path==path && 'bg-gray-100 text-black' }`}>
                    <div className="text-2xl">{item.icon}</div>
                    <div>{item.name}</div>
                </div>
                </Link>
            ))
        }
       </ul>

       <div>
        <Progress value={(userCourseList?.length/5)*100}/>
        <h3 className="text-sm my-2">{userCourseList?.length} Out of <strong>5</strong> Course Created</h3>
        <h2 className="text-xs text-gray-500">Upgrade Your Plan</h2>
       </div>
    </div>
  )
}

export default SideBar