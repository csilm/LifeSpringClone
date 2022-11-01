import React,{useState}  from 'react'
import "../static/css/hpcontent.css"
import Info from './Info.json'
import Card from './Card'
import Navbar from '../Navbar/Navbar'

const Prof = () => {
  const [active,setactive]=useState("ALL");

  return (
    <div>
     <Navbar/>
     <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
        <a href="">Home</a> / Professionals
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-center flex-wrap'>
        <div className='w-full h-auto px-10 pt-8'>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('ALL')}}>All</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Child')}}>Child and Adolescent Psychiatrist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Counselor')}}>Counselor</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Dermatologist')}}>Dermatologist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Therapist')}}>Developmental Therapist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('ENT')}}>ENT</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Gynecologist')}}>Gynecologist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Internal')}}>Internal Medicine</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Psychiatrist')}}>Psychiatrist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Psychologist')}}>Psychologist</button>
          <button className='duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight' onClick={()=>{setactive('Sexual')}}>Sexual Health</button>
           </div> 
           <div className='w-full h-auto p-8 flex flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start lg:pl-14'>
          {active==='ALL' && Info.map((items)=>{ return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> })} 
          {active==='Child' && Info.map((items) =>
          {
          if(items.prof==='CHILD-ADOLESCENT-PSYCHIATRIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          }
         )}
          {active==='Counselor' && Info.map((items)=>{
          if(items.prof==='COUNSELOR')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Dermatologist' && Info.map((items)=>{
          if(items.prof==='DERMATOLOGIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Therapist' && Info.map((items)=>{
          if(items.prof==='DEVELOPMENTAL-THERAPIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='ENT' && Info.map((items)=>{
          if(items.prof==='ENT')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Gynecologist' && Info.map((items)=>{
          if(items.prof==='GYNECOLOGIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Internal' && Info.map((items)=>{
          if(items.prof==='INTERNAL-MEDICINE')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Psychiatrist' && Info.map((items)=>{
          if(items.prof==='PSYCHIATRIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Psychologist' && Info.map((items)=>{
          if(items.prof==='PSYCHOLOGIST')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
          {active==='Sexual' && Info.map((items)=>{
          if(items.prof==='Sexual Health')
          {
           return <Card img={items.img} prof={items.prof} name={items.name} degree={items.degree} /> }
          })}
         </div> 
      </div>
    </div>
  )
}

export default Prof