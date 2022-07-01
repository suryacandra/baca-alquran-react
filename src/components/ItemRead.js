import React, { useState, useRef, useEffect } from 'react'

const ItemRead = props => {
    const {nama, namaArab, jumlahAyat, ayat, audio, turun, selanjutnya, sebelumnya, back, next} = props
    const [play, setPlay] = useState(false)
    const [toTop, setToTop] = useState(false)
    const audioRef = useRef()

    const seeAyat = ayat.map(item =>
    <div className="bg-white shadow-lg p-5 m-2 md:mx-auto md:w-3/4" key={item.id}>
        <div className="flex flex-col md:grid md:grid-cols-2">
            <span className="text-sm">{item.surah} : {item.nomor}</span>
            <span className="text-md italic md:text-sm">{item.idn}</span>
            <span className="self-end font-serif text-2xl break-all tracking-widest mt-10 text-right md:row-start-1 md:col-start-2 md:mt-0 md:text-4xl">{item.ar}</span>
            <div className="self-end text-right mt-5" dangerouslySetInnerHTML={{__html: item.tr}} />
        </div>
    </div>)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    setToTop(true)
                } else {
                    setToTop(false)
                }
            })
        }
    }, [])


const playAudio = () => {
        audioRef.current.play()
        setPlay(true)
    }

const pauseAudio = () => {
        audioRef.current.pause()
        setPlay(false)
    }

const backHandler = id => {
    back(id)
}

const nextHandler = id => {
    next(id)
}

const topHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const toTopDiv = <div onClick={topHandler} className="flex justify-center bottom-5 left-5 fixed bg-green-600 w-[50px] h-[50px] rounded-full animate-bounce">
        <div className="w-[40px] h-[40px]">
            <div className="mx-auto mt-3 border-t-2 border-l-2 border-black w-1/2 h-1/2 rotate-45"></div>
            <div className="mx-[19px] -mt-6 border-l-2 border-black w-1/2 h-3/4"></div>
        </div>
    </div>

  return (
    <div className="mt-28">
        <div className="m-2 flex mb-10">
            <button className="bg-slate-300 p-2 w-full rounded-lg border-2 border-black shadow-lg active:scale-95 md:w-1/2 md:mx-auto" onClick={props.kembali}>Kembali</button>
        </div>
        <div className="flex justify-between gap-2 m-2 p-2 ">
            {sebelumnya === false ? '' : <button onClick={() => backHandler (sebelumnya.id)} className="bg-green-300 p-2 rounded-lg px-5">
               ({sebelumnya.nama_latin}) Surat Sebelumnya
            </button>}
            <button onClick={() => nextHandler (selanjutnya.id)} className={`bg-green-300 p-2 rounded-lg px-5 ${sebelumnya === false && 'mx-auto'}`}>
               ({selanjutnya.nama_latin}) Surat Selanjutnya
            </button>
        </div>
        <div className="flex flex-col gap-4 shadow-lg p-5 m-2 bg-white">
            <h1 className="font-mono font-bold tracking-widest text-2xl">{nama} - {namaArab}</h1>
            <div className="flex justify-between">
                <span>Jumlah Ayat : {jumlahAyat}</span>
                <span>Tempat Turun : {turun}</span>
            </div>
            <audio ref={audioRef} src={audio}></audio>
            {play ? <button className="p-2 px-5 w-full bg-red-300 rounded-lg" onClick={pauseAudio}>Pause Audio</button> : <button className="p-2 px-5 w-full bg-blue-300 rounded-lg" onClick={playAudio}>Play Audio</button>}
        </div>
            {seeAyat}
        
        {toTop && toTopDiv}
    </div>
  )
}


export default ItemRead