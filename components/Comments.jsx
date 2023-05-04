import React, {useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '@/services'

const Comments = ({slug}) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments(slug).then((result)=>setComments(result)).catch((error)=>console.log(error))
  })
  console.log(comments)
  
  return (
    <>
    {comments.length>0 && (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b border-gray-400 dark:border-gray-600 pb-4">
          {`${comments.length} Comments`}
        </h3>
        {comments.map((comment)=>(
          <div className="border-b border-gray-100 dark:border-gray-600 mb-4 pb-4" key={comment.createdAt}>
            <p className="mb-4">
            <span className="font-semibold">{comment.name}</span>
            {` on ${moment(comment.createdAt).format(`MMM DD, YYYY`)}`}
            </p>
            <p className="whitespace-pre-line text-gray-600 dark:text-slate-300 w-full">{parse(comment.comment)}</p>
          </div>
        ))}
      </div>
    )}
    </>
  )
}

export default Comments