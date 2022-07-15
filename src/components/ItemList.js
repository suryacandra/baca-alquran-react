import React, { useState, useEffect} from 'react'

import Item from './Item'
import ItemRead from './ItemRead'
import Select from 'react-select'


const ItemList = (props) => {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selected, setSelected] = useState('')
  const [filter, setFilter] = useState(false)
  const [see, setSee] = useState(false)
  const [top, setTop] = useState(false)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const result = await fetch('https://quran-api.santrikoding.com/api/surah')
    const data = await result.json()
    const itemData = []
    for(const item of data) {
      itemData.push({
        id: item.nomor,
        nama: item.nama_latin,
        namaArab: item.nama,
        ayat: item.jumlah_ayat,
        arti: item.arti,
      })
    }
    setItems(itemData)
    setFiltered(itemData)
    setSee(false)
    props.see(false)
    setSelected('')
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTop(true)
      } else {
        setTop(false)
      }
    })
  }, [check])

  const topHandler = () => {
    window.scrollTo({
        top: 0
    })
}
  
  const seeHandler = async (id) => {
    setLoading(true)
    const result = await fetch('https://quran-api.santrikoding.com/api/surah/' + id)
    const data = await result.json()
    let itemData = {}
   
    itemData = {
        id: data.nomor,
        nama: data.nama_latin,
        namaArab: data.nama,
        jumlahAyat: data.jumlah_ayat,
        ayat: data.ayat,
        arti: data.arti,
        turun: data.tempat_turun,
        audio: data.audio,
        selanjutnya: data.surat_selanjutnya,
        sebelumnya: data.surat_sebelumnya
      }
    
    setItems(itemData)
    setSee(true)
    props.see(true)
    setTop(false)
    topHandler()
    setLoading(false)
  }

  const backHandler = async (id) => {
    setLoading(true)
    const result = await fetch('https://quran-api.santrikoding.com/api/surah/' + id)
    const data = await result.json()
    let itemData = {}
   
    itemData = {
        id: data.nomor,
        nama: data.nama_latin,
        namaArab: data.nama,
        jumlahAyat: data.jumlah_ayat,
        ayat: data.ayat,
        arti: data.arti,
        turun: data.tempat_turun,
        audio: data.audio,
        selanjutnya: data.surat_selanjutnya,
        sebelumnya: data.surat_sebelumnya
      }
    
    setItems(itemData)
    setLoading(false)
  }

  const nextHandler = async (id) => {
    setLoading(true)
    const result = await fetch('https://quran-api.santrikoding.com/api/surah/' + id)
    const data = await result.json()
    let itemData = {}
   
    itemData = {
        id: data.nomor,
        nama: data.nama_latin,
        namaArab: data.nama,
        jumlahAyat: data.jumlah_ayat,
        ayat: data.ayat,
        arti: data.arti,
        turun: data.tempat_turun,
        audio: data.audio,
        selanjutnya: data.surat_selanjutnya,
        sebelumnya: data.surat_sebelumnya
      }
    
    setItems(itemData)
    setLoading(false)
  }


  const toTopDiv = <div onClick={topHandler} className="flex justify-center bottom-5 left-5 fixed bg-green-600 w-[50px] h-[50px] rounded-full animate-bounce">
        <div className="w-[40px] h-[40px]">
            <div className="mx-auto mt-3 border-t-2 border-l-2 border-black w-1/2 h-1/2 rotate-45"></div>
            <div className="mx-[19px] -mt-6 border-l-2 border-black w-1/2 h-3/4"></div>
        </div>
    </div>

const options = []

  if(!see) {
    for(const item of items) {
      options.push({
        value: item.nama,
        label: item.nama
      })
    }
  }

  const filterHandler = e => {
    setSelected(e)
    if(e){
      const filter = e.value
      const a = items.filter(item => item.nama.toLowerCase().includes(filter.toLowerCase()))
      setFiltered(a)
      setFilter(true)
    } else {
      setFilter(false)
      setFiltered(items)
    }
  }

  const disableFilterHandler = () => {
    setFilter(false)
    setCheck(item => !item)
  }


  return (
    <div className="flex gap-6 flex-col">
      {!see && !loading && <div className="static z-10 mx-5 mt-2 border-2 border-black grid p-2 rounded-lg grid-cols-2">
        <span className="self-center">Cari Surat</span>
      <Select options={options} value={selected} onChange={filterHandler} />
        </div>}
      {loading && <div className="flex justify-center w-full mt-10">
        <span className="text-center">Loading...</span>
        </div>}
      {filter && <div className="m-2">
        <button onClick={disableFilterHandler} className="bg-slate-300 p-2 w-full rounded-lg border-2 border-black active:scale-95">Lihat semua</button>
      </div> }
      <div className="md:grid md:grid-cols-3">
      {!see && !loading && filtered.map(item => <Item key={item.id} id={item.id} nama={item.nama} namaArab={item.namaArab} ayat={item.ayat} arti={item.arti} see={seeHandler} />)}
      </div>
      {see && <ItemRead id={items.id} nama={items.nama} namaArab={items.namaArab} ayat={items.ayat} jumlahAyat={items.jumlahAyat} audio={items.audio} turun={items.turun} selanjutnya={items.selanjutnya} sebelumnya={items.sebelumnya} next={nextHandler} back={backHandler} kembali={fetchData} load={loading} />}
      {top && toTopDiv}
    </div>
  )
}

export default ItemList