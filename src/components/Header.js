import React, { useState } from 'react'

const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <div>
      <div className="bg-green-400 p-5 flex justify-between shadow-lg fixed w-full z-50">
        <h1 className="self-center text-2xl font-mono tracking-widest">Baca Al-quran</h1>
        <div onClick={() => setNav(item => !item)} className={`cursor-pointer flex flex-col gap-2 items-center justify-center w-10 h-10 outline outline-offset-2 ${nav ? 'outline-yellow-300' : 'outline-green-700'} rounded-lg active:scale-90`}>
          <div className={`border-b-2 ${nav ? 'border-yellow-300' : 'border-black'} w-6`}></div>
          <div className={`border-b-2 ${nav ? 'border-yellow-300' : 'border-black'} w-6`}></div>
          <div className={`border-b-2 ${nav ? 'border-yellow-300' : 'border-black'} w-6`}></div>
        </div>
      </div>
      {nav && <div className="w-full bg-green-400 p-5 font-mono fixed top-[80px] z-50 border-t-2 border-black">
        <ul className="flex flex-col items-center gap-5 text-center">
          <a className="bg-yellow-400 p-2 w-full rounded-full cursor-pointer active:scale-95" href="https://github.com/suryacandra" target="_blank" rel="noreferrer">
            <li>My Github</li>
            </a>
          <a className="bg-yellow-400 p-2 w-full rounded-full cursor-pointer active:scale-95" href="https://quran-api.santrikoding.com/" target="_blank" rel="noreferrer">
            <li>API Documentation</li>
            </a>
        </ul>
      </div>}
    </div>
  )
}

export default Header