import { useState } from 'react'

export function ProductCard({product}) {
  const [productQuantity, setProductQuantity] = useState(0);
  function productAdd() {
    return setProductQuantity(productQuantity + 1)
  }
  
  function productRemove() {
    if (productQuantity > 0) {
      return setProductQuantity(productQuantity - 1)
    }
  }
  
  const ProductCardButton = () => {
    return (
      <div className="p-4">
        <button type="button" className="booker hover:bg-blue-700 text-white font-bold py-2 px-4 rounded booker">Shop Now</button>
      </div>
    )
  }

  return (
    <>
      <div>
      <p className="font-bold mt-4 mb-4">{ product.midascode }</p>
      <img src={ product.image } className="mb-5" />
      <p className="font-bold">{ product.title }</p>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
        <div>{ product.volume }</div>
        <div className="text-xl font-bold">&pound;{ product.price }</div>
        <div><a href="">Add to List</a></div>
        <div>RRP: { product.rrp }</div>
        <div></div><div>POR: { product.por }%</div>
      </div>
      <div className="flex justify-center">
        <button onClick={ productRemove }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type="text" className="block w-16 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-2 mr-2" value={ productQuantity } />
        <button onClick={ productAdd }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <ProductCardButton />
      </div>
    </>
  )
}