"use client"
import React from 'react'
import YouTube from 'react-youtube';
import Markdown from 'react-markdown'
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  
function ChapterContent({chapter,content}) {
    console.log(content)
    console.log(Array.isArray(content),"array or not")
   
    
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl'>{chapter?.name}</h2>
        <p className='text-gray-500'>{chapter?.about}</p>

        {/* Video  */}
        <div className='flex justify-center items-center my-5'>
        <YouTube videoId={content?.videoId} opts={opts}/>
        </div>
        <div className=''>
           {
            content?.content?.map((item,index)=> (
                <div key={index} className='font-bold mb-5 bg-sky-50 rounded-lg p-5'>
                  <h2>{item.title}</h2>
                  <Markdown>{item?.explanation}</Markdown>
                  
                    {item.code &&<div className='p-4 mt-3 rounded-md bg-black text-green-500'>
                    <pre><code>
                        {item.code.replace('<precode>','').replace('</precode>','')}
                      </code></pre>
                    </div>}
                </div>
            ))
           }
        </div>
        {/* Content  */}
       

    </div>
  )
}

export default ChapterContent