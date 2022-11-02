import React from 'react'
import Info from '../Proff/Info.json'
import Card from '../Proff/Card'

const Psychologist = () => {
    return (
        <div>
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href='#h'>Home</a> / Professionals / Psychologist
            </div>
            <div className='w-full h-auto p-8 flex flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start lg:pl-14'>
            {Info.map((items) => {
            if (items.prof === 'PSYCHOLOGIST') {
              return <Card key={items.id} img={items.img} prof={items.prof} name={items.name} degree={items.degree} />
            }
            return null
          })}
           </div>
        </div>
    )
}

export default Psychologist