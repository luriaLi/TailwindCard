import { useEffect, useRef, useState } from 'react'
import CardItem from './components/CardItem'
import productsData from './productsData'

function App() {
  const [cart, setCart] = useState(productsData)

  const increase = (id) => {

    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            amount: product.amount + 1,
            priceTotal: (product.amount + 1) * product.price
          }
        };
        return product
      })
    })
  }

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            amount: product.amount - 1 > 1 ? product.amount - 1 : 1,
            priceTotal: (product.amount - 1 > 1 ? product.amount - 1 : 1) * product.price,
          }
        };
        return product
      })
    })
  }

  const [totalAmount, setTotalAmount] = useState({
    totalPrice: cart.reduce((prev, current) => {return prev + current.priceTotal}, 0)
  })

  useEffect(() => {
    setTotalAmount({
      totalPrice: cart.reduce((prev, current) => {
        return prev + current.priceTotal
      }, 0)
    })
  }, [cart])

  
  const handleRemove = (id) => {
    setCart((cart) =>  cart.filter((item)=> id !== item.id))
    
  
  }
  const cards = cart.map (item => {
    return (
      <CardItem 
        key = {item.id}
        img = {item.url}
        name = {item.name}
        price = {item.price}
        amount = {item.amount}
        priceTotal = {item.priceTotal}
        handleRemove = {() => {handleRemove(item.id)}}
        increase = {() => {increase(item.id)}}
        decrease = {() => {decrease(item.id)}}
      />
    )
  })

  return (
    <div className='w-full min-h-[55rem] bg-gradient-to-r from-purple-400 via-blue-400 to-blue-200 bg-cover bg- flex justify-center items-center'>
      <div className=' w-4/5 h-auto shadow-md rounded-xl bg-white bg-opacity-45 m-16 '>
        <h2 className='text-white font-bold text-3xl p-10'>Корзина</h2>
        <div className='flex h-full'>
          <div className=' w-full h-full'>
            {cards}
          </div>
          <div className='bg-white bg-opacity-70 w-72 h-40 rounded-xl mr-9 p-6 flex flex-col justify-center items-center shadow-md mb-6'>
            <span className='font-extrabold text-xl text-gray-600'>ИТОГО:</span>
            <span className='font-extrabold text-xl text-gray-600 mt-2'>{totalAmount.totalPrice}₽</span>
            
            {cart.length < 1 ? <button type="button" className='rounded-xl bg-red-500 opacity-20 w-60 h-12 mt-3 text-white shadow-md' disabled >Заказать</button> : <button type="button" className='rounded-xl bg-blue-600 opacity-50 w-60 h-12 mt-3 text-white shadow-md cursor-pointer'>Заказать</button>}
              
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
