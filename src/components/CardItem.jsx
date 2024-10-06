import React, { useEffect, useState } from 'react'
import productsData from '../productsData'

const CardItem = (props) => {

  // const [price, setPrice] = useState(0)
  // const [amount, setAmount] = useState(props.amount)


  // const handlePrice = () => {
  //   let ans = 0;
  //   ans += amount * props.price
  //   setPrice(ans)
  // }

  // const handleAmount = (amount) => {
  //    let defaultAmount = amount;
  //    defaultAmount += 1;
  //    setAmount(defaultAmount)
  // }

  // const handleDecrease = (amount) => {
  //   let defaultAmount = amount;
  //    defaultAmount -= 1;
  //    setAmount(defaultAmount)
  // }


  // useEffect (() => {
  //   handlePrice()
  // })





  return (
    <div className='bg-white bg-opacity-70 w-2/3 h-2/5 rounded-xl flex ml-6 mb-6 p-6 shadow-md'>
      <div className='overflow-hidden mr-6' >
        <img src= {`/${props.img}`} alt="" className='float-left w-44 h-44 rounded-xl object-cover'/>
      </div>
      <div>
        <div className='w-72'>
        <span className='text-gray-600 font-bold text-xl w-full'>{props.name}</span>
        </div>
      <div>
        <div className='flex items-center gap-4 mt-2'>
          <button type="button" className='bg-blue-700 opacity-35 rounded-xl shadow-inner border-white p-2 w-6 h-6 flex justify-center items-center' onClick={props.decrease} id = {props.id}><span className='text-white text-xl '>-</span></button>
          <span className='text-gray-600 text-base font-bold' >{props.amount}</span>
          <button className ='bg-blue-700 opacity-35 rounded-xl shadow-inner border-white p-2 w-6 h-6 flex justify-center items-center' onClick={props.increase} id = {props.id}><span className='text-white text-xl'>+</span></button>
          <button type="button" onClick={props.handleRemove} id={props.id}>
            <img src="../../deleteIcon.png" alt="" className='ml-16' />
          </button>
        </div>
        <div className='mt-5'>
          <span className='text-gray-600 font-bold text-xl'>{props.priceTotal}₽</span>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default CardItem