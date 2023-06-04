import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useEffect, useState } from 'react'

function App() {
 
  const loadedData=useLoaderData()
  const[coffees,setCoffees]=useState(loadedData)
 
  
  return (
    
    <div className='m-20'>
      
        
      <h1 className='text-5xl text-center text-purple-500 my-20'>Coffee Maker hot coffee:{coffees.length}</h1>
      <button className=' btn  text-green-500'><Link to='addCoffee'>Add Coffee</Link></button>
      <div className='grid md:grid-cols-2 gap-4'>
        {

          coffees.map(coffee=><CoffeeCard coffee={coffee} key={coffee._id} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
