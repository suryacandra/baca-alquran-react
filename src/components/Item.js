import React from 'react'

const Item = (props) => {

  return (
    <div className="cursor-pointer shadow-lg p-5 m-2 bg-white hover:bg-blue-100 active:bg-blue-300 active:scale-95" onClick={() => props.see(props.id)}>
      <div className="grid grid-cols-4">
        <span className="self-center">{props.id}.</span>
        <div className="col-span-2">
          <h1 className="text-lg font-mono">{props.nama} ({props.ayat})</h1>
          <p className="italic text-sm">"{props.arti}"</p>
        </div>
        <h2 className="self-center place-self-end">{props.namaArab}</h2>
        
      </div>
    </div>
  )
}

export default Item