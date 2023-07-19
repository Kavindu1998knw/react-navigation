import React, {useState } from 'react'
import '../styles/form.css'

export const Form = () => {
    const [name,setName]=useState('')
    const [city,setCity]=useState('')
    const [position,setPosition]=useState('')
    const [image,setImage]=useState(null)
    const [data,setData]=useState([])
    const [key,setkey]=useState(Date.now())

    const btnSubmitOnClick = () =>{
      setData([...data,{name,city,position,image}])
      name.length?setName(''):setName(name)
      city.length?setCity(''):setCity(city)
      position.length?setPosition(''):setPosition(position)
      setkey(Date.now())
    }
    console.log(data)

  return (
    <div className='container'>
      <div className="leftForm">
        <input type="text" placeholder='Your Name' value={name} onChange={(e)=>(setName(e.target.value))}/>
        <input type="text" placeholder='Your City'value={city} onChange={(e)=>(setCity(e.target.value))}/>
        <input type="text" placeholder='Your Position' value={position} onChange={(e)=>(setPosition(e.target.value))}/>
        <input type="file" accept='image/*' key={key} onChange={(e)=>{
          const file=e.target.files[0];
          setImage(URL.createObjectURL(file))
        }}/>
        <button onClick={btnSubmitOnClick}>Submit</button>
      </div>
      <div className="rightContainer">

      </div>  
    </div>
  )
}
