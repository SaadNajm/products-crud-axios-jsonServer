import React, { useState } from 'react'
import { saveProduct } from '../app/app'

const NewProduct = () => {
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [checked,setChecked]=useState(false)
  const handleSaveProduct = (e) => {
    e.preventDefault()
    let product = { name: name, price: price, checked: checked };
    saveProduct(product).then(resp => {
      console.log(JSON.stringify(resp.data));
    });
  };
  return (
    <div className='row p-1'>
     <div className='col-md-6'>
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={handleSaveProduct}>
            <div className='mb-3'>
             <label className='form-label'>Name :</label>
             <input  value={name} onChange={(e)=>setName(e.target.value)} className='form-control'></input>
            </div>
            <div className='mb-3'>
             <label className='form-label'>Price :</label>
             <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='form-control'></input>
            </div>
            <div className='form-check'>
            <input value={checked} onChange={(e)=>setChecked(e.target.value)} className='for-check-input' type='checkbox'/>
            <label className='form-check-label'>Checked</label>
            </div>
            <button className='btn btn-success'>Save</button>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default NewProduct