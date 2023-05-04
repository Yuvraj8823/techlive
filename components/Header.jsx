import React, { useContext,useEffect,useState } from 'react'
import Link from 'next/link'
import { getCategories } from '@/services'
import { useTheme } from 'next-themes'
import {MoonIcon,SunIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const {systemTheme,theme,setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    const [categories, setCategories] = useState([])
    useEffect(() => {
      getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    useEffect(() => {
      setMounted(true)
    }, [])
    const renderThemeChanger = () => {
        if(!mounted) return null;
        const currentTheme = theme==='system'?systemTheme:theme;    
        if(currentTheme === 'dark'){
            return (
                <div className=" w-15 h-2" onClick={()=>setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
</div>

            )
        }
        else{
            return(
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={()=>setTheme('dark')}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          
        )}
    }
    function rendorIcons(theme){
        
    }
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full flex justify-between border-slate-300 py-8">
            <div className=" block">
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white '>
                        Tech.live
                    </span>
                </Link>
            </div>
            <div className="flex">
            <div className="hidden md:flex">
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right transition duration-500 mt-2 align-middle text-white ml-4 foznt-semibold cursor-pointer hover:text-pink-400 ">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
            </div>
            <div className="flex w-10">
            {renderThemeChanger()}
            </div>
        </div>
    </div>
  )
}

export default Header