import React,{useState,useEffect,useRef} from 'react'
import { submitComment } from '@/services';
const CommentsForm = ({slug}) => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()
    useEffect(() => {
      nameEl.current.value = window.localStorage.getItem('name')
      emailEl.current.value = window.localStorage.getItem('email')
    
    }, [])
    const handleCommentSubmission = () =>{
          setError(false);
          const {value:comment}= commentEl.current;
          const {value:email}= emailEl.current;
          const {value:name}= nameEl.current;
          const {value:storeData}= storeDataEl.current;
          
          if(!comment || !email || !name){
            setError(true);
            console.log('error is in the handleSubmission')
            return;
          }
          const commentObj={name,email,comment,slug}
          if(storeData){
            window.localStorage.setItem('name',name);
            window.localStorage.setItem('email',email);
          }
          else{
            window.localStorage.removeItem('name',name);
            window.localStorage.removeItem('email',email);
          }
          submitComment(commentObj).then((res)=>{
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000);
          }).catch((error)=>console.log(error));
    }
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 dark:bg-slate-700  text-gray-700 dark:text-slate-300" placeholder="Comment" name="comments" />

        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input type="text" ref={nameEl} placeholder="Name" name="name" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 dark:bg-slate-700 focus:ring-gray-200 bg-gray-100 text-gray-700 dark:text-slate-300 sm:col-span-3 lg:col-span-1"/>
          <input type="text" ref={emailEl} placeholder="Email" name="email" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 dark:bg-slate-700 focus:ring-gray-200 bg-gray-100 text-gray-700 dark:text-slate-300 sm:col-span-3 lg:col-span-2"/>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="container">
            <input type="checkbox" ref={storeDataEl} id="storeData" name="storeData" className="cursor-pointer"/>
            <label htmlFor="storeData" className="text-gray-500 cursor-pointer px-2">Save my email and name for the next time I comment</label>
          </div>
        </div>
        {error && <p className="text-xs text-red-500 ">All fields are required.</p>}
        <div className="mt-8">
          <button type="button" onClick={handleCommentSubmission} className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'>
            Post Comment
          </button>
          {showSuccessMessage && <span className="float-right text-xl font-semibold mt-3 text-green-500">Comment Submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm