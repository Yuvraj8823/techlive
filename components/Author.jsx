import React from 'react'

const Author = ({author}) => {
  return (
    
    <div className="flex flex-col justify-center items-center text-center mt-20 mb-8 p-8  rounded-lg bg-gray-800 bg-opacity-20 dark:bg-opacity-80">
      <div>
      <img src={author.photo.url} alt={author.name} height="10px" width="50px" className=' inline-block object-cover rounded-full align-middle'/>
      
      <h3 className="inline-block text-white m-4 text-xl font-bold">{author.name}</h3>
      </div>
      <p className="text-white text-lg">{author.bio}</p>
      
    </div>
  )
} 

export default Author