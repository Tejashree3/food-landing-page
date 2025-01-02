import React, { useEffect, useState } from 'react'
import light from '../assets/website/light-mode-button.png'
import dark from '../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme ,setTheme]=useState(

        localStorage.getItem('theme') ? localStorage.getItem("theme")
    : "light"    )

const element =document.documentElement;

useEffect (()=>{
    localStorage.setItem('theme' ,theme)
    if(theme === "dark")
    {
        element.classList.add ("dark")

        element.classList.add ("dark")
    }else{
        element.classList.remove ("dark")
        element.classList.remove ("light")


    }
})


  return (
    <div className='relative'>
        <img src={light}
        onClick={()=> setTheme (theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
            theme=== "dark" ? "opacity-0"  : "opacity-100"
        }`}
        />
         <img src={dark}
          onClick={()=> setTheme (theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer`}
        />

    </div>
  )
}

export default DarkMode