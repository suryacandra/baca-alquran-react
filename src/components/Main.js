import React, { useState } from 'react'
import ItemList from './ItemList'

const Main = () => {
  const [see, setSee] = useState(true)

  return (
    <div className="flex flex-col">
      {see && <div className="bg-[#bcecca]">
        <div className="font-mono pt-28 p-10 shadow-lg flex flex-col items-center text-center gap-5">
          <p className="u">Terima kasih untuk <a className="font-mono tracking-widest font-bold text-blue-600 underline cursor-pointer" href="https://santrikoding.com/" target="_blank" rel="noreferrer">Santrikoding</a> yang telah menyediakan <a className="bfont-mono tracking-widest font-bold text-blue-600 underline cursor-pointer" href="https://quran-api.santrikoding.com/" target="_blank" rel="noreferrer">
            API
            </a></p>
          <img src="https://quran.santrikoding.com/logo.png" className="w-1/3 md:w-1/6 bg-green-600 rounded-full p-2 border-4 border-yellow-300" alt="logo" />
          <h1 className="text-center md:text-4xl">Baca Al-Qur'an Online</h1>
          <p>
            Membaca Al-Qur'an secara online dengan mudah dan cepat.
          </p>
        </div>
      </div>}
      <div className="mt-2 w-full">
        <ItemList see={setSee} />
      </div>
    </div>
  )
}

export default Main