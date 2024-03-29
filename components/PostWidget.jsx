import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import moment from 'moment'
import { getRecentPosts,getSimilarPosts } from '@/services'

const PostWidget = ({categories,slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug).then((result)=>setRelatedPosts(result))
    }
    else{
      getRecentPosts().then((result)=>setRelatedPosts(result))

    }
  
    
  }, [slug])
  
  
  return (
    <div className="bg-slate-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-8 ">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug?'Related Posts':'Recent Posts'}
      </h3>
      {relatedPosts.slice(0).reverse().map((post)=>(
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url} alt={post.title} height='60px' width='60px' />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
            {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-sm'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget